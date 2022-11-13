import { number, object, string } from "yup";

export const CONTACT_PERSON = {
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  JOB_TITLE: "jobTitle",
  EMAIL: "email",
  COUNTRY_CODE: "countryCode",
  PHONE: "phone",
  AGREEMENT_1: "agreement1",
  AGREEMENT_2: "agreement2",
};

export const contactPersonValidationSchema = object().shape({
  [CONTACT_PERSON.FIRST_NAME]: string(),
  [CONTACT_PERSON.LAST_NAME]: string(),
  [CONTACT_PERSON.JOB_TITLE]: string(),
  [CONTACT_PERSON.EMAIL]: string().email(),
  [CONTACT_PERSON.COUNTRY_CODE]: number().positive().integer(),
  [CONTACT_PERSON.PHONE]: number().positive().integer(),
});
