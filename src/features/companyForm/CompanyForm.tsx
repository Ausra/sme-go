import React from "react";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { companyAsync, selectCount, clickNext } from "./companyFormSlice";
import Card from "../../components/card/Card";
import Input from "../../components/input";
import Stepper from "../../components/stepper";
import Text from "../../components/text";
import style from "./companyForm.module.scss";
import Button from "../../components/button";

export function CompanyForm() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.asideLeft}>
          <Text>Logo</Text>
          <Stepper steps={[{ title: "step" }, { title: "step1" }]} />
        </div>
        <div className={style.content}>
          <div className={style.header}>
            <Text>Application</Text>
            <Button title="Fill in later" margin="0 0" />
          </div>
          <Card title="Company">
            <Input label="Company code" />
            <Input label="Company name" />
            <Input label="Country of registration" />
          </Card>
        </div>
        <div className={style.asideRight}></div>
      </div>
    </div>
  );
}

export default CompanyForm;
