import React from "react";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { companyAsync, selectCount, clickNext } from "./companyFormSlice";
import Button from "../../components/button";
import Card from "../../components/card/Card";
import Input from "../../components/input";
import Stepper from "../../components/Stepper";

export function CompanyForm() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (count === 3) {
      dispatch(companyAsync(count));
    }
    dispatch(clickNext(1));
  };

  return (
    <div>
      <Button aria-label="Submit Form" onClick={handleClick} title="Back" />
      <Button
        aria-label="Submit Form"
        onClick={handleClick}
        primary
        title="Next"
      />
      <span>{count}</span>
      <Input label="label" type="text" />
      <Card title="Company" />
      <Stepper steps={[{ title: "step" }, { title: "step1" }]} />
    </div>
  );
}

export default CompanyForm;
