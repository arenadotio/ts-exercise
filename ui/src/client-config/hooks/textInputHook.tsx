import { Dispatch, SetStateAction, useState, useCallback, useEffect } from 'react';

const useTextInputHook = (
  fieldName: string,
  fieldValue: any,
  validators?: ((value: any, fieldName: string) => any)[]
): [string, Dispatch<SetStateAction<string>>, boolean, string] => {
  const [error, setError] = useState<string>('');
  const [value, setValue] = useState<any>(fieldValue);
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

export default useTextInputHook;
