import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme } from "../../utils/global-styles";
import Text from "../text";

export interface InputProps extends React.HTMLAttributes<HTMLElement> {
  dataTestId?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  inputText?: string;
  name?: string;
  status?: string;
  statusMessage?: string;
  value?: string | number;
}

const defaultTestId = "styled-input-container";

const Container = styled.div`
  position: relative;
  height: 60px;
  margin: 6px 0;
`;

const StyledInput = styled.input<{
  status?: string | undefined;
}>`
  font-size: 14px;
  border: 1px solid
    ${(props) =>
      props.status
        ? defaultTheme.status.errorColor
        : defaultTheme.input.borderColor};
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
  }
`;

const Input: FunctionComponent<InputProps> = ({
  dataTestId,
  label,
  type,
  onChange,
  onClick,
  onBlur,
  name,
  value,
  status,
  statusMessage,
}) => {
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <StyledInput
        id="inputField"
        type={type}
        status={status}
        onChange={onChange}
        onClick={onClick}
        name={name}
        value={value}
        onBlur={onBlur}
      />
      <StyledLabel htmlFor="inputField">{label}</StyledLabel>
      {status && (
        <Text color={defaultTheme.status.errorColor}>{statusMessage}</Text>
      )}
    </Container>
  );
};

export default Input;
