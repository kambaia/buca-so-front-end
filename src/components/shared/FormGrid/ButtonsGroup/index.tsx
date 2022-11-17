import { ReactElement, HTMLAttributes } from 'react';
import * as BIIcons from "react-icons/bi";
import { StyledButtonsGroup } from './style';

const FormGridButtonsGroup = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return <StyledButtonsGroup
   {...props}>
    <span>
    <BIIcons.BiLogIn size={60} color="#fff" />
 </span>{children}
   </StyledButtonsGroup>;
};

export default FormGridButtonsGroup;
