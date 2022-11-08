import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Button from "./Button";
import "jest-styled-components";

afterEach(cleanup);

it("button primary", () => {
  render(<Button primary />);
  const button = screen.getByRole("button");
  expect(button).toMatchSnapshot();
});
