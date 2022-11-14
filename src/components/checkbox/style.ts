import styled from "styled-components/macro";
import { typeScale } from "../../utils/global-styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const StyledCheckboxInput = styled.input`
  border: transparent;
  margin-top: 16px;
  margin-right: 16px;
`;
export const StyledLabel = styled.label`
  font-size: ${typeScale.small};
`;
