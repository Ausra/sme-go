import { FunctionComponent, useState } from "react";
import Input, { InputProps } from "../input";
import {
  DropDownListContainer,
  StyledListButton,
  StyledListItem,
} from "./styles";

interface DropdownOption {
  value: string;
  id: string;
}

interface DropdownProps extends InputProps {
  dataTestId?: string;
  options: DropdownOption[];
  label: string;
  onSelectCallback?: (id: string, country: string) => void;
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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].value);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (id: any, country: any) => {
    setSelected(country);
    onSelectCallback && onSelectCallback(id, country);
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
                data-testId={listItemButtonId}
                onClick={() => handleSelect(option.id, option.value)}
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
