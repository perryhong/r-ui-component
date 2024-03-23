import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-bottom"
  | "zoom-in-left"
  | "zoom-in-right";

export type TransitionProps<Ref extends HTMLElement | undefined = undefined> =
  CSSTransitionProps<Ref> & {
    animation?: AnimationName;
    wrapper?: boolean;
    // classNames: string;
  };

const Transition: React.FC<TransitionProps> = (props) => {
  const { animation, wrapper, children, classNames, ...restProps } = props;

  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children as React.ReactNode}</div> : children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
};

export default Transition;
