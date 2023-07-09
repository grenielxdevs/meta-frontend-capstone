import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders button with correct text", () => {
    const text = "Click me";
    render(<Button text={text} />);
    const buttonElement = screen.getByText(text);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button text='Click me' onClick={onClickMock} />);
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('prevents default form submission on button click when type is not "submit"', () => {
    const onSubmitMock = jest.fn();
    render(
      <form onSubmit={onSubmitMock}>
        <Button text='Submit' type='button' />
      </form>
    );

    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
