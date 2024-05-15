import { useState } from 'react';
import StyledFormControl from './StyledFormControl';
import { ColorPicker, ColorValue } from 'mui-color';
import { ColorPickerInputProps } from '../utils/color-picker-props.model';

const ColorPickerInput = ({ label = 'unset', value = 'black', onChange }: ColorPickerInputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputValue, setInputValue] = useState<ColorValue>();
  const [showError, setShowError] = useState<boolean>(false);
  const handleChange = (realValue: ColorValue) => {
    if (onChange && realValue) {
      setInputValue(realValue);
      onChange(realValue);
    } else {
      setShowError(true);
    }
  };
  return (
    <StyledFormControl
      showError={showError}
      label={label}
      control={<ColorPicker value={value} onChange={handleChange} />}
    />
  );
};

export default ColorPickerInput;
