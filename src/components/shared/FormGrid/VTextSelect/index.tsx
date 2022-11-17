import * as React from 'react';
import { Autocomplete, Fade, TextField, Tooltip } from '@mui/material';

type optionData = {
  label: string;
  value: string;
};
type VSelect = {
  tips?: string;
  optionData: Array<optionData>;
  value?: string | undefined;
  placeholder?: string;
  onChange: (value: optionData) => void;
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
const VTextSelect: React.FC<VSelect> = ({ tips, placement, optionData, onChange }) => {
  const [value, setValue] = React.useState<optionData | null>(null);
  return (
    <Tooltip title={tips || ''} arrow TransitionComponent={Fade} placement={placement}>
      <Autocomplete
        disablePortal
        options={optionData}
        size="small"
        fullWidth
        value={value}
        onChange={(e, value: optionData | null) => {
          setValue(value!);
          onChange(value!);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </Tooltip>
  );
};

export default VTextSelect;
