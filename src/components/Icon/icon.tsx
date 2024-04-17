import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { SizeProp, IconProp } from "@fortawesome/fontawesome-svg-core";

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface IconProps extends FontAwesomeIconProps {
  icon: IconProp;
  theme?: ThemeProps;
  size?: SizeProp;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { theme, className, ...restProps } = props;
  const classes = classNames("rec-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
