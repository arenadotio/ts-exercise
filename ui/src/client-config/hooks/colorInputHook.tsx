import { ColorValue } from 'mui-color';
import { Dispatch, SetStateAction, useState, useCallback, useEffect } from 'react';

const useColorInputHook = (
  fieldName: string,
  fieldValue: ColorValue,
  validators?: ((value: ColorValue, fieldName: string) => any)[]
): [ColorValue, Dispatch<SetStateAction<ColorValue>>, boolean, string] => {
  const [error, setError] = useState<string>('');
  const [value, setValue] = useState<ColorValue>(fieldValue);
  const [isValid, setIsValid] = useState<boolean>(true);

  const validate = useCallback(() => {
    let error = '';
    if (!validators) {
      return error;
    }
    for (const validator of validators) {
      const detectedError = validator(value, fieldName);
      if (detectedError && detectedError.length > 0) {
        error = detectedError;
        setIsValid(false);
        break;
      }
      setIsValid(true);
    }
    setError(error);
  }, [validators, fieldName, value]);

  useEffect(() => {
    validate();
  }, [validate, value]);

  return [value, setValue, isValid, error];
};

export default useColorInputHook;
