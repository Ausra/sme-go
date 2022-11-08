import { FunctionComponent } from "react";
import styled from "styled-components/macro";
import Text from "../text";
import Step from "./step/Step";

interface StepperProps {
  dataTestId?: string;
  steps: { title: string }[];
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

const Stepper: FunctionComponent<StepperProps> = ({ dataTestId, steps }) => {
  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <Text>25%</Text>
      {steps.map((step) => (
        <Step title={step.title} key={step.title} />
      ))}
    </Container>
  );
};

export default Stepper;
