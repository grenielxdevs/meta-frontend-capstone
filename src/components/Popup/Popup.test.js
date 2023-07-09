import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Popup from "./Popup";

describe("Popup component", () => {
  const sampleData = {
    text: "Sample Popup Text",
    description: "This is a sample description for the popup component.",
  };

  test("renders the Popup component with given text and description", () => {
    render(
      <Popup text={sampleData.text} description={sampleData.description} />
    );

    // Check if the text is rendered
    const textElement = screen.getByText(sampleData.text);
    expect(textElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText(sampleData.description);
    expect(descriptionElement).toBeInTheDocument();

    // Check if the Close button is rendered
    const buttonElement = screen.getByText("Confirm");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClose handler when clicking outside the popup", () => {
    const onCloseMock = jest.fn();
    render(
      <Popup
        text={sampleData.text}
        description={sampleData.description}
        onClose={onCloseMock}
      />
    );

    const backgroundElement = screen.getByTestId("popup-background");
    fireEvent.click(backgroundElement);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("calls onClose handler when the Close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <Popup
        text={sampleData.text}
        description={sampleData.description}
        onClose={onCloseMock}
      />
    );

    const buttonElement = screen.getByText("Confirm");
    fireEvent.click(buttonElement);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
