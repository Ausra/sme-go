import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import Input, {
  defaultTestId,
  errorMessageTestId,
  InputStatus,
  inputTestId,
} from "./Input";

describe("Input styles", () => {
  it("renders", () => {
    render(<Input label="Company" />);
    const input = screen.getByTestId(defaultTestId);
    expect(input).toMatchSnapshot();
  });

  it("renders with errors message", () => {
    render(
      <Input
        label="Company"
        status={InputStatus.error}
        statusMessage={"error"}
      />
    );
    const errorMessage = screen.getByTestId(errorMessageTestId);
    expect(errorMessage).toMatchSnapshot();
  });
});

describe("Input", () => {
  it("renders", () => {
    render(<Input label="Company" />);
    const input = screen.getByTestId(defaultTestId);
    expect(input).toBeInTheDocument();
  });

  it("renders with errors message", () => {
    render(
      <Input
        label="Company"
        status={InputStatus.error}
        statusMessage={"error"}
      />
    );
    const errorMessage = screen.getByTestId(errorMessageTestId);
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("error");
  });

  it("should call onChangeCallback", async () => {
    const user = userEvent.setup();
    const onChangeCallback = jest.fn();
    render(<Input label="Company" onChangeCallback={onChangeCallback} />);
    const input = screen.getByTestId(inputTestId);
    await user.type(input, "hello");
    await user.tab();

    await waitFor(() => {
      expect(onChangeCallback).toHaveBeenCalled();
    });
  });

  it("should call onClickCallback", async () => {
    const user = userEvent.setup();
    const onClickCallback = jest.fn();
    render(<Input label="Company" onClickCallback={onClickCallback} />);
    const input = screen.getByTestId(inputTestId);
    await user.click(input);

    await waitFor(() => {
      expect(onClickCallback).toHaveBeenCalled();
    });
  });

  it("should call onBlurCallback", async () => {
    const user = userEvent.setup();
    const onBlurCallback = jest.fn();
    render(<Input label="Company" onBlurCallback={onBlurCallback} />);
    const input = screen.getByTestId(inputTestId);
    await user.click(input);
    await user.tab();

    await waitFor(() => {
      expect(onBlurCallback).toHaveBeenCalled();
    });
  });
});
