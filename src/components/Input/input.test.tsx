import { fireEvent, render, screen } from "@testing-library/react";
import Input, { InputProps } from "./input";

const defaultProps = {
  onChange: jest.fn(),
  placeholder: "test-input",
};

const disabledProps: InputProps = {
  onChange: jest.fn(),
  disabled: true,
  placeholder: "disabled-input",
};

const largeSizeProps: InputProps = {
  placeholder: "lg-size-input",
  size: "lg",
};

const prependAppendProps: InputProps = {
  placeholder: "input-with-prepend",
  prepend: "https://",
  append: ".com",
};

describe("test input componnet", () => {
  it("should render the correct default input", async () => {
    render(<Input {...defaultProps} />);
    const element = (await screen.findByPlaceholderText(
      "test-input"
    )) as HTMLInputElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("rec-input-inner");
    fireEvent.change(element, { target: { value: "111" } });
    // expect(element).toHaveValue("111");
    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(element.value).toEqual("111");
  });

  it("should render the disabled input on disabled property", async () => {
    render(<Input {...disabledProps} />);
    const element = (await screen.findByPlaceholderText(
      "disabled-input"
    )) as HTMLInputElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
  });
});

describe("test input size", () => {
  it("should render different input sizes on size property", async () => {
    render(<Input {...largeSizeProps} />);
    const element = await screen.findByTestId("rec-input");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("input-size-lg");
  });
});

describe("test input with prepand/append", () => {
  it("should render prepand and append element on prepand/append property", async () => {
    render(<Input {...prependAppendProps} />);
    const element = await screen.findByTestId("rec-input");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(
      "input-group input-group-prepend input-group-append"
    );
    const prependEle = await screen.findByText("https://");
    expect(prependEle).toBeInTheDocument();
    const appendEle = await screen.findByText(".com");
    expect(appendEle).toBeInTheDocument();
  });
});
