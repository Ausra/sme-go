import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme } from "../../../utils/global-styles";
import Text from "../../text";

export interface StepProps {
  dataTestId?: string;
  title?: string;
  primary?: boolean;
  key?: string;
}

const VerticalDash = styled.div`
  width: 2px;
  height: 50px;
  background-color: ${defaultTheme.primaryColor};
`;

const StyledStepButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 192px;
  height: 50px;
`;

const Step: FunctionComponent<StepProps> = ({ dataTestId, title }) => {
  return (
    <StyledStepButton data-testid={dataTestId}>
      <VerticalDash />
      <Text color={defaultTheme.primaryColor}>{title}</Text>
    </StyledStepButton>
  );
};

export default Step;
