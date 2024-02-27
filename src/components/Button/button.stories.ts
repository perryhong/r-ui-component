import { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    btnType: "primary",
    children: "button",
  },
};

export const Link: Story = {
  args: {
    btnType: "link",
    children: "button",
    href: "https://www.baidu.com",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "button",
  },
};
