import React, { useState } from "react";
import Stepper from "../../components/stepper";
import Text from "../../components/text";
import style from "./companyForm.module.scss";
import Button from "../../components/button";
import { StepStates } from "../../components/stepper/step/Step";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  companyAsync,
  selectActiveStep,
  selectCompanySteps,
  selectCompanyStepsCounter,
  setStepStateActive,
} from "./companyFormSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Company from "./company/Company";
import ContactPerson from "./contactPerson";
import { Form, Formik, FormikErrors } from "formik";
import { companyValidationSchema } from "./company/company.validation";
import { contactPersonValidationSchema } from "./contactPerson/contactPerson.validation";

export interface Step {
  id: string;
  title: string;
  stepState: StepStates;
}

export interface CompanyFormValues {
  companyName: string;
  companyCode: string;
  country: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  countryCode: string;
  phone: string;
  agreement1: boolean;
  agreement2: boolean;
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

const initialValues = {
  companyName: "",
  companyCode: "",
  country: "",
  firstName: "",
  lastName: "",
  jobTitle: "",
  email: "",
  countryCode: "",
  phone: "",
  agreement1: false,
  agreement2: false,
};

export function CompanyForm() {
  const companySteps = useAppSelector(selectCompanySteps);
  const activeStepId = useAppSelector(selectActiveStep);
  const companyStepCounter = useAppSelector(selectCompanyStepsCounter);
  const dispatch = useAppDispatch();

  const [validationSchema, setValidationSchema] = useState(
    companyValidationSchema
  );

  const handleStepClick = (e: any) => {
    dispatch(setStepStateActive(e.target.id));
  };

  const gotToNextStep = () => {
    const currentStepIndex = companySteps.findIndex(
      (step) => step.stepState === StepStates.active
    );

    if (companySteps[currentStepIndex + 1].stepState === StepStates.disabled) {
      return;
    }
    dispatch(setStepStateActive(companySteps[currentStepIndex + 1].id));
  };

  const getForm = ({
    validateForm,
    submitForm,
    isValid,
    handleBlur,
  }: {
    validateForm: () => Promise<FormikErrors<CompanyFormValues>>;
    submitForm: () => void;
    isValid: boolean;
    handleBlur: (e: any) => void;
  }) => {
    switch (activeStepId) {
      case "step1": {
        setValidationSchema(companyValidationSchema);
        return (
          <Company
            primaryButtonDisabled={!isValid}
            handleBlur={handleBlur}
            handleBackClick={handleBackClick}
            handleNextClick={() => handleNextClick(validateForm)}
          />
        );
      }
      case "step2": {
        setValidationSchema(contactPersonValidationSchema);
        return (
          <ContactPerson
            handleBackClick={handleBackClick}
            handleNextClick={() => handleNextClick(validateForm, submitForm)}
          />
        );
      }

      default:
        return null;
    }
  };

  const handleNextClick = (
    validateForm: () => Promise<FormikErrors<CompanyFormValues>>,
    submitForm?: () => void
  ) => {
    validateForm();
    if (submitForm) {
      submitForm();
      return;
    }
    gotToNextStep();
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

  const onSubmit = (values: any) => {
    console.log(values);
    dispatch(companyAsync(2));
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
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({
              handleSubmit,
              isValid,
              submitForm,
              validateForm,
              handleBlur,
            }) => (
              <Form onSubmit={handleSubmit}>
                {getForm({ validateForm, submitForm, isValid, handleBlur })}
              </Form>
            )}
          </Formik>
        </div>
        <div className={style.asideRight}></div>
      </div>
    </div>
  );
}

export default CompanyForm;
