import { FunctionComponent } from "react";
import Card from "../../../components/card";
import InputField from "../../../components/inputField";
import { COMPANY } from "./company.validation";

interface CompanyProps {
  dataTestId?: string;
  handleNextClick: () => void;
  handleBackClick: () => void;
}

const Company: FunctionComponent<CompanyProps> = ({
  dataTestId,
  handleNextClick,
  handleBackClick,
}) => {
  return (
    <>
      <Card
        title="Company"
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
      >
        <InputField name={COMPANY.CODE} label="Company code" />
        <InputField name={COMPANY.NAME} label="Company name" />
        <InputField name={COMPANY.COUNTRY} label="Country of registration" />
      </Card>
    </>
  );
};

export default Company;
