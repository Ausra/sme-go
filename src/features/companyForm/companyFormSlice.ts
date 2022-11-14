import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StepStates } from "../../components/stepper/step";
import { RootState } from "../../store/store";
import { companySteps } from "./companyForm.mocks";
import { CompanyFormValues, Step } from "./CompanyForm";
import { fetchCompany } from "./companyFormAPI";

export interface CompanyFormState {
  status: "idle" | "loading" | "failed";
  companySteps: Step[];
  companyData: CompanyFormValues;
  companyStepsCounter: number;
}

const companyValues: CompanyFormValues = {
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

export const initialState: CompanyFormState = {
  companySteps: companySteps,
  companyStepsCounter: 0,
  status: "idle",
  companyData: companyValues,
};

export const companyAsync = createAsyncThunk(
  "company/fetchCompany",
  async (values: CompanyFormValues) => {
    const response = await fetchCompany(values);
    return response.data;
  }
);

export const companyFormSlice = createSlice({
  name: "companyForm",
  initialState,
  reducers: {
    setCompanyStepsCounterValue: (state, action: PayloadAction<number>) => {
      state.companyStepsCounter += action.payload;
    },
    setStepStateActive: (state, action: PayloadAction<string>) => {
      const setActiveStep: Step | null =
        state.companySteps.find((step) => step.id === action.payload) || null;

      const setInactiveStep: Step | null =
        state.companySteps.find(
          (step) => step.stepState === StepStates.active
        ) || null;

      if (setActiveStep && setInactiveStep) {
        if (setActiveStep.stepState === StepStates.active) {
          return;
        }
        const activeStep = { ...setActiveStep, stepState: StepStates.active };
        const inactiveStep = {
          ...setInactiveStep,
          stepState: StepStates.inactive,
        };

        const setActiveStepIndex = state.companySteps.findIndex(
          (step) => step.id === action.payload
        );
        const setInactiveStepIndex = state.companySteps.findIndex(
          (step) => step.stepState === StepStates.active
        );

        state.companySteps[setActiveStepIndex] = activeStep;
        state.companySteps[setInactiveStepIndex] = inactiveStep;
      } else {
        throw new Error("No step found");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(companyAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(companyAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.companyData = action.payload;
      })
      .addCase(companyAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setCompanyStepsCounterValue, setStepStateActive } =
  companyFormSlice.actions;

export const selectCompanySteps = (state: RootState) =>
  state.companyForm.companySteps;

export const selectActiveStep = (state: RootState) => {
  const activeStep = state.companyForm.companySteps.find(
    (step) => step.stepState === StepStates.active
  )?.id;
  return activeStep;
};

export const selectCompanyData = (state: RootState) =>
  state.companyForm.companyData;

export const selectCompanyStepsCounter = (state: RootState) =>
  state.companyForm.companyStepsCounter;

export default companyFormSlice.reducer;
