import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

// Mock the section components
jest.mock("../Sections/Visuals/Visuals", () => () => (
  <div data-testid='visuals'></div>
));
jest.mock("../Sections/SpecialMenu/SpecialMenu", () => () => (
  <div data-testid='special-menu'></div>
));
jest.mock("../Sections/Reviews/Reviews", () => () => (
  <div data-testid='reviews'></div>
));
jest.mock("../Sections/About/About", () => () => (
  <div data-testid='about'></div>
));

describe("Home component", () => {
  test("renders the Hero, Specials, Testimonials, and About sections", () => {
    render(<Home />);

    // Check if the Hero section is rendered
    const heroSection = screen.getByTestId("visuals");
    expect(heroSection).toBeInTheDocument();

    // Check if the Specials section is rendered
    const specialsSection = screen.getByTestId("special-menu");
    expect(specialsSection).toBeInTheDocument();

    // Check if the Testimonials section is rendered
    const testimonialsSection = screen.getByTestId("reviews");
    expect(testimonialsSection).toBeInTheDocument();

    // Check if the About section is rendered
    const aboutSection = screen.getByTestId("about");
    expect(aboutSection).toBeInTheDocument();
  });
});
