import { FunctionComponent, useState } from "react";
import Card from "../../../components/card";

import Input from "../../../components/input";
import InputField from "../../../components/inputField";
import Text from "../../../components/text";
import TextButton from "../../../components/textButton";
import CheckboxField from "../../../components/checkboxField/CheckboxField";
import { CONTACT_PERSON } from "./contactPerson.validation";

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

  const handleOnChange = (e: any) => {
    console.log(e.target.checked);
  };
  return (
    <>
      <Card
        title="Contact Person"
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
        primaryButtonType="submit"
      >
        <InputField name={CONTACT_PERSON.FIRST_NAME} label="Name" />
        <InputField name={CONTACT_PERSON.LAST_NAME} label="Surname" />
        <InputField name={CONTACT_PERSON.JOB_TITLE} label="Job Title" />
        <InputField name={CONTACT_PERSON.EMAIL} label="E-mail address" />
        <div>
          <InputField name={CONTACT_PERSON.COUNTRY_CODE} label="Country code" />
          <Input name={CONTACT_PERSON.PHONE} label="Phone number" />
        </div>
        <CheckboxField
          name={CONTACT_PERSON.AGREEMENT_1}
          id="checkbox1"
          checked={false}
          onChange={handleOnChange}
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
        </CheckboxField>
        <CheckboxField
          name={CONTACT_PERSON.AGREEMENT_2}
          id="checkbox1"
          checked={false}
          onChange={handleOnChange}
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
        </CheckboxField>
      </Card>
    </>
  );
};

export default ContactPerson;
