import { useField } from "formik";
import { FunctionComponent } from "react";
import Input, { InputProps, InputStatus } from "../input";

interface InputFieldProps extends InputProps {
  dataTestId?: string;
  name: string;
  handleBlur?: (e: any) => void;
}

const InputField: FunctionComponent<InputFieldProps> = ({
  name,
  label,
  handleBlur,
}) => {
  const [field, meta] = useField(name);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
  };

  return (
    <>
      <Input
        name={name}
        status={meta.touched && meta.error ? InputStatus.error : undefined}
        statusMessage={meta.touched && meta.error ? meta.error : undefined}
        customValue={field.value}
        label={label}
        onChange={handleOnChange}
        onBlur={handleBlur}
      />
    </>
  );
};

export default InputField;
