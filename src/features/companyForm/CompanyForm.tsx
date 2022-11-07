import React from "react";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { companyAsync, selectCount, clickNext } from "./companyFormSlice";

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
      <button aria-label="Submit Form" onClick={handleClick}>
        Submit Form
      </button>
      <span>{count}</span>
    </div>
  );
}

export default CompanyForm;
