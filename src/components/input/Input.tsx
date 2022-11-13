import { FunctionComponent, useState } from "react";
import { defaultTheme } from "../../utils/global-styles";
import Text from "../text";
import {
  Container,
  ErrorMessageContainer,
  StyledInput,
  StyledLabel,
} from "./styles";

export enum InputStatus {
  error = "error",
}

export type InputType = "text" | "email" | "number" | "tel";
export interface InputProps extends React.HTMLAttributes<HTMLElement> {
  dataTestId?: string;
  label: string;
  type?: InputType;
  name?: string;
  status?: InputStatus;
  statusMessage?: string;
  customValue?: string | number;
  disabled?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  onChangeCallback?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCallback?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onBlurCallback?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const defaultTestId = "styled-input-container";
export const errorMessageTestId = "styled-input-error-message";
export const inputTestId = "styled-input";

const Input: FunctionComponent<InputProps> = ({
  dataTestId,
  label,
  type = "text",
  onChangeCallback,
  onClickCallback,
  onBlurCallback,
  name,
  customValue,
  status,
  statusMessage,
  disabled,
  pattern,
  minLength,
  maxLength,
}) => {
  const [value, setValue] = useState("");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChangeCallback && onChangeCallback(event);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onClickCallback && onClickCallback(event);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlurCallback && onBlurCallback(event);
  };
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <StyledInput
        id="styled-input"
        data-testid={inputTestId}
        type={type}
        status={status}
        onChange={handleOnChange}
        onClick={handleOnClick}
        placeholder=" "
        name={name}
        value={customValue || value}
        onBlur={handleOnBlur}
        disabled={disabled}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
      />
      <StyledLabel htmlFor="styled-input">{label}</StyledLabel>
      {status && (
        <ErrorMessageContainer data-testid={errorMessageTestId}>
          <Text color={defaultTheme.status.errorColor} size="small">
            {statusMessage}
          </Text>
        </ErrorMessageContainer>
      )}
    </Container>
  );
};

export default Input;
