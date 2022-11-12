import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme } from "../../utils/global-styles";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  dataTestId?: string;
  title?: string;
  margin?: string;
}

export const defaultTestId = "styled-text-button";

const StyledTextButton = styled.button<{
  margin?: string;
}>`
  color: ${defaultTheme.button.primaryColor};
  margin: ${(props) => (props.margin ? props.margin : `8px 16px`)};
  padding: 12px 24px;
  height: 42px;
  border: none;
  background: transparent;
`;

const TextButton: FunctionComponent<ButtonProps> = ({
  title,
  onClick,
  dataTestId,
  margin,
}) => {
  return (
    <>
      <StyledTextButton
        onClick={onClick}
        data-testid={defaultTestId || dataTestId}
        margin={margin}
      >
        {title}
      </StyledTextButton>
    </>
  );
};

export default TextButton;
