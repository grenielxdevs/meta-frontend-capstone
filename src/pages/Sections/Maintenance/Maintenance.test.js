import React from "react";
import { render, screen } from "@testing-library/react";
import Maintenance from "./Maintenance";

test("renders maintenance component without errors", () => {
  render(<Maintenance />);

  expect(screen.getByTestId("maintenance")).toBeInTheDocument();
  expect(screen.getByText("Maintenance")).toBeInTheDocument();
});
