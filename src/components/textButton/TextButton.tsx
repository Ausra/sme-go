import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme, typeScale } from "../../utils/global-styles";
import { TextSize } from "../text/Text";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  dataTestId?: string;
  title?: string;
  margin?: string;
  size?: TextSize;
  height?: string;
}

export const defaultTestId = "styled-text-button";

const StyledTextButton = styled.button<{
  margin?: string;
  size?: TextSize;
  height?: string;
}>`
  color: ${defaultTheme.button.primaryColor};
  margin: ${(props) => (props.margin ? props.margin : `8px 16px`)};
  height: ${(props) => (props.height ? props.height : `42px`)};
  display: inline-block;
  border: none;
  background: transparent;
  font-size: ${(props) =>
    props.size ? typeScale[props.size] : typeScale.medium};
`;

const TextButton: FunctionComponent<ButtonProps> = ({
  title,
  onClick,
  dataTestId,
  margin,
  size,
  height,
}) => {
  return (
    <>
      <StyledTextButton
        onClick={onClick}
        data-testid={defaultTestId || dataTestId}
        margin={margin}
        size={size}
        height={height}
      >
        {title}
      </StyledTextButton>
    </>
  );
};

export default TextButton;
