import { object, string } from "yup";

export const COMPANY = {
  CODE: "companyCode",
  NAME: "companyName",
  COUNTRY: "country",
};

const COMPANY_CODE_MAX_LENGTH = 10;

export const companyValidationSchema = object().shape({
  [COMPANY.CODE]: string().max(
    COMPANY_CODE_MAX_LENGTH,
    `Company code must be ${COMPANY_CODE_MAX_LENGTH} characters or less`
  ),
  [COMPANY.NAME]: string(),
  [COMPANY.COUNTRY]: string(),
});
