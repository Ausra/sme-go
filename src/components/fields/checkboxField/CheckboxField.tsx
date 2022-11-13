import { useField } from "formik";
import { FunctionComponent } from "react";
import Checkbox, { CheckboxProps } from "../../checkbox";

interface CheckboxFieldProps extends CheckboxProps {
  name: string;
}

const CheckboxField: FunctionComponent<CheckboxFieldProps> = ({
  name,
  onChange,
  children,
  checked,
  ...restProps
}) => {
  const [field, _, helpers] = useField({ name, type: "checkbox" });
  return (
    <>
      <Checkbox
        checked={field.checked}
        onChange={(event) => {
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
