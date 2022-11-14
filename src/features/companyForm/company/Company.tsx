import { FunctionComponent } from "react";
import Card from "../../../components/card";
import DropdownField from "../../../components/fields/dropdownField";
import InputField from "../../../components/fields/inputField";
import { COMPANY } from "./company.validation";

interface CompanyProps {
  dataTestId?: string;
  primaryButtonDisabled?: boolean;
  handleNextClick: () => void;
  handleBackClick: () => void;
  handleBlur: (e: any) => void;
}

const Company: FunctionComponent<CompanyProps> = ({
  dataTestId,
  handleNextClick,
  handleBackClick,
  primaryButtonDisabled,
  handleBlur,
}) => {
  return (
    <>
      <Card
        title="Company"
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
        primaryButtonType="button"
        primaryButtonDisabled={primaryButtonDisabled}
      >
        <InputField
          name={COMPANY.CODE}
          label="Company code"
          handleBlur={handleBlur}
        />
        <InputField name={COMPANY.NAME} label="Company name" />
        <DropdownField
          name={COMPANY.COUNTRY}
          label="Country of Registration"
          options={[
            { value: "lithuania", id: "lithuania1" },
            { value: "USA", id: "usa1" },
          ]}
        />
      </Card>
    </>
  );
};

export default Company;
