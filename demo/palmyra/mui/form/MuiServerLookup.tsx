import { forwardRef, MutableRefObject, useEffect, useRef, useState } from "react";
import { IServerLookupDefinition } from "./types";
import { IFormFieldError, IServerLookupField, useServerFieldManager } from "../../../../src/palmyra";
import FieldDecorator from "./FieldDecorator";
import { getFieldLabel } from "./util";
import { Autocomplete, CircularProgress, FormControl, FormHelperText, TextField } from "@mui/material";
import { delayGenerator, getValueAccessor, getValueSetter, setValueByKey } from "@palmyralabs/ts-utils";


const delay100 = delayGenerator(100);

const MuiServerLookup = forwardRef(function MuiServerLookup(props: IServerLookupDefinition,
    ref: MutableRefObject<IServerLookupField>) {
    const total = useRef<number>(0);
    const [options, setOptions] = useState<Array<any>>([]);
    const [searchText, setSearchText] = useState('');
    const [open, setOpen] = useState(false);
    const { attribute } = props;

    const valueAccessor = getValueAccessor(attribute);
    const valueSetter = getValueSetter(attribute);

    const fieldWriter = (v: any, data: any) => {
        if (v) {
            const key = getOptionKey(v);
            const value = getOptionValue(v);

            if (props.displayAttribute) {
                setValueByKey(props.displayAttribute, data, value);
                valueSetter(data, key)
            } else if (props.lookupOptions) {
                const k = props.lookupOptions.idAttribute;
                const v = props.lookupOptions.labelAttribute;
                const r = { [k]: key, [v]: value };
                valueSetter(data, r);
            } else {
                valueSetter(data, key)
            }
        } else {
            valueSetter(data, undefined);
            if (props.displayAttribute) {
                setValueByKey(props.displayAttribute, data, undefined);
            }
        }
    }

    const fieldAccessor = (formData: any) => {
        const rawData = valueAccessor(formData);
        const tgtKey = props.storeOptions?.idAttribute || props.lookupOptions?.idAttribute || "id";
        const valueKey = props.storeOptions.labelAttribute || props.lookupOptions.labelAttribute || "name";

        if (props.lookupOptions && typeof rawData == 'object') {
            const k = props.lookupOptions.idAttribute;
            const v = props.lookupOptions.labelAttribute;
            if (rawData) {
                const key: any = rawData[k];
                const value: any = rawData[v];
                const result = {};
                setValueByKey(tgtKey, result, key);
                setValueByKey(valueKey, result, value);
                return result;
            }
            return {};
        } else {
            if (undefined != rawData) {
                const result = {};
                setValueByKey(tgtKey, result, rawData);
                return result;
            }
            return {};
        }
        return rawData;
    }


    const inputRef: any = useRef(null);
    const loading = open && options.length < 1;

    const fieldManager = useServerFieldManager(props.attribute, props, { fieldAccessor, fieldWriter });
    const { getError, getValue, setValue,
        serverQuery, hasValueInOptions, getOptionValue, getOptionKey
    } = fieldManager;

    const data = getValue();

    const currentRef = ref ? ref : useRef<IServerLookupField>(null);
    const error: IFormFieldError = getError();


    const { setQuickSearch, totalRecords, refreshData } = serverQuery;

    const serverResult = serverQuery.data;



    useEffect(() => {
        if (data && typeof data == 'object') {
            setOptions([data]);
        }
    }, [data]);

    useEffect(() => {
        const result = serverResult ? [...serverResult] : [];
        // const option = undefined;


        // if (result && id && idV && !getMatch(result, id)) {
        //     result.unshift(option);
        // }

        setOptions(result);

        if (total.current < totalRecords)
            total.current = totalRecords;

    }, [serverResult, totalRecords])

    function refreshOptions() {
        if (open) {
            if (searchText.length > 0) { //&& searchText != labelAccessor(getValue())) {
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

    useEffect(() => {
        if (open)
            delay100(refreshOptions);
    }, [open]);

    const callbacks = {
        onChange: (d: any, value: any) => {
            updateFieldValue(value);
        },
        onInputChange: (d: any, inputValue: any) => {
            setSearchText(inputValue);
            return true;
        }
    }

    const updateFieldValue = (value: any) => {
        setValue(value);
    }

    return <><FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
        customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
        <FormControl fullWidth error={error.status}>
            <Autocomplete
                includeInputInList
                autoHighlight
                multiple={props.multiple}
                readOnly={props.readOnly}
                renderOption={props.renderOption}
                isOptionEqualToValue={hasValueInOptions}
                filterOptions={(x) => x}
                renderInput={(params) => <TextField {...params} inputRef={(i) => { inputRef.current = i; }}
                    variant={'standard'} label={props.title}
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
                getOptionLabel={(o) => getOptionValue(o) + ''}
                {...props}
                value={data}
                options={options}
                open={open}
                onClose={() => { setOpen(false) }}
                onOpen={(e) => { setOpen(true); }}
                {...callbacks}>
            </Autocomplete>
            <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
        </FormControl>
    </FieldDecorator></>
});

export default MuiServerLookup;