import { InputAdornment } from "@mui/material";
import VTextField from "../VTextField";

const VIconTextField = ({ iconStart, iconEnd, InputProps, ...props }:any) => {
  return (
    <VTextField
    fullWidth
    size="small"
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};

export default VIconTextField;
