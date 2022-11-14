import React, {
  FocusEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import Stepper from "../../components/stepper";
import Text from "../../components/text";
import style from "./companyForm.module.scss";
import { StepStates } from "../../components/stepper/step/Step";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  companyAsync,
  selectActiveStep,
  selectCompanyData,
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
import TextButton from "../../components/textButton";

export interface Step {
  id: string;
  title: string;
  stepState: StepStates;
  completedCount: number;
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

export interface CompanyFormProps {}

export const defaultTestId = "company-form-container";
export const companyFormTestId = "company-form";
export const contactPersonFormTestId = "contact-person-form";
export const stepperTestId = "stepper";

const CompanyForm: FunctionComponent<CompanyFormProps> = () => {
  const companySteps = useAppSelector(selectCompanySteps);
  const activeStepId = useAppSelector(selectActiveStep);
  const companyStepCounter = useAppSelector(selectCompanyStepsCounter);
  const companyData = useAppSelector(selectCompanyData);
  const dispatch = useAppDispatch();

  const [validationSchema, setValidationSchema] = useState(
    companyValidationSchema
  );

  useEffect(() => {
    if (activeStepId === companySteps[0].id) {
      setValidationSchema(companyValidationSchema);
    } else {
      setValidationSchema(contactPersonValidationSchema);
    }
  }, [activeStepId, companySteps]);

  const handleStepClick = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    dispatch(setStepStateActive(event.target.id));
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

  const handleNextButtonClick = (
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

  const handleBackButtonClick = () => {
    const currentStepIndex = companySteps.findIndex(
      (step) => step.stepState === StepStates.active
    );
    if (currentStepIndex === 0) {
      return;
    }
    dispatch(setStepStateActive(companySteps[currentStepIndex - 1].id));
  };

  const onSubmit = (values: CompanyFormValues) => {
    dispatch(companyAsync(values));
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
    handleBlur: (event: FocusEvent<Element>) => void;
  }) => {
    switch (activeStepId) {
      case companySteps[0].id: {
        return (
          <Company
            dataTestId={companyFormTestId}
            primaryButtonDisabled={!isValid}
            handleBlur={handleBlur}
            handleSecondaryButtonClick={handleBackButtonClick}
            handlePrimaryButtonClick={() => handleNextButtonClick(validateForm)}
          />
        );
      }
      case companySteps[1].id: {
        return (
          <ContactPerson
            dataTestId={contactPersonFormTestId}
            primaryButtonDisabled={!isValid}
            handleSecondaryButtonClick={handleBackButtonClick}
            handleBlur={handleBlur}
            handlePrimaryButtonClick={() =>
              handleNextButtonClick(validateForm, submitForm)
            }
          />
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.asideLeft}>
          <Text>Logo</Text>
          <Stepper
            dataTestId={stepperTestId}
            steps={companySteps}
            handleStepClick={handleStepClick}
            stepCounter={`${companyStepCounter}%`}
          />
        </div>
        <div className={style.content}>
          <div className={style.header}>
            <Text>Application</Text>
            <TextButton title="Fill in Later" />
          </div>
          <Formik
            onSubmit={onSubmit}
            initialValues={companyData}
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
};

export default CompanyForm;
