import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import Dropdown, { defaultTestId, listItemButtonId } from "./Dropdown";

const OPTIONS = [
  { id: "1", value: "Lithuania" },
  { id: "2", value: "USA" },
];

describe("Dropdown styles", () => {
  it("renders", () => {
    render(<Dropdown label="Country of Registration" options={OPTIONS} />);

    const dropdownInput = screen.getByTestId(defaultTestId);
    expect(dropdownInput).toMatchSnapshot();
  });
});

describe("Dropdown", () => {
  it("renders", () => {
    render(<Dropdown label="Country of Registration" options={OPTIONS} />);
    const dropdownInput = screen.getByTestId(defaultTestId);
    expect(dropdownInput).toBeInTheDocument();
  });

  it("should call onSelectCallback", async () => {
    const user = userEvent.setup();
    const onSelectCallback = jest.fn();
    render(
      <Dropdown
        label="Country of Registration"
        options={OPTIONS}
        onSelectCallback={onSelectCallback}
      />
    );

    const dropdownInput = screen.getByTestId(defaultTestId);
    await user.click(dropdownInput);

    const listItem = screen.getAllByTestId(listItemButtonId);

    await user.click(listItem[0]);

    await waitFor(() => {
      expect(onSelectCallback).toHaveBeenCalledWith(OPTIONS[0].value);
    });
  });
});
