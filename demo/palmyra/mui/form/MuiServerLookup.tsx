import { forwardRef, MutableRefObject, useEffect, useRef, useState } from "react";
import { IServerLookupDefinition } from "./types";
import { IFormFieldError, IServerLookupField, useServerLookupFieldManager } from "../../../../src/palmyra";
import FieldDecorator from "./FieldDecorator";
import { getFieldLabel } from "./util";
import { Autocomplete, CircularProgress, FormControl, FormHelperText, TextField } from "@mui/material";
import { delayGenerator } from "@palmyralabs/ts-utils";


const delay100 = delayGenerator(100);

const MuiServerLookup = forwardRef(function MuiServerLookup(props: IServerLookupDefinition,
    ref: MutableRefObject<IServerLookupField>) {

    const [open, setOpen] = useState(false);

    const inputRef: any = useRef(null);

    const fieldManager = useServerLookupFieldManager(props.attribute, props);
    const { getError, getValue, setValue, hasValueInOptions, getOptionValue,
        setSearchText, refreshOptions, options, getFieldProps } = fieldManager;

    const loading = open && options.length < 1;

    const value = getValue();
    const error: IFormFieldError = getError();

    const currentRef = ref ? ref : useRef<IServerLookupField>(null);

    useEffect(() => {
        if (open)
            delay100(refreshOptions);
    }, [open]);

    const callbacks = {
        onChange: (d: any, value: any) => {
            setValue(value);
        },
        onInputChange: (d: any, inputValue: any) => {
            if (open) {
                delay100(setSearchText, inputValue);
            }
            return true;
        }
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
                {...getFieldProps()}
                value={value}
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