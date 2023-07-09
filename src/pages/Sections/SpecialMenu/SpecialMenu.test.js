import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SpecialMenu from "./SpecialMenu";

describe("Specials component", () => {
  test("renders the special menu component with the title and view more button", () => {
    render(
      <MemoryRouter>
        <SpecialMenu />
      </MemoryRouter>
    );

    // Check if the title is rendered
    const specialsTitle = screen.getByText("Special Menu");
    expect(specialsTitle).toBeInTheDocument();
  });
});
