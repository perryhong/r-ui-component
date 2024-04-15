import { Meta, StoryObj } from "@storybook/react";
import VerificationCodeBox from "./verificationCodeBox";

const meta = {
  title: "VerificationCodeBox",
  component: VerificationCodeBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VerificationCodeBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 200,
    height: 100,
    onCodeRecieve: (code) => {
      console.log(code);
    },
  },
};
