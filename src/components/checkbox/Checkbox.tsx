import { FunctionComponent, ReactElement, useState } from "react";
import { Container, StyledCheckboxInput, StyledLabel } from "./style";

export interface CheckboxProps {
  dataTestId?: string;
  children?: string | ReactElement[];
  id: string;
  showChecked?: boolean;
  onChangeCallback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const defaultTestId = "styled-checkbox-container";
export const checkboxTestId = "styled-checkbox-input";

const Checkbox: FunctionComponent<CheckboxProps> = ({
  dataTestId,
  children,
  id,
  showChecked,
  onChangeCallback,
}) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChangeCallback && onChangeCallback(event);
  };
  return (
    <Container data-testid={defaultTestId}>
      <StyledCheckboxInput
        data-testid={dataTestId || checkboxTestId}
        type="checkbox"
        id={id}
        checked={showChecked || checked}
        onChange={handleChange}
      />
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
    </Container>
  );
};

export default Checkbox;
