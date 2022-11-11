import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StepStates } from "../../components/stepper/step";
import { RootState } from "../../store/store";
import { companySteps, Step } from "./CompanyForm";
import { fetchCompany } from "./companyFormAPI";

export interface CompanyFormState {
  value: number;
  status: "idle" | "loading" | "failed";
  companySteps: Step[];
  companyStepsCounter: number;
}

const initialState: CompanyFormState = {
  value: 0,
  companySteps: companySteps,
  companyStepsCounter: 0,
  status: "idle",
};

export const companyAsync = createAsyncThunk(
  "company/fetchCompany",
  async (amount: number) => {
    const response = await fetchCompany(amount);
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
        const setActiveStepIndex = state.companySteps.findIndex(
          (step) => step.id === action.payload
        );
        const inactiveStep = {
          ...setInactiveStep,
          stepState: StepStates.inactive,
        };
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
        state.value += action.payload;
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

export const selectCompanyStepsCounter = (state: RootState) =>
  state.companyForm.companyStepsCounter;

export default companyFormSlice.reducer;
