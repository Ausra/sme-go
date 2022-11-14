import { FunctionComponent, ReactElement } from "react";
import styled from "styled-components/macro";
import { defaultTheme, typeScale } from "../../utils/global-styles";

export type TextSize = "small" | "medium" | "large";

interface TextProps {
  dataTestId?: string;
  children?: string | number | ReactElement[];
  size?: TextSize;
  color?: string;
  marginBottom?: string;
}

const defaultTestId = "styled-text";

const StyledText = styled.p<{
  size?: TextSize;
  color?: string;
  marginBottom?: string;
}>`
  font-size: ${(props) =>
    props.size ? typeScale[props.size] : typeScale.medium};
  color: ${(props) => (props.color ? props.color : defaultTheme.textColor)};
  pointer-events: none;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "8px"};
`;

const Text: FunctionComponent<TextProps> = ({
  dataTestId,
  children,
  size,
  color,
  marginBottom,
}) => {
  return (
    <StyledText
      size={size}
      data-testid={dataTestId || defaultTestId}
      color={color}
      marginBottom={marginBottom}
    >
      {children}
    </StyledText>
  );
};

export default Text;
