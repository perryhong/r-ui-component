import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const meta = {
  title: "Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;

export const DefaultMenu: StoryFn<MenuProps> = (props) => (
  <Menu {...props}>
    <MenuItem>link one</MenuItem>
    <MenuItem disabled>disabled link two</MenuItem>
    <MenuItem>link three</MenuItem>
  </Menu>
);

DefaultMenu.args = {
  defaultIndex: "2",
  style: {
    backgroundColor: "#fff",
  },
  onSelect: (index) => {
    action(`clicked ${index} item`);
  },
};

export const HasSubMenu: StoryFn<MenuProps> = (props) => (
  <Menu {...props}>
    <MenuItem>link one</MenuItem>
    <SubMenu title="sub menu">
      <MenuItem>link one</MenuItem>
      <MenuItem>link two</MenuItem>
      <MenuItem>link three</MenuItem>
    </SubMenu>
    <MenuItem>link four</MenuItem>
  </Menu>
);

HasSubMenu.args = {
  defaultIndex: "0",
  style: {
    backgroundColor: "#fff",
  },
  onSelect: (index) => {
    action(`clicked ${index} item`);
  },
};
