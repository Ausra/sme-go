import { FunctionComponent, useState } from "react";
import Input, { InputProps } from "../input";
import styled from "styled-components/macro";
import { defaultTheme, typeScale } from "../../utils/global-styles";

interface DropdownProps extends InputProps {
  dataTestId?: string;
  options: { country: string; id: string }[];
  label: string;
  onSelectCallback?: (id: string, country: string) => void;
}

const Container = styled.div``;

const DropDownListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: relative;
  top: -66px;
  min-height: 120px;
  padding-left: 16px;
  background: ${defaultTheme.dropdown.backgroundColor};
  border: 1px solid ${defaultTheme.dropdown.borderColor};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${defaultTheme.dropdown.textColor};
  font-size: ${typeScale.medium};
  &:first-child {
    padding-top: 8px;
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 8px;
`;

const StyledListButton = styled.button`
  background: none;
  border: none;
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
  const [selected, setSelected] = useState(options[0].country);

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
    <Container data-testid={dataTestId || defaultTestId}>
      <Input
        name={name}
        label={label}
        onClickCallback={handleOpen}
        customValue={customValue || selected}
        onChangeCallback={handleOnChange}
        status={status}
        statusMessage={statusMessage}
      />
      {open ? (
        <DropDownListContainer>
          {options.map((option, index) => (
            <StyledListItem key={index}>
              <StyledListButton
                onClick={() => handleSelect(option.id, option.country)}
              >
                {option.country}
              </StyledListButton>
            </StyledListItem>
          ))}
        </DropDownListContainer>
      ) : null}
    </Container>
  );
};

export default Dropdown;
