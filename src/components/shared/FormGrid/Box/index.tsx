import { GridProps } from '@mui/material';
import React, { ReactElement } from 'react';


import { StyledBox } from './style';

const FormGrid = ({ children, ...props }: GridProps): ReactElement => {
  return (
    <StyledBox container {...props}>
      {children}
    </StyledBox>
  );
};

export default FormGrid;
