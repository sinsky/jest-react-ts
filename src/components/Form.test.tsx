import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const user = userEvent.setup();

describe("Form", () => {
  it("text input is blank by first render", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("user submits form", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockReturnValue();
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    await userEvent.type(input, "hello");
    expect(screen.getByDisplayValue("hello")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);
    expect(alertSpy).toHaveBeenCalledWith("submitted: hello");
    alertSpy.mockRestore();
  });
});
