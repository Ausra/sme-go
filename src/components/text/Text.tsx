import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme, typeScale } from "../../utils/global-styles";

type TextSize = "small" | "medium" | "large";

interface TextProps {
  dataTestId?: string;
  children?: string | number;
  size?: TextSize;
  color?: string;
}

const defaultTestId = "styled-text";

const StyledText = styled.p<{ size?: TextSize; color?: string }>`
  font-size: ${(props) =>
    props.size ? typeScale[props.size] : typeScale.medium};
  color: ${(props) => (props.color ? props.color : defaultTheme.textColor)};
  pointer-events: none;
`;

const Text: FunctionComponent<TextProps> = ({
  dataTestId,
  children,
  size,
  color,
}) => {
  return (
    <StyledText
      size={size}
      data-testid={dataTestId || defaultTestId}
      color={color}
    >
      {children}
    </StyledText>
  );
};

export default Text;
