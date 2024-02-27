import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("test button component", () => {
  it("should render the correct default button", async () => {
    render(<Button>Nice</Button>);
    const element = await screen.findByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveClass("btn btn-default");
  });
  it("should render the correct component base on different props", () => {});
  it("should render a link when btnType equals link and href is provided", () => {});
});
