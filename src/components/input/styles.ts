import { InputStatus } from "./Input";
import styled from "styled-components/macro";
import { defaultTheme, typeScale } from "../../utils/global-styles";

export const Container = styled.div`
  position: relative;
  min-height: 60px;
  margin: 6px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledInput = styled.input<{
  status?: string | undefined;
}>`
  font-size: 14px;
  border: 1px solid;
  border-color: ${(props) =>
    props.status === InputStatus.error
      ? defaultTheme.status.errorColor
      : defaultTheme.input.borderColor};
  width: 100%;
  height: 60px;
  border-radius: 8px;
  padding-top: 16px;
  padding-left: 16px;
  background-color: ${defaultTheme.input.defaultBackgroundColor};
  outline: none;
  ::placeholder {
    color: transparent;
  }
  :not(:placeholder-shown),
  :focus {
    background-color: ${defaultTheme.input.backgroundColor};
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 20px;
  transition: 0.3s ease all;

  ${StyledInput}:not(:placeholder-shown) ~ &,
  ${StyledInput}:focus ~ & {
    top: 10px;
    left: 16px;
    font-size: ${typeScale.small};
    opacity: 0.6;
  }
`;

export const ErrorMessageContainer = styled.div`
  margin: -6px 0 6px 16px;
  height: 20px;
`;
