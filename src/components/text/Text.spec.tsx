import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Text from "./Text";
import "jest-styled-components";

afterEach(cleanup);

it("should render default Text", () => {
  render(<Text />);
  const text = screen.getByTestId("styled-text");
  expect(text).toMatchSnapshot();
});
