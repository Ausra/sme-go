import { FunctionComponent, useState } from "react";
import Card from "../../../components/card";
import Checkbox from "../../../components/checkbox";
import Input from "../../../components/input";
import Text from "../../../components/text";
import TextButton from "../../../components/textButton";

interface ContactPersonProps {
  dataTestId?: string;
  handleNextClick: () => void;
  handleBackClick: () => void;
}

const ContactPerson: FunctionComponent<ContactPersonProps> = ({
  dataTestId,
  handleNextClick,
  handleBackClick,
}) => {
  const [showSmallText, setShowSmallText] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleOnChange = (e: any) => {
    console.log(e.target.checked);
  };
  return (
    <>
      <Card
        title="Contact Person"
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
      >
        <Input label="Name" />
        <Input label="Surname" />
        <Input label="Job Title" />
        <Input label="E-mail address" />
        <div>
          <Input label="Country code" />
          <Input label="Phone number" />
        </div>
        <Checkbox
          id="checkbox1"
          checked={false}
          handleOnChange={handleOnChange}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            gravida ante nec metus feugiat pellentesque. Vivamus elementum purus
            sapien, id gravida nisl suscipit sit amet. Pellentesque a tellus
            odio. Sed pretium porttitor efficitur. Morbi auctor non dolor in
            convallis. Quisque aliquam a risus ac dictum. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Pellentesque viverra tellus sit amet leo efficitur
            condimentum. Mauris vel molestie ex. Phasellus mollis quis dolor ut
            dapibus. Sed eget dolor nec diam facilisis interdum et in purus.
          </Text>
          <TextButton
            title="Click to read more"
            margin="0 0"
            onClick={() => setShowSmallText(true)}
          />
        </Checkbox>
      </Card>
    </>
  );
};

export default ContactPerson;
