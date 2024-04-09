import React, { ReactElement, useEffect, useState } from "react";
import PlaceholderWithoutTracking, {
  PlaceholderWithoutTrackingProps,
} from "./placeholderWithoutTracking";
import { isIntersectionObserverAvailable } from "./utils/intersection-observer";
import PlaceholderWithTracking from "./placeholderWithTracking";
import { ScrollWrapperComponentProps } from "./hoc/trackWindowScroll";

export interface LazyLoadComponentProps
  extends Omit<
    ScrollWrapperComponentProps & PlaceholderWithoutTrackingProps,
    "onVisible"
  > {
  children: ReactElement;
  /** 是否默认直接加载图片，当有重复的已经加载过的可以进行设置 */
  visibleByDefault?: boolean;
  /** 图片加载前的回调事件 */
  beforeLoad?: () => void;
}

const LazyLoadComponent: React.FC<LazyLoadComponentProps> = (props) => {
  const {
    useIntersectionObserver,
    visibleByDefault,
    scrollPosition,
    beforeLoad,
  } = props;
  const [visible, setVisible] = useState(visibleByDefault);
  const isScrollTracked = Boolean(
    scrollPosition &&
      Number.isFinite(scrollPosition.x) &&
      scrollPosition.x >= 0 &&
      Number.isFinite(scrollPosition.y) &&
      scrollPosition.y >= 0
  );

  const onVisible = () => {
    if (beforeLoad) beforeLoad();
    setVisible(true);
  };

  useEffect(() => {
    if (visibleByDefault) {
      if (beforeLoad) beforeLoad();
    }
  }, []);

  if (visible) return props.children;

  if (
    isScrollTracked ||
    (useIntersectionObserver && isIntersectionObserverAvailable())
  ) {
    return <PlaceholderWithoutTracking {...props} onVisible={onVisible} />;
  }

  return <PlaceholderWithTracking {...props} onVisible={onVisible} />;
};

LazyLoadComponent.defaultProps = {
  useIntersectionObserver: true,
  visibleByDefault: false,
};

export default LazyLoadComponent;
