import { HTMLInputTypeAttribute, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField/TextField';
import StyledFormControl from './StyledFormControl';

export type TextInputProps = {
  label?: string;
  value?: string | null;
  onChange?: (value: any) => void;
  error?: string | null;
  type?: HTMLInputTypeAttribute;
  multiline?: boolean;
};

const TextInput = ({
  type = 'text',
  label = 'unset',
  value = null,
  onChange,
  error = undefined,
  ...props
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string>(value || '');
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [wasPasted, setWasPasted] = useState<boolean>(false);

  const handleChange = (event: { target: { value: string | any } }) => {
    const { value } = event.target;

    setInputValue((previousValue) => {
      if (value.length > previousValue.length + 1 || value.length < previousValue.length - 1) {
        setWasPasted(true);
      } else {
        setWasPasted(false);
      }
      return value;
    });
    setIsChanged(true);
  };

  useEffect(() => {
    if (onChange) {
      onChange(inputValue);
    }
  }, [inputValue, onChange]);
  const showError = ((isChanged && !isFocused) || wasPasted) && Boolean(error);

  return (
    <StyledFormControl
      showError={showError}
      label={label}
      control={
        <TextField
          name={label}
          size="small"
          variant="outlined"
          fullWidth={true}
          margin="dense"
          error={showError}
          sx={{
            fieldset: {
              background: showError ? 'rgb(255,0,0,0.1)' : undefined,
            },
            '& .MuiFormHelperText-contained': {
              color: 'red',
              fontSize: '14px',
            },
          }}
          type={type}
          multiline={props.multiline}
          rows={props.multiline ? 4 : 1}
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          helperText={showError ? error : ' '}
          {...props}
          autoComplete={type}
        />
      }
    />
  );
};

export default TextInput;
