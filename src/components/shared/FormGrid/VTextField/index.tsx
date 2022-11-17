import React, { useState } from 'react';
import { Fade, TextField, TextFieldProps, Tooltip } from '@mui/material';
type TVTextFieldProps = TextFieldProps & {
  name: string;
  tips?: string;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
};
 const VTextField: React.FC<TVTextFieldProps> = ({ tips, placement, ...rest }) => {
  const [value, setValue] = useState('');
  return (
    <>
      <Tooltip title={tips || ''} arrow TransitionComponent={Fade} placement={placement}>
        <TextField
          {...rest}
          error={rest.error}
          helperText={rest.helperText}
          onChange={(e) => {
            setValue(e.target.value);
            rest.onChange?.(e);
          }}
          value={value}
          onKeyDown={(e) => {
            rest.onKeyDown?.(e);
          }}
        />
      </Tooltip>
    </>
  );
};

export default VTextField;