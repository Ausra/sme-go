import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import { defaultTheme } from "../../../utils/global-styles";
import Text from "../../text";

export enum StepStates {
  active = "active",
  inactive = "inactive",
  disabled = "disabled",
}

export interface StepProps extends React.HTMLAttributes<HTMLElement> {
  dataTestId?: string;
  title?: string;
  primary?: boolean;
  key?: string;
  stepState: StepStates;
  id: string;
  disabled?: boolean;
  handleStepClick: (e: any) => void;
}

const stepColor = {
  active: defaultTheme.step.activeColor,
  inactive: defaultTheme.step.inactiveColor,
  disabled: defaultTheme.step.disabledColor,
};

const VerticalDash = styled.div<{ state: StepStates }>`
  width: 2px;
  height: 50px;
  background-color: ${(props) => stepColor[props.state]};
  margin-right: 16px;
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

const Step: FunctionComponent<StepProps> = ({
  dataTestId,
  title,
  stepState,
  disabled,
  id,
  handleStepClick,
}) => {
  return (
    <>
      <StyledStepButton
        data-testid={dataTestId}
        onClick={handleStepClick}
        id={id}
        disabled={disabled}
      >
        <VerticalDash state={stepState} />
        <Text color={stepColor[stepState]}>{title}</Text>
      </StyledStepButton>
    </>
  );
};

export default Step;
