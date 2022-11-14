import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { StepStates } from "../../components/stepper/step";
import { store } from "../../store";
import renderWithProviders from "../../utils/test-utils/storeProvider";
import CompanyForm, {
  companyFormTestId,
  CompanyFormValues,
  contactPersonFormTestId,
  Step,
  stepperTestId,
} from "./CompanyForm";
import companyFormReducer, {
  CompanyFormState,
  setStepStateActive,
} from "./companyFormSlice";

const COMPANY_STEPS: Step[] = [
  {
    title: "Product And Amount",
    id: "step1",
    stepState: StepStates.active,
    completedCount: 0,
  },
  {
    title: "Company",
    id: "step2",
    stepState: StepStates.inactive,
    completedCount: 0,
  },
];

const COMPANY_DATA: CompanyFormValues = {
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

describe("companyForm reducer", () => {
  const initialState: CompanyFormState = {
    companySteps: COMPANY_STEPS,
    companyStepsCounter: 0,
    companyData: COMPANY_DATA,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(companyFormReducer(initialState, { type: "unknown" })).toEqual({
      companySteps: COMPANY_STEPS,
      companyStepsCounter: 0,
      companyData: COMPANY_DATA,
      status: "idle",
    });
  });
  it("should handle stepper or button click", () => {
    const actual = companyFormReducer(
      initialState,
      setStepStateActive("step2")
    );

    expect(actual.companySteps).toEqual([
      {
        id: "step1",
        stepState: StepStates.inactive,
        title: "Product And Amount",
        completedCount: 0,
      },
      {
        id: "step2",
        stepState: StepStates.active,
        title: "Company",
        completedCount: 0,
      },
    ]);
  });
});

describe("CompanyForm", () => {
  const user = userEvent.setup();
  it("should render company form", () => {
    renderWithProviders(<CompanyForm />);
    const companyForm = screen.getByTestId(companyFormTestId);
    expect(companyForm).toBeInTheDocument();
  });

  it("should render contact person form", async () => {
    renderWithProviders(<CompanyForm />);

    const companyForm = screen.getByTestId(companyFormTestId);
    expect(companyForm).toBeInTheDocument();

    const nextButton = screen.getByText("Next");
    await user.click(nextButton);

    const contactPersonForm = screen.getByTestId(contactPersonFormTestId);
    expect(contactPersonForm).toBeInTheDocument();
  });

  it("should render stepper", () => {
    renderWithProviders(<CompanyForm />);
    const stepper = screen.getByTestId(stepperTestId);
    expect(stepper).toBeInTheDocument();
  });

  it("should fill out form and submit with correct values", async () => {
    renderWithProviders(<CompanyForm />);
    const companyForm = screen.getByTestId(companyFormTestId);
    expect(companyForm).toBeInTheDocument();

    const companyCodeInput = screen.getByLabelText("Company code");

    await user.type(companyCodeInput, "12345");

    const nextButton = screen.getByText("Next");
    await user.click(nextButton);

    const contactPersonForm = screen.getByTestId(contactPersonFormTestId);
    expect(contactPersonForm).toBeInTheDocument();

    const submitButton = screen.getByText("Next");
    userEvent.click(submitButton);

    //TODO check storage
  });
});

describe("CompanyForm validation", () => {
  it("should validate company code", () => {});
  it("should validate email", () => {});
  it("should validate phone number", () => {});
});
