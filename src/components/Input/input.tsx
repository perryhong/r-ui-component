import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import Icon from "../Icon";

type InputSize = "lg" | "sm";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  datatestid?: string;
  /** 是否禁用Input */
  disabled?: boolean;
  /** 设置Input大小，支持lg或者是sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /** 添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /** 添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  /** input改变时的触发事件 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容
 *
 * ~~~js
 * // 这样引用
 * import { Input } from '@pekings/r-ui-component'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: React.FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;

  const classes = classNames("rec-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });
  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    <div className={classes} style={style} data-testid="rec-input">
      {prepend && <div className="rec-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="rec-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="rec-input-group-append">{append}</div>}
    </div>
  );
};

export default Input;
