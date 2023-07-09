import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect";

test("it renders the Header component correctly", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByAltText("little lemon logo")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Menu")).toBeInTheDocument();
  expect(screen.getByText("Reservations")).toBeInTheDocument();
  expect(screen.getByText("Reviews")).toBeInTheDocument();
  expect(screen.getByText("Orders")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});
