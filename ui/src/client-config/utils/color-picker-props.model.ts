import { ColorValue } from 'mui-color';
import { HTMLInputTypeAttribute } from 'react';

export type ColorPickerInputProps = {
  label?: string;
  value?: ColorValue | string;
  onChange?: (value: ColorValue) => void;
  error?: string | null;
  type?: HTMLInputTypeAttribute;
};
