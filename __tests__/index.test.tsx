import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/index";
import { createAndDispatchEvent } from "../helpers";

// Mock the createAndDispatchEvent function
jest.mock("../helpers", () => ({
  createAndDispatchEvent: jest.fn(),
}));

describe("Home Component", () => {
  it("should render the component and handle button click", () => {
    render(<Home />);

    // Check if the component renders correctly
    expect(screen.getByText(/Microfrontend Host/i)).toBeInTheDocument();
    expect(screen.getByText(/Cambiar/i)).toBeInTheDocument();

    // Simulate button click
    fireEvent.click(screen.getByText(/Cambiar/i));

    // Check if createAndDispatchEvent was called
    expect(createAndDispatchEvent).toHaveBeenCalledTimes(3);
  });
});
