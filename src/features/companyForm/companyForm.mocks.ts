import { StepStates } from "../../components/stepper/step";
import { Step } from "./CompanyForm";

export const companySteps: Step[] = [
  {
    title: "Product And Amount",
    id: "step1",
    stepState: StepStates.active,
    completedCount: 16,
  },
  {
    title: "Company",
    id: "step2",
    stepState: StepStates.inactive,
    completedCount: 16,
  },
  {
    title: "Contact Person",
    id: "step3",
    stepState: StepStates.disabled,
    completedCount: 16,
  },
  {
    title: "Beneficial Owners",
    id: "step4",
    stepState: StepStates.disabled,
    completedCount: 16,
  },
  {
    title: "Factoring Type",
    id: "step5",
    stepState: StepStates.disabled,
    completedCount: 16,
  },
  {
    title: "Third Parties",
    id: "step6",
    stepState: StepStates.disabled,
    completedCount: 20,
  },
];

export const TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneaa
gravida ante nec metus feugiat pellentesque. Vivamus elementum purus
sapien, id gravida nisl suscipit sit amet. Pellentesque a tellus
odio. Sed pretium porttitor efficitur. Morbi auctor non dolor in
convallis. Quisque aliquam a risus ac dictum. Class aptent taciti
sociosqu ad litora torquent per conubia nostra, per inceptos
himenaeos. Pellentesque viverra tellus sit amet leo efficitur
condimentum. Mauris vel molestie ex. Phasellus mollis quis dolor ut
dapibus. Sed eget dolor nec diam facilisis interdum et in purus.`;
