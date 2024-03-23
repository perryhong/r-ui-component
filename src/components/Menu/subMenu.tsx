import React, { useContext, useState } from "react";
import { MenuContext } from "./menu";
import classNames from "classnames";
import Icon from "../Icon";
import { MenuItemProps } from "./menuItem";
import Transition from "../Transition";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props;
  const context = useContext(MenuContext);
  const defaultOpenSubMenus = context.defaultOpenSubMenus as string[];
  const isOpened =
    index && context.mode === "vertical"
      ? defaultOpenSubMenus?.includes(index)
      : false;
  const [opened, setOpened] = useState(isOpened);

  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": opened,
    "is-vertical": context.mode === "vertical",
  });
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpened(!opened);
  };

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpened(toggle);
    }, 300);
  };

  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode === "horizontal"
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classNames("rec-submenu", {
      "menu-opened": opened,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      if (childElement?.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
    return (
      <Transition in={opened} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };

  return (
    <li
      key={index}
      className={classes}
      {...hoverEvents}
      data-testid="rec-submenu"
    >
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
