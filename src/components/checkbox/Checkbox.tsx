import { FunctionComponent, ReactElement } from "react";
import styled from "styled-components/macro";

export interface CheckboxProps {
  dataTestId?: string;
  children: string | ReactElement[];
  id: string;
  checked?: boolean;
  onChange: (e: any) => void;
}

const StyledCheckboxInput = styled.input``;
const StyledLabel = styled.label``;

const Checkbox: FunctionComponent<CheckboxProps> = ({
  children,
  id,
  checked,
  onChange,
}) => {
  return (
    <>
      <StyledCheckboxInput
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
    </>
  );
};

export default Checkbox;
