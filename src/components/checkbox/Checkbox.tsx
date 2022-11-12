import { FunctionComponent, ReactElement } from "react";
import styled from "styled-components/macro";
import Text from "../text";

interface CheckboxProps {
  dataTestId?: string;
  children: string | ReactElement[];
  id: string;
  checked: boolean;
  handleOnChange: (e: any) => void;
}

const StyledCheckboxInput = styled.input``;
const StyledLabel = styled.label``;

const Checkbox: FunctionComponent<CheckboxProps> = ({
  children,
  id,
  checked,
  handleOnChange,
}) => {
  return (
    <>
      <StyledCheckboxInput
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleOnChange}
      />
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
    </>
  );
};

export default Checkbox;
