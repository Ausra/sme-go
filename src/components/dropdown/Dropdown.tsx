import { FunctionComponent, useState } from "react";
import Input, { InputProps } from "../input";
import styled from "styled-components/macro";

interface DropdownProps extends InputProps {
  dataTestId?: string;
  options: { country: string; id: string }[];
  label: string;
  onSelectCallback?: (id: string, country: string) => void;
}

const Container = styled.div``;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;

export const defaultTestId = "styled-dropdown";

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
  const [selected, setSelected] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (id: any, country: any) => {
    console.log(id, country);
    setSelected(country);
    onSelectCallback && onSelectCallback(id, country);
    setOpen(false);
  };

  const handleOnChange = (e: any) => {
    console.log(e);
    setSelected(e.target.value);
  };

  return (
    <Container data-testid={dataTestId || defaultTestId}>
      <Input
        name={name}
        label={label}
        onClick={handleOpen}
        customValue={customValue || selected}
        onChange={handleOnChange}
        status={status}
        statusMessage={statusMessage}
      />
      {open ? (
        <DropDownList>
          {options.map((option, index) => (
            <ListItem key={index}>
              <button onClick={() => handleSelect(option.id, option.country)}>
                {option.country}
              </button>
            </ListItem>
          ))}
        </DropDownList>
      ) : null}
    </Container>
  );
};

export default Dropdown;
