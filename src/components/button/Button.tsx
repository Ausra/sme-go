import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme } from "../../utils/global-styles";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  dataTestId?: string;
  title?: string;
  primary?: boolean;
  margin?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export interface StyledButtonProps {
  primary?: boolean | undefined;
  margin?: string;
  disabled?: boolean;
}

export const defaultTestId = "styled-button";

const getBackgroundColor = (props: StyledButtonProps) => {
  if (props.disabled) {
    return defaultTheme.button.disabledColor;
  } else {
    return props.primary
      ? defaultTheme.button.primaryColor
      : defaultTheme.button.secondaryColor;
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 24px;
  border: 1px solid ${defaultTheme.button.primaryColor};
  color: white;
  margin: ${(props) => (props.margin ? props.margin : `8px 16px`)};
  padding: 12px 24px;
  height: 42px;

  background: ${(props) => getBackgroundColor(props)};
  color: ${(props) =>
    props.primary
      ? defaultTheme.button.primaryTextColor
      : defaultTheme.button.secondaryTextColor};
`;

const Button: FunctionComponent<ButtonProps> = ({
  title,
  primary,
  onClick,
  dataTestId,
  margin,
  type,
  disabled,
}) => {
  return (
    <>
      <StyledButton
        primary={primary}
        type={type}
        onClick={onClick}
        data-testid={defaultTestId || dataTestId}
        margin={margin}
        disabled={disabled}
      >
        {title}
      </StyledButton>
    </>
  );
};

export default Button;
