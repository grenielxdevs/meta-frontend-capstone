import React from "react";
import { render, screen } from "@testing-library/react";
import Orders from "./Orders";

// Ensure that the relative path here matches the actual relative path to the Maintenance component.
jest.mock("../Sections/Maintenance/Maintenance", () => {
  return () => <div data-testid='maintenance'>Maintenance</div>;
});

describe("Orders component", () => {
  test("renders the maintenance component", () => {
    render(<Orders />);

    const maintenanceElement = screen.getByTestId("maintenance");
    expect(maintenanceElement).toBeInTheDocument();
  });
});
