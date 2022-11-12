import { Field, useField } from "formik";
import { FunctionComponent } from "react";
import Input, { InputProps } from "../input";

interface InputFieldProps extends InputProps {
  dataTestId?: string;
  name: string;
}

const InputField: FunctionComponent<InputFieldProps> = ({ name, label }) => {
  const [field, meta] = useField(name);
  console.log(name);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
  };
  return (
    <>
      <Input
        name={name}
        status={meta.touched && meta.error ? "error" : undefined}
        statusMessage={meta.touched && meta.error ? meta.error : undefined}
        value={field.value}
        label={label}
        onChange={handleOnChange}
      />
    </>
  );
};

export default InputField;
