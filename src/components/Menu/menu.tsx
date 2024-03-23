import classNames from "classnames";
import React, { CSSProperties, createContext, useState } from "react";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  /** 菜单的模式 */
  mode?: MenuMode;
  /** 默认 active 的菜单项的索引值 */
  defaultIndex?: string;
  /** 样式class */
  className?: string;
  /** 样式style */
  style?: CSSProperties;
  /** 默认展开的子菜单 */
  defaultOpenSubMenus?: string[];
  datatestid?: string;
  /** 子组件 */
  children?: React.ReactNode;
  /** 选中某个菜单项的触发事件 */
  onSelect?: (selectedIndex: string) => void;
}

interface IMenuContext {
  index: string;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
  onSelect?: (selectedIndex: string) => void;
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

/**
 * Menu 菜单 通过鼠标点击切换菜单
 *
 * ~~~js
 * // 这样引用
 * import { Menu } from 'r-ui-component'
 * const { MenuItem, SubMenu } = Menu
 * ~~~
 * 支持横向和竖向两种模式
 */
export const Menu: React.FC<MenuProps> = (props) => {
  const {
    mode,
    defaultIndex,
    className,
    style,
    defaultOpenSubMenus,
    children,
    onSelect,
  } = props;
  const [activeIdx, setActiveIdx] = useState(defaultIndex);
  const classes = classNames("rec-menu", className, {
    "menu-horizontal": mode === "horizontal",
    "menu-vertical": mode === "vertical",
  });

  const handleClick = (index: string) => {
    setActiveIdx(index);

    if (onSelect) onSelect(index);
  };

  const passContext = {
    index: activeIdx ? activeIdx : "0",
    mode,
    defaultOpenSubMenus,
    onSelect: handleClick,
  };

  const renderChildren = () => {
    if (!children) return null;
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: `${index}`,
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid="rec-menu">
      <MenuContext.Provider value={passContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};

export default Menu;
