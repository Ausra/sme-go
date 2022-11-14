import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox, { checkboxTestId, defaultTestId } from "./Checkbox";
import "jest-styled-components";

describe("Checkbox Styles", () => {
  it("should render", () => {
    render(<Checkbox id="checkbox1" />);
    const checkbox = screen.getByTestId(defaultTestId);
    expect(checkbox).toMatchSnapshot();
  });
});

describe("Checkbox", () => {
  it("should render default Checkbox", () => {
    render(<Checkbox id="checkbox1" />);
    const checkbox = screen.getByTestId(defaultTestId);
    expect(checkbox).toBeInTheDocument();
  });
  it("should call onChangeCallback", async () => {
    const user = userEvent.setup();
    const onChangeCallback = jest.fn();
    render(<Checkbox id="checkbox1" onChangeCallback={onChangeCallback} />);
    const checkbox = screen.getByTestId(checkboxTestId);
    await user.click(checkbox);
    expect(onChangeCallback).toHaveBeenCalled();
  });
});
