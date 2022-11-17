
import { ReactElement } from "react";
import { ButtonProps } from "@mui/material";
interface ICustomButton extends ButtonProps {
  customcolor?: string;
  "data-test"?: string;
  margin?: string | number;
  component?: string;
  target?: string;
  rel?: string;
}

import { ButtonFilder } from "./styles";

const CustomButton = (props: ICustomButton): ReactElement => {
  return <ButtonFilder>{props.title}
  </ButtonFilder>;
};

export default CustomButton;
