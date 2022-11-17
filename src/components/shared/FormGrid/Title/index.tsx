import React, { ReactElement } from 'react';

import { NComponents } from '@typings/components';

import { StyledFormGridTitle } from './style';

const FormGridTitle = ({ title, ...props }: NComponents.TFormGridTitleProps): ReactElement => {
  return <StyledFormGridTitle {...props}>{title}</StyledFormGridTitle>;
};

export default FormGridTitle;
