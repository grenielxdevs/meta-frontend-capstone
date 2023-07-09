import React from "react";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Visuals from "./Visuals";

test("renders Visuals component without errors", () => {
  render(
    <BrowserRouter>
      <Visuals />
    </BrowserRouter>
  );

  expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  expect(screen.getByText("Manila")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Flavored in the heart of Manila, Philippines, experience the rich and tasty dishes that were passed down through generations of hardwork and dedication. Our food will not only satisfy your cravings, but will also provide you with a great memory for us to remember."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Book A Reservation")).toBeInTheDocument();
  expect(screen.getByAltText("Little Lemon Food Visuals")).toBeInTheDocument();
});
