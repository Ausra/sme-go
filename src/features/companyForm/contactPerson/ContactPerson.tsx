import { FocusEvent, FunctionComponent, useState } from "react";
import Card from "../../../components/card";
import InputField from "../../../components/fields/inputField";
import Text from "../../../components/text";
import TextButton from "../../../components/textButton";
import CheckboxField from "../../../components/fields/checkboxField/CheckboxField";
import { CONTACT_PERSON } from "./contactPerson.validation";
import { defaultTheme } from "../../../utils/global-styles";
import { TEXT } from "../companyForm.mocks";
import style from "./contactPerson.module.scss";
import DropdownField from "../../../components/fields/dropdownField";

interface ContactPersonProps {
  dataTestId?: string;
  dataTestIdNextButton?: string;
  handlePrimaryButtonClick: () => void;
  handleSecondaryButtonClick: () => void;
  primaryButtonDisabled?: boolean;
  handleBlur: (e: FocusEvent<Element>) => void;
}

const ContactPerson: FunctionComponent<ContactPersonProps> = ({
  dataTestId,
  handlePrimaryButtonClick,
  handleSecondaryButtonClick,
  primaryButtonDisabled,
  handleBlur,
}) => {
  const [showSmallText, setShowSmallText] = useState(false);

  return (
    <>
      {showSmallText ? (
        <Card
          handleSecondaryButtonClick={() => setShowSmallText(false)}
          hidePrimaryButton={true}
        >
          <Text size="small">{TEXT}</Text>
        </Card>
      ) : (
        <Card
          dataTestId={dataTestId}
          title="Contact Person"
          handlePrimaryButtonClick={handlePrimaryButtonClick}
          primaryButtonDisabled={primaryButtonDisabled}
          handleSecondaryButtonClick={handleSecondaryButtonClick}
          primaryButtonType="submit"
        >
          <InputField
            name={CONTACT_PERSON.FIRST_NAME}
            label="Name"
            handleBlur={handleBlur}
          />
          <InputField
            name={CONTACT_PERSON.LAST_NAME}
            label="Surname"
            handleBlur={handleBlur}
          />
          <InputField
            name={CONTACT_PERSON.JOB_TITLE}
            label="Job Title"
            handleBlur={handleBlur}
          />
          <InputField
            name={CONTACT_PERSON.EMAIL}
            label="E-mail address"
            handleBlur={handleBlur}
          />
          <div className={style.phoneInputContainer}>
            <div className={style.countryCodeContainer}>
              <DropdownField
                name={CONTACT_PERSON.COUNTRY_CODE}
                label="Country code"
                options={[
                  {
                    id: "lithuania1",
                    value: "+370",
                  },
                  {
                    id: "usa1",
                    value: "+1",
                  },
                  {
                    id: "germany1",
                    value: "+49",
                  },
                ]}
              />
            </div>
            <div className={style.phoneNumberContainer}>
              <InputField
                name={CONTACT_PERSON.PHONE}
                label="Phone number"
                handleBlur={handleBlur}
              />
            </div>
          </div>
          <CheckboxField name={CONTACT_PERSON.AGREEMENT_1} id="checkbox1">
            <Text size="small" color={defaultTheme.smallTextColor}>
              {TEXT}
            </Text>
            <TextButton
              title="Click to read more"
              margin="0 0"
              size="small"
              height="0px"
              onClick={() => setShowSmallText(true)}
            />
          </CheckboxField>
          <CheckboxField name={CONTACT_PERSON.AGREEMENT_2} id="checkbox1">
            <Text
              size="small"
              color={defaultTheme.smallTextColor}
              marginBottom="0"
            >
              {TEXT}
            </Text>
            <TextButton
              title="Click to read more"
              margin="0 0"
              size="small"
              height="0px"
              onClick={() => setShowSmallText(true)}
            />
          </CheckboxField>
        </Card>
      )}
    </>
  );
};

export default ContactPerson;
