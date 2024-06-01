import React from "react";
import { render, screen } from "@testing-library/react";
import MyDocument from "./index";

describe("MyDocument Component", () => {
  const mockDocument = {
    name: "Test Document",
    picture: "test.jpg"
  };

  it("renders without crashing", () => {
    render(<MyDocument document={mockDocument} />);
    expect(screen.getByText("Section #1")).toBeInTheDocument();
    expect(screen.getByText(mockDocument.name)).toBeInTheDocument();
  });

  it("does not render image if picture prop is not provided", () => {
    const mockDocumentWithoutPicture = { ...mockDocument, picture: undefined };
    render(<MyDocument document={mockDocumentWithoutPicture} />);
    const imageElement = screen.queryByRole("img");
    expect(imageElement).toBeNull(); // Check if imageElement is null
  });
});
