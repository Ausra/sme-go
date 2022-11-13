import { FunctionComponent } from "react";
import Card from "../../../components/card";
import DropdownField from "../../../components/dropdownField";
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
        primaryButtonType="button"
      >
        <InputField name={COMPANY.CODE} label="Company code" />
        <InputField name={COMPANY.NAME} label="Company name" />
        <DropdownField
          name={COMPANY.COUNTRY}
          label="country"
          options={[
            { country: "lithuania", id: "lithuania1" },
            { country: "USA", id: "usa1" },
          ]}
        />
      </Card>
    </>
  );
};

export default Company;
