import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  test("renders the Maintenance component", () => {
    render(<About />);

    const maintenanceElement = screen.getByTestId("maintenance");
    expect(maintenanceElement).toBeInTheDocument();
  });
});
