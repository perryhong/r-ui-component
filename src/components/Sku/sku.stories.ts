import { Meta, StoryObj } from "@storybook/react";
import Sku from "./sku";

const meta = {
  title: "Sku",
  component: Sku,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Sku>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
    onSkuSelected: (item) => {
      console.log(item);
    },
  },
};
