import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme } from "../../utils/global-styles";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  dataHook?: string;
  title?: string;
  primary?: boolean;
}

const StyledButton = styled.button<{
  primary?: boolean | undefined;
}>`
  border-radius: 24px;
  border: 1px solid ${defaultTheme.button.primaryColor};
  color: white;
  margin: 0.5em 1em;
  padding: 12px 24px;

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
}) => {
  return (
    <>
      <StyledButton primary={primary} onClick={onClick}>
        {title}
      </StyledButton>
    </>
  );
};

export default Button;
