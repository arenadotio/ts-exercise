import { FormControl, FormControlLabel } from '@mui/material';

type StyledFormControlProps = {
  showError: boolean;
  control: JSX.Element;
  label: string;
};

const StyledFormControl = ({ showError, control, label }: StyledFormControlProps) => {
  return (
    <FormControl error={showError} fullWidth={true} margin="dense">
      <FormControlLabel
        labelPlacement="top"
        sx={{
          '& .MuiTypography-root': {
            textAlign: 'left',
          },
        }}
        control={control}
        label={label}
      />
    </FormControl>
  );
};

export default StyledFormControl;
