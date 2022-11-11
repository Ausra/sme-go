import React from "react";
import Card from "../../components/card/Card";
import Input from "../../components/input";
import Stepper from "../../components/stepper";
import Text from "../../components/text";
import style from "./companyForm.module.scss";
import Button from "../../components/button";
import { StepStates } from "../../components/stepper/step/Step";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  selectCompanySteps,
  selectCompanyStepsCounter,
  setStepStateActive,
} from "./companyFormSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export interface Step {
  id: string;
  title: string;
  stepState: StepStates;
}

export const companySteps = [
  {
    title: "Product And Amount",
    id: "step1",
    stepState: StepStates.active,
  },
  {
    title: "Company",
    id: "step2",
    stepState: StepStates.inactive,
  },
  {
    title: "Contact Person",
    id: "step3",
    stepState: StepStates.disabled,
  },
  {
    title: "Beneficial Owners",
    id: "step4",
    stepState: StepStates.disabled,
  },
  {
    title: "Factoring Type",
    id: "step5",
    stepState: StepStates.disabled,
  },
  { title: "Third Parties", id: "step6", stepState: StepStates.disabled },
];

export function CompanyForm() {
  const companySteps = useAppSelector(selectCompanySteps);
  const companyStepCounter = useAppSelector(selectCompanyStepsCounter);
  const dispatch = useAppDispatch();

  const handleStepClick = (e: any) => {
    dispatch(setStepStateActive(e.target.id));
  };

  const handleNextClick = () => {
    const currentStepIndex = companySteps.findIndex(
      (step) => step.stepState === StepStates.active
    );
    if (companySteps[currentStepIndex + 1].stepState === StepStates.disabled) {
      return;
    }
    dispatch(setStepStateActive(companySteps[currentStepIndex + 1].id));
  };

  const handleBackClick = () => {
    const currentStepIndex = companySteps.findIndex(
      (step) => step.stepState === StepStates.active
    );
    if (currentStepIndex === 0) {
      return;
    }
    dispatch(setStepStateActive(companySteps[currentStepIndex - 1].id));
  };

  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.asideLeft}>
          <Text>Logo</Text>
          <Stepper
            steps={companySteps}
            handleStepClick={handleStepClick}
            stepCounter={`${companyStepCounter}%`}
          />
        </div>
        <div className={style.content}>
          <div className={style.header}>
            <Text>Application</Text>
            <Button title="Fill in later" margin="0 0" />
          </div>
          <Card
            title="Company"
            handleNextClick={handleNextClick}
            handleBackClick={handleBackClick}
          >
            <Input label="Company code" />
            <Input label="Company name" />
            <Input label="Country of registration" />
          </Card>
        </div>
        <div className={style.asideRight}></div>
      </div>
    </div>
  );
}

export default CompanyForm;
