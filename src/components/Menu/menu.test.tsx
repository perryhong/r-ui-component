import {
  RenderResult,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

jest.mock("../Icon/icon", () => {
  return () => {
    return <i className="fa"></i>;
  };
});

jest.mock("react-transition-group", () => {
  return {
    CSSTransition: (props: any) => {
      return props.children;
    },
  };
});

const testProps: MenuProps = {
  defaultIndex: "0",
  className: "test",
  onSelect: jest.fn(),
};
const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
  defaultOpenSubMenus: ["4"],
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>link1</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>link2</MenuItem>
      <SubMenu title="submenu1">
        <MenuItem>subLink1</MenuItem>
        <MenuItem>subLink2</MenuItem>
      </SubMenu>
      <SubMenu title="submenu2">
        <MenuItem>subLink3</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createCssFile = () => {
  const cssFile: string = `
    .rec-submenu {
      display: none;
    }
    .rec-submenu.menu-opened {
      display:block;
    }
  `;
  const style = document.createElement("style");
  // style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};

let element: RenderResult;
describe("test Menu and MenuItem component in default(horizontal) mode", () => {
  it("should render Menu and MenuItem based on default props", async () => {
    render(generateMenu(testProps));
    // element.container.append(createCssFile());
    const menuElement = await screen.findByTestId("rec-menu");
    const activeElement = await screen.findByText("link1");
    const disabledElement = await screen.findByText("disabled");
    const menuItemList = await screen.findAllByTestId("rec-menu-item");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("rec-menu test");
    expect(menuItemList.length).toEqual(6);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });

  it("click items should change active and call the right callback", async () => {
    render(generateMenu(testProps));
    // element.container.append(createCssFile());
    const thirdItem = await screen.findByText("link2");
    const activeElement = await screen.findByText("link1");
    const disabledElement = await screen.findByText("disabled");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("menu-item is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
  });

  it("should show dropdown items when hover on subMenu", async () => {
    element = render(generateMenu(testProps));
    element.container.append(createCssFile());
    const submenuItemList = await screen.findAllByTestId("rec-submenu");
    const submenuItem = submenuItemList[0];
    fireEvent.mouseEnter(submenuItem);
    const subLink1 = await screen.findByText("subLink1");
    await waitFor(() => {
      expect(subLink1).toBeVisible();
    });
    fireEvent.click(subLink1);
    expect(subLink1).toHaveClass("menu-item is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
    fireEvent.mouseLeave(submenuItem);
    await waitFor(() => {
      expect(subLink1).not.toBeVisible();
    });
  });
});

let verticalElement: RenderResult;
describe("test Menu and MenuItem component in vertical mode", () => {
  it("should render vertical mode when mode is set to vertical", async () => {
    render(generateMenu(testVerProps));
    const menuElement = await screen.findByTestId("rec-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });

  it("should show dropdown items when click on subMenu for vertical mode", async () => {
    verticalElement = render(generateMenu(testVerProps));
    verticalElement.container.append(createCssFile());
    const submenu1 = await screen.findByText("submenu1");
    const subLink1 = await screen.findByText("subLink1");
    expect(subLink1).not.toBeVisible();
    fireEvent.click(submenu1);
    await waitFor(() => {
      expect(subLink1).toBeVisible();
    });
  });

  it("should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index", async () => {
    render(generateMenu(testVerProps));
    const subLink3 = await screen.findByText("subLink3");
    expect(subLink3).toBeVisible();
  });
});
