import classNames from "classnames";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "default" | "primary" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  /** 设置Button的类型 */
  btnType?: ButtonType;
  /** 设置Button的尺寸 */
  size?: ButtonSize;
  /** 是否禁用Button */
  disabled?: boolean;
  /** 设置Button的跳转链接, 当btnType为link时该参数必须 */
  href?: string;
  children?: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 页面中最常用的的按钮元素
 * ### 引用方法
 * ~~~js
 * import { Button } from 'r-ui-component'
 * ~~~
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { className, btnType, size, disabled, href, children, ...restProps } =
    props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });

  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  btnType: "default",
  disabled: false,
};

export default Button;
