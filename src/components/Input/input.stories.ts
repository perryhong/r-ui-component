import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./input";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: "300px" },
    placeholder: "placeholder",
    onChange: action("changed"),
  },
};

export const Disabled: Story = {
  args: {
    style: { width: "300px" },
    placeholder: "disabled input",
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    style: { width: "300px" },
    placeholder: "input with search",
    icon: "search",
  },
};

export const Large: Story = {
  args: {
    style: { width: "300px" },
    size: "lg",
    placeholder: "large size",
  },
};

export const Small: Story = {
  args: {
    style: { width: "300px" },
    size: "sm",
    placeholder: "small size",
  },
};

export const Prepend: Story = {
  args: {
    style: { width: "300px" },
    placeholder: "www.baidu.com",
    prepend: "https://",
  },
};

export const Append: Story = {
  args: {
    style: { width: "300px" },
    placeholder: "www.baidu",
    append: ".com",
  },
};
