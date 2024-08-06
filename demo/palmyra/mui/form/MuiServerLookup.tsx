import { useRef, useImperativeHandle, forwardRef, MutableRefObject, useState, useEffect } from 'react';
import { Autocomplete, AutocompleteProps, CircularProgress, FormControl, FormHelperText, TextField } from '@mui/material';
import FieldDecorator from './FieldDecorator';
import { IFormFieldError, IMutateOptions, ISelectField, ITextField, useFieldManager } from '../../../../src/palmyra';
import { generateOptions, getFieldLabel } from './util';
import { IEventListeners, IServerLookupDefinition } from './types';
import { LookupStore } from '@palmyralabs/palmyra-wire';
import { useServerQuery, IServerQueryInput } from '../../../../src/palmyra/wire/ServerQueryManager';
import { delayGenerator, getValueByKey, hasDot } from '@palmyralabs/ts-utils';


const delay100 = delayGenerator(100);
const delay = delayGenerator(300);

const MuiServerLookup = forwardRef(function MuiServerLookup(props: IServerLookupDefinition, ref: MutableRefObject<ISelectField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, setMutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    // const variant = props.variant || 'standard';
    const [lookupOptions, setLookupOptions] = useState<Array<any>>([]);

    const total = useRef<number>(0);
    const [searchText, setSearchText] = useState('');
    const [open, setOpen] = useState(false);
    const data = fieldManager.getValue();

    const loading = open && lookupOptions.length < (data ? 2 : 1);
    const store: LookupStore<any> = props.store //|| fieldManager.store;
    // const eventListeners: IEventListeners = fieldManager.eventListeners;
    const serverLookupOptions = props.lookupOptions || {};
    const idKey = serverLookupOptions.idAttribute || 'id';
    const labelKey = serverLookupOptions.displayAttribute || 'name';
    const searchKey = labelKey;
    const defaultParams = props.defaultParams

    const serverQueryOptions: IServerQueryInput = {
        store, endPointOptions: props.storeOptions.endPointOptions, fetchAll: true,
        pageSize: props.pageSize || 15, quickSearch: searchKey, initialFetch: false, defaultParams
    };

    const serverQuery = useServerQuery(serverQueryOptions);

    const { setQueryFilter, setEndPointOptions, setQuickSearch,
        totalRecords, refreshData, getQueryRequest } = serverQuery;

    const serverResult = serverQuery.data;

    const idAccessor = hasDot(idKey) ? (d: any) => (getValueByKey(idKey, d)) : (d: any) => (d?.[idKey]);
    const labelAccessor = hasDot(labelKey) ? (d: any) => (getValueByKey(labelKey, d)) : (d: any) => (d?.[labelKey]);

    useEffect(() => {
        var option: any = data != '' ? data : undefined;
        if (option) {
            setLookupOptions([option]);
        }
    }, [data]);

    useEffect(() => {
        const result = serverResult ? [...serverResult] : [];
        const option = data != '' ? data : undefined;
        const id = idAccessor(option);
        const idV = labelAccessor(option);

        if (result && id && idV && !getMatch(result, id)) {
            result.unshift(option);
        }
        setLookupOptions(result);

        if (total.current < totalRecords)
            total.current = totalRecords;

    }, [serverResult, totalRecords])

    useEffect(() => {
        delay(refreshOptions);
    }, [searchText]);

    useEffect(() => {
        delay100(refreshOptions);
    }, [open]);

    useEffect(() => {
        if (undefined != props.fetchDefault && null != props.fetchDefault) {
            const index = props.fetchDefault;
            const params = getQueryRequest();
            store.query(params).then((d) => {
                const result = d.result;
                const idx = result.length > index ? index : 0;
                fieldManager.setValue(result[idx], false, false);
            }).catch((e) => {
                console.error(e);
            });
        }
    }, [])

    function refreshOptions() {
        if (open) {
            if (searchText.length > 0 && searchText != labelAccessor(data)) {
                setQuickSearch('*' + searchText + '*');
            } else {
                if (serverResult) {
                    setQuickSearch(null);
                }
                else {
                    refreshData();
                }
            }
        }
    }

    // var callbacks = {
    //     onBlur: eventListeners.onBlur,
    //     onFocus: eventListeners.onFocus,
    //     onChange: (d: any, value: any) => {
    //         updateFieldValue(value);
    //     },
    //     onInputChange: (d: any, inputValue: any) => {
    //         setSearchText(inputValue);
    //         return true;
    //     }
    // }

    // const updateFieldValue = (value: any) => {
    //     eventListeners.onValueChange(value);
    // }

    const getLabel = (option: any) => {
        if (typeof option == 'object')
            return labelAccessor(option) + '';
        else {
            console.log(option);
        }
        return '';
    }

    function getMatch(result: any, key: any): any {
        return result.find((r: any) => {
            if (idAccessor(r) == key) {
                return r;
            }
        })
    }

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                if (inputRef)
                    inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            getValue,
            clear() {
                setValue('');
            },
            setValue(d: any, doValidate: boolean = false) {
                setValue(d);
            },
            setDisabled(disabled: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, disabled }));
            },
            setVisible(visible: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, visible }));
            },
            setRequired(required: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, required }));
            },
            setReadOnly(readonly: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, readonly }));
            },
            setAttribute(options: IMutateOptions) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, ...options }));
            },
            setFilter(filter: any) {
                setQueryFilter(filter)
            },
            resetFilter() {
                setQueryFilter({});
            },
            setEndPointOptions(options: any) {
                setEndPointOptions(options);
            },
            getCurrentData: () => {
                return data;
            },
            refresh: () => {
                refreshData();
            },
            addFilter(key: string, v: any) {
                setQueryFilter((f) => {
                    f[key] = v;
                    return { ...f }
                })
            },
            setDefaultFilter(d: any) {

            },
            setSortOptions(d) {

            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);

    var inputProps = generateOptions(props, mutateOptions, getValue());

    if (props.readOnly) {
        inputProps.inputProps = { readOnly: true };
    }

    const hasValues = (option: any, value: any) => {
        if (option instanceof Array) {
            return option.some((o) => idAccessor(o) == idAccessor(value));
        }
        else return idAccessor(option) == idAccessor(value)
    }


    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl fullWidth error={error.status}>
                <Autocomplete
                    includeInputInList
                    autoHighlight
                    multiple={props.multiple}
                    readOnly={props.readOnly}
                    renderOption={props.renderOption}
                    isOptionEqualToValue={hasValues}
                    filterOptions={(x) => x}
                    renderInput={(params) => <TextField {...params} inputRef={(i) => { inputRef.current = i; }}
                        // variant={props.variant || 'standard'}label={props.label}
                        // autoFocus={props.autoFocus} 
                        required={props.required}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {loading ? <CircularProgress color="inherit" size={18} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }}
                    />}
                    getOptionLabel={getLabel}
                    {...inputProps}
                    options={lookupOptions}
                    open={open}
                    onClose={() => { setOpen(false) }}
                    onOpen={(e) => { setOpen(true); }}
                // {...callbacks}
                >
                </Autocomplete>
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    );
});

export default MuiServerLookup;