import { FunctionComponent } from "react";
import Card from "../../../components/card";
import Input from "../../../components/input";

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
        <Input label="Company code" />
        <Input label="Company name" />
        <Input label="Country of registration" />
      </Card>
    </>
  );
};

export default Company;
