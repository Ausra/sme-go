import styled from "styled-components/macro";
import { defaultTheme, typeScale } from "../../utils/global-styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const StyledCheckboxInput = styled.input`
  outline: 1px solid ${defaultTheme.input.borderColor};
  border: transparent;
`;
export const StyledLabel = styled.label`
  font-size: ${typeScale.small};
`;
