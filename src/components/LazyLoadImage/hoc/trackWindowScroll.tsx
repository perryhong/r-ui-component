import React, { FC, createRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { isIntersectionObserverAvailable } from "../utils/intersection-observer";
import { debounce, throttle } from "lodash-es";
import getScrollAncestor from "../utils/get-scroll-ancestor";
import { PlaceholderWithTrackingProps } from "../placeholderWithTracking";

const getScrollX = () => (typeof window === "undefined" ? 0 : window.scrollX);

const getScrollY = () => (typeof window === "undefined" ? 0 : window.scrollY);

type DelayMethod = "debounce" | "throttle";

export interface ScrollWrapperComponentProps
  extends PlaceholderWithTrackingProps {
  /** 滚动监听的节流防抖时间 */
  delayTime?: number;
  /** 滚动监听采用节流或者防抖 */
  delayMethod?: DelayMethod;
}

export const trackWindowScroll = (
  BaseComponent: FC<PlaceholderWithTrackingProps>
) => {
  const ScrollWrapperComponent: React.FC<ScrollWrapperComponentProps> = (
    props
  ) => {
    const { delayTime, delayMethod, ...restProps } = props;
    const useIntersectionObserver =
      props.useIntersectionObserver && isIntersectionObserverAvailable();
    const baseComponentRef = createRef<HTMLElement>();
    const [scrollPosition, setScrollPosition] = useState({
      x: getScrollX(),
      y: getScrollY(),
    });
    const sp = useIntersectionObserver ? undefined : scrollPosition;

    const onScrollChange = () => {
      if (useIntersectionObserver) return;
      const newScrollPosition = {
        x: getScrollX(),
        y: getScrollY(),
      };
      console.log(newScrollPosition);
      setScrollPosition(newScrollPosition);
    };

    const scrollHandler =
      delayMethod === "debounce"
        ? debounce(onScrollChange, delayTime)
        : throttle(onScrollChange, delayTime);

    const addListeners = (scrollElement: HTMLElement | Window) => {
      if (typeof scrollElement === "undefined" || useIntersectionObserver) {
        return;
      }

      scrollElement.addEventListener("scroll", scrollHandler, {
        passive: true,
      });

      window.addEventListener("resize", scrollHandler, {
        passive: true,
      });

      if (scrollElement !== window) {
        window.addEventListener("scroll", scrollHandler, {
          passive: true,
        });
      }
    };

    const removeListeners = (scrollElement: HTMLElement | Window) => {
      if (typeof scrollElement === "undefined" || useIntersectionObserver) {
        return;
      }

      scrollElement.removeEventListener("scroll", scrollHandler);

      window.removeEventListener("resize", scrollHandler);

      if (scrollElement !== window) {
        window.removeEventListener("scroll", scrollHandler);
      }
    };

    useEffect(() => {
      const ele = baseComponentRef.current;
      const scrollElement = getScrollAncestor(ReactDOM.findDOMNode(ele));
      addListeners(scrollElement);

      return () => {
        removeListeners(scrollElement);
      };
    }, []);

    return (
      <BaseComponent
        {...restProps}
        forwardRef={baseComponentRef}
        scrollPosition={sp}
      />
    );
  };

  ScrollWrapperComponent.defaultProps = {
    delayMethod: "throttle",
    delayTime: 300,
    useIntersectionObserver: true,
  };

  return ScrollWrapperComponent;
};
