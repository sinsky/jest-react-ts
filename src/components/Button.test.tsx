import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("rendering Button component", () => {
    render(<Button label="test" onClick={() => alert("clicked")} />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("test");
  });
});
