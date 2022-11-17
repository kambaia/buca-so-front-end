
import { Grid, GridProps } from '@mui/material';
import React, { ReactElement } from 'react';

import { StyledGrid } from './style';

const FormGrid = ({ children, ...props }: GridProps): ReactElement => {
  return (
    <StyledGrid container spacing={1} {...props}>
      <Grid item xs={12}>
        {children}
      </Grid>
    </StyledGrid>
  );
};

export default FormGrid;
