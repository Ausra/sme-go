import { FunctionComponent } from "react";
import Card from "../../../components/card";
import DropdownField from "../../../components/fields/dropdownField";
import InputField from "../../../components/fields/inputField";
import { COMPANY } from "./company.validation";

interface CompanyProps {
  dataTestId?: string;
  primaryButtonDisabled?: boolean;
  handlePrimaryButtonClick: () => void;
  handleSecondaryButtonClick: () => void;
  handleBlur: (e: any) => void;
}

export const defaultTestId = "company-form";
const Company: FunctionComponent<CompanyProps> = ({
  dataTestId,
  handlePrimaryButtonClick,
  handleSecondaryButtonClick,
  primaryButtonDisabled,
  handleBlur,
}) => {
  return (
    <>
      <Card
        dataTestId={dataTestId || defaultTestId}
        title="Company"
        handlePrimaryButtonClick={handlePrimaryButtonClick}
        handleSecondaryButtonClick={handleSecondaryButtonClick}
        primaryButtonType="button"
        primaryButtonDisabled={primaryButtonDisabled}
      >
        <InputField
          name={COMPANY.CODE}
          label="Company code"
          handleBlur={handleBlur}
        />
        <InputField
          name={COMPANY.NAME}
          label="Company name"
          handleBlur={handleBlur}
        />
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
