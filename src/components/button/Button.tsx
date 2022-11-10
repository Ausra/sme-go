import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme } from "../../utils/global-styles";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  dataTestId?: string;
  title?: string;
  primary?: boolean;
  margin?: string;
}

export const defaultTestId = "styled-button";

const StyledButton = styled.button<{
  primary?: boolean | undefined;
  margin?: string;
}>`
  border-radius: 24px;
  border: 1px solid ${defaultTheme.button.primaryColor};
  color: white;
  margin: ${(props) => (props.margin ? props.margin : `8px 16px`)};
  padding: 12px 24px;
  height: 42px;

  background: ${(props) =>
    props.primary
      ? defaultTheme.button.primaryColor
      : defaultTheme.button.secondaryColor};
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
}) => {
  return (
    <>
      <StyledButton
        primary={primary}
        onClick={onClick}
        data-testid={defaultTestId || dataTestId}
        margin={margin}
      >
        {title}
      </StyledButton>
    </>
  );
};

export default Button;
