import { useField } from "formik";
import { FunctionComponent } from "react";
import Dropdown from "../dropdown";
import { InputStatus } from "../input";

interface DropdownFieldProps {
  dataTestId?: string;
  label: string;
  options: { country: string; id: string }[];
  name: string;
}

const DropdownField: FunctionComponent<DropdownFieldProps> = ({
  options,
  label,
  name,
}) => {
  const [field, meta, { setValue }] = useField(name);

  const handleOnSelect = (id: string, country: string) => {
    console.log(country);
    setValue(country);
  };
  return (
    <>
      <Dropdown
        name={name}
        label={label}
        options={options}
        status={meta.touched && meta.error ? InputStatus.error : undefined}
        statusMessage={meta.touched && meta.error ? meta.error : undefined}
        customValue={field.value}
        onSelectCallback={handleOnSelect}
      />
    </>
  );
};

export default DropdownField;
