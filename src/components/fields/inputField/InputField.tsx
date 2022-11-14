import { useField } from "formik";
import { ChangeEvent, FocusEvent, FunctionComponent } from "react";
import Input, { InputProps, InputStatus } from "../../input";

interface InputFieldProps extends InputProps {
  dataTestId?: string;
  name: string;
  handleBlur?: (e: FocusEvent<Element>) => void;
}

const InputField: FunctionComponent<InputFieldProps> = ({
  name,
  label,
  handleBlur,
}) => {
  const [field, meta] = useField(name);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        onChangeCallback={handleOnChange}
        onBlurCallback={handleBlur}
      />
    </>
  );
};

export default InputField;
