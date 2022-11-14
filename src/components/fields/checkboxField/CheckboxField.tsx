import { useField } from "formik";
import { FunctionComponent } from "react";
import Checkbox, { CheckboxProps } from "../../checkbox";

interface CheckboxFieldProps extends CheckboxProps {
  name: string;
}

const CheckboxField: FunctionComponent<CheckboxFieldProps> = ({
  name,
  children,
  ...restProps
}) => {
  const [field, _, helpers] = useField({ name, type: "checkbox" });
  return (
    <>
      <Checkbox
        showChecked={field.checked}
        onChangeCallback={(event) => {
          helpers.setValue(event.target.checked);
        }}
        {...restProps}
      >
        {children}
      </Checkbox>
    </>
  );
};

export default CheckboxField;
