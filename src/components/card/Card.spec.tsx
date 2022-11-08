import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Card from "./Card";

it("should render Card", () => {
  render(
    <Provider store={store}>
      <Card title="Company" />
    </Provider>
  );

  expect(screen.getByTestId("styled-card-container")).toBeInTheDocument();
});
