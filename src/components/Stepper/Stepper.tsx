import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import Text from "../text";
import Step, { StepStates } from "./step";

interface StepperProps {
  dataTestId?: string;
  steps: { title: string; id: string; stepState: StepStates }[];
  handleStepClick: (e: any) => void;
  stepCounter: string;
}

const defaultTestId = "stepper-container";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Stepper: FunctionComponent<StepperProps> = ({
  dataTestId,
  steps,
  handleStepClick,
  stepCounter,
}) => {
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <Text>{stepCounter}</Text>
      {steps.map((step) => (
        <Step
          title={step.title}
          key={step.id}
          id={step.id}
          stepState={step.stepState}
          disabled={step.stepState === StepStates.disabled}
          handleStepClick={handleStepClick}
        />
      ))}
    </Container>
  );
};

export default Stepper;
