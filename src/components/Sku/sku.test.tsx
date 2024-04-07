import { fireEvent, render, screen } from "@testing-library/react";
import Sku, { SkuProps } from "./sku";

const defaultProps: SkuProps = {
  specList: [
    {
      title: "颜色",
      list: [
        {
          value: "红色",
          id: "1",
        },
        {
          value: "紫色",
          id: "2",
        },
      ],
    },
    {
      title: "套餐",
      list: [
        {
          value: "套餐一",
          id: "3",
        },
        {
          value: "套餐二",
          id: "4",
        },
      ],
    },
    {
      title: "内存",
      list: [
        {
          value: "64G",
          id: "5",
        },
        {
          value: "128G",
          id: "6",
        },
        {
          value: "256G",
          id: "7",
        },
      ],
    },
  ],
  specCombinationList: [
    {
      id: "1",
      specs: [
        {
          value: "紫色",
          id: "2",
        },
        {
          value: "套餐一",
          id: "3",
        },
        {
          value: "64G",
          id: "5",
        },
      ],
    },
    {
      id: "2",
      specs: [
        {
          value: "紫色",
          id: "2",
        },
        {
          value: "套餐一",
          id: "3",
        },
        {
          value: "128G",
          id: "6",
        },
      ],
    },
    {
      id: "3",
      specs: [
        {
          value: "紫色",
          id: "2",
        },
        {
          value: "套餐二",
          id: "4",
        },
        {
          value: "128G",
          id: "6",
        },
      ],
    },
    {
      id: "4",
      specs: [
        {
          value: "红色",
          id: "1",
        },
        {
          value: "套餐二",
          id: "4",
        },
        {
          value: "256G",
          id: "7",
        },
      ],
    },
  ],
  onSkuSelected: jest.fn(),
};

describe("test Sku", () => {
  it("should render Sku component in default props", async () => {
    render(<Sku {...defaultProps} />);
    const element = await screen.findByTestId("rec-sku");
    expect(element).toBeInTheDocument();
  });

  it("click items should toggle active", async () => {
    render(<Sku {...defaultProps} />);
    const element = await screen.findByTestId("rec-sku");
    expect(element).toBeInTheDocument();
    const redElement = await screen.findByText("红色");
    fireEvent.click(redElement);
    expect(redElement).toHaveClass("rec-spec-choice-active");
    fireEvent.click(redElement);
    expect(redElement).not.toHaveClass("rec-spec-choice-active");
  });

  it("click items should disable the item which is not in options", async () => {
    render(<Sku {...defaultProps} />);
    const element = await screen.findByTestId("rec-sku");
    expect(element).toBeInTheDocument();
    const redElement = await screen.findByText("红色");
    fireEvent.click(redElement);
    const purpleElement = await screen.findByText("紫色");
    const packOneElement = await screen.findByText("套餐一");
    const sizeTwoElement = await screen.findByText("128G");
    expect(purpleElement).not.toHaveClass("rec-spec-choice-disabled");
    expect(packOneElement).toHaveClass("rec-spec-choice-disabled");
    expect(sizeTwoElement).toHaveClass("rec-spec-choice-disabled");
  });

  it("after choosing three spec should call the right callback", async () => {
    render(<Sku {...defaultProps} />);
    const element = await screen.findByTestId("rec-sku");
    expect(element).toBeInTheDocument();
    const redElement = await screen.findByText("红色");
    fireEvent.click(redElement);
    expect(redElement).toHaveClass("rec-spec-choice-active");
    const packTwoElement = await screen.findByText("套餐二");
    fireEvent.click(packTwoElement);
    expect(packTwoElement).toHaveClass("rec-spec-choice-active");
    const sizeThreeElement = await screen.findByText("256G");
    fireEvent.click(sizeThreeElement);
    expect(sizeThreeElement).toHaveClass("rec-spec-choice-active");
    expect(defaultProps.onSkuSelected).toHaveBeenCalledWith({
      id: "4",
      specs: [
        {
          value: "红色",
          id: "1",
        },
        {
          value: "套餐二",
          id: "4",
        },
        {
          value: "256G",
          id: "7",
        },
      ],
    });
    expect(defaultProps.onSkuSelected).not.toHaveBeenCalledWith({
      id: "2",
      specs: [
        {
          value: "紫色",
          id: "2",
        },
        {
          value: "套餐一",
          id: "3",
        },
        {
          value: "128G",
          id: "6",
        },
      ],
    });
  });

  it("after choosing three spec should call the right callback 2", async () => {
    render(<Sku {...defaultProps} />);
    const element = await screen.findByTestId("rec-sku");
    expect(element).toBeInTheDocument();
    const purpleElement = await screen.findByText("紫色");
    fireEvent.click(purpleElement);
    expect(purpleElement).toHaveClass("rec-spec-choice-active");
    const packOneElement = await screen.findByText("套餐一");
    fireEvent.click(packOneElement);
    expect(packOneElement).toHaveClass("rec-spec-choice-active");
    const sizeTwoElement = await screen.findByText("128G");
    fireEvent.click(sizeTwoElement);
    expect(sizeTwoElement).toHaveClass("rec-spec-choice-active");
    expect(defaultProps.onSkuSelected).toHaveBeenCalledWith({
      id: "2",
      specs: [
        {
          value: "紫色",
          id: "2",
        },
        {
          value: "套餐一",
          id: "3",
        },
        {
          value: "128G",
          id: "6",
        },
      ],
    });
    expect(defaultProps.onSkuSelected).not.toHaveBeenCalledWith({
      id: "4",
      specs: [
        {
          value: "红色",
          id: "1",
        },
        {
          value: "套餐二",
          id: "4",
        },
        {
          value: "256G",
          id: "7",
        },
      ],
    });
  });
});
