import { FunctionComponent, useState } from "react";
import Input, { InputProps } from "../input";
import {
  DropDownListContainer,
  StyledListButton,
  StyledListItem,
} from "./styles";

export interface DropdownOption {
  value: string;
  id: string;
}

interface DropdownProps extends InputProps {
  dataTestId?: string;
  options: DropdownOption[];
  label: string;
  onSelectCallback?: (value: string) => void;
}

export const defaultTestId = "styled-dropdown";
export const dropdownListTestId = "styled-dropdown-list";
export const listItemTestId = "styled-dropdown-list-item";
export const listItemButtonId = "styled-dropdown-list-item-button";

const Dropdown: FunctionComponent<DropdownProps> = ({
  label,
  options,
  dataTestId,
  name,
  status,
  statusMessage,
  customValue,
  onSelectCallback,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelectCallback && onSelectCallback(value);
    setOpen(false);
  };

  const handleOnChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Input
        dataTestId={dataTestId || defaultTestId}
        name={name}
        label={label}
        onClickCallback={handleOpen}
        customValue={customValue || selected}
        onChangeCallback={handleOnChange}
        status={status}
        statusMessage={statusMessage}
      />
      {open ? (
        <DropDownListContainer data-testid={dropdownListTestId}>
          {options.map((option, index) => (
            <StyledListItem key={index} data-testid={listItemTestId}>
              <StyledListButton
                data-testid={listItemButtonId}
                onClick={() => handleSelect(option.value)}
              >
                {option.value}
              </StyledListButton>
            </StyledListItem>
          ))}
        </DropDownListContainer>
      ) : null}
    </>
  );
};

export default Dropdown;
