import styled from "styled-components/macro";
import { defaultTheme, typeScale } from "../../utils/global-styles";

export const DropDownListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: relative;
  top: -66px;
  min-height: 120px;
  padding-left: 16px;
  background: ${defaultTheme.dropdown.backgroundColor};
  border: 1px solid ${defaultTheme.dropdown.borderColor};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${defaultTheme.dropdown.textColor};
  font-size: ${typeScale.medium};
  &:first-child {
    padding-top: 8px;
  }
`;

export const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 8px;
`;

export const StyledListButton = styled.button`
  background: none;
  border: none;
`;
