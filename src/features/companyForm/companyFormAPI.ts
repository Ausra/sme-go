import { CompanyFormValues } from "./CompanyForm";

export function fetchCompany(values: CompanyFormValues) {
  return new Promise<{ data: CompanyFormValues }>((resolve) =>
    setTimeout(() => resolve({ data: values }), 500)
  );
}
