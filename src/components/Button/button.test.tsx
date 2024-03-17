import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: "primary",
  size: "lg",
  className: "testClass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test button component", () => {
  it("should render the correct default button", async () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const element = (await screen.findByText("Nice")) as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component base on different props", async () => {
    render(<Button {...testProps}>Nice</Button>);
    const element = await screen.findByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary", "btn-lg", "testClass");
  });
  it("should render a link when btnType equals link and href is provided", async () => {
    render(
      <Button btnType="link" href="http://www.baidu.com">
        Link
      </Button>
    );
    const element = await screen.findByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it("should render disabled button when disabled set to true", async () => {
    render(<Button {...disabledProps}>Nice</Button>);
    const element = (await screen.findByText("Nice")) as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
