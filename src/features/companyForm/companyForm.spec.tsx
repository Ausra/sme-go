import { StepStates } from "../../components/stepper/step";
import { companySteps } from "./CompanyForm";
import companyFormReducer, {
  CompanyFormState,
  setStepStateActive,
} from "./companyFormSlice";

const COMPANY_STEPS = [
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
];

describe("companyForm reducer", () => {
  const initialState: CompanyFormState = {
    value: 0,
    companySteps: COMPANY_STEPS,
    companyStepsCounter: 0,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(companyFormReducer(initialState, { type: "unknown" })).toEqual({
      value: 0,
      companySteps: COMPANY_STEPS,
      companyStepsCounter: 0,
      status: "idle",
    });
  });
  it("should handle stepper or button click", () => {
    const actual = companyFormReducer(
      initialState,
      setStepStateActive("step2")
    );

    expect(actual.companySteps).toEqual([
      { id: "step1", stepState: "inactive", title: "Product And Amount" },
      { id: "step2", stepState: "active", title: "Company" },
    ]);
  });
});
