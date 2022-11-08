import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme } from "../../utils/global-styles";

interface InputProps {
  dataTestId?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  inputText?: string;
}

const defaultTestId = "styled-input-container";

const Container = styled.div`
  position: relative;
  width: 575px;
  height: 60px;
`;

const StyledInput = styled.input`
  font-size: 14px;
  border: 1px solid ${defaultTheme.input.borderColor};
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: ${defaultTheme.input.defaultBackgroundColor};
  outline: none;
`;

const StyledLabel = styled.label`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 14px;
  transition: 0.3s ease all;

  ${StyledInput}:focus ~ & {
    top: 6px;
    left: 5px;
    font-size: 11px;
    opacity: 0.6;
    background-color: ${defaultTheme.input.backgroundColor};
  }
`;

const Input: FunctionComponent<InputProps> = ({ dataTestId, label, type }) => {
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <StyledInput id="inputField" type={type} />
      <StyledLabel htmlFor="inputField">{label}</StyledLabel>
    </Container>
  );
};

export default Input;
