import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("renders the Maintenance component", () => {
    render(<Login />);

    const maintenanceElement = screen.getByTestId("maintenance");
    expect(maintenanceElement).toBeInTheDocument();
  });
});
