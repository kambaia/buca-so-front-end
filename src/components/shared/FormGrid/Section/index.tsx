import React, { ReactElement } from 'react';

import { NComponents } from '@typings/components';

import { StyledFormSection, StyledInlineFormSection, StyledFormGridSection } from './style';

const FormGridSection = ({
  title,
  children,
  inline,
  ...props
}: NComponents.TFormGridSectionProps): ReactElement => {
  const FormSection = inline ? StyledInlineFormSection : StyledFormSection;

  return (
    <FormSection {...props}>
      {title && <StyledFormGridSection>{title}:</StyledFormGridSection>}
      {children}
    </FormSection>
  );
};

export default FormGridSection;
