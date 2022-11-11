import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import Text from "../text";

interface CheckboxProps {
  dataTestId?: string;
  children: string;
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
      <StyledLabel htmlFor={id}>
        {children && <Text>{children}</Text>}
      </StyledLabel>
    </>
  );
};

export default Checkbox;
