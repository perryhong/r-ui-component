import React, { useRef, CSSProperties, ReactElement, useEffect } from "react";
import { isIntersectionObserverAvailable } from "./utils/intersection-observer";

const checkIntersections = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      (entry.target as HTMLElement & { onVisible: () => void }).onVisible();
    }
  });
};

const LAZY_LOAD_OBSERVERS: { [key: number]: IntersectionObserver } = {};

const getObserver = (threshold: number) => {
  LAZY_LOAD_OBSERVERS[threshold] =
    LAZY_LOAD_OBSERVERS[threshold] ||
    new IntersectionObserver(checkIntersections, {
      rootMargin: `${threshold}px`,
    });

  return LAZY_LOAD_OBSERVERS[threshold];
};

export interface PlaceholderWithoutTrackingProps {
  /** 图片出现在视图中的哪个分界点开始加载,单位px */
  threshold?: number;
  /** 图片未加载前的placeholder */
  placeholder?: ReactElement | null;
  /** 图片样式class */
  className?: string;
  /** 图片内联样式 */
  style?: CSSProperties;
  /** 图片高度 */
  height?: number | string;
  /** 图片宽度 */
  width?: number | string;
  /** 是否使用IntersectionObserver */
  useIntersectionObserver?: boolean;
  /** 滚动的横竖距离,若不使用IntersectionObserver则要传 */
  scrollPosition?: {
    y: number;
    x: number;
  };
  onVisible?: () => void;
}

const PlaceholderWithoutTracking: React.FC<PlaceholderWithoutTrackingProps> = (
  props
) => {
  const {
    placeholder,
    useIntersectionObserver,
    threshold = 0,
    scrollPosition,
    className,
    height,
    width,
    style,
    onVisible,
  } = props;
  const isSupportObserver =
    !scrollPosition &&
    useIntersectionObserver &&
    isIntersectionObserverAvailable();
  const observer = isSupportObserver ? getObserver(threshold) : null;
  const placeholderRef = useRef<HTMLElement & { onVisible?: () => void }>(null);

  const getPlaceholderBoundingBox = () => {
    const boundingRect = placeholderRef.current?.getBoundingClientRect();
    const style = placeholderRef.current?.style;

    const margin = {
      left:
        style && style.getPropertyValue("margin-left")
          ? parseInt(style.getPropertyValue("margin-left"), 10)
          : 0,
      top:
        style && style.getPropertyValue("margin-top")
          ? parseInt(style.getPropertyValue("margin-top"), 10)
          : 0,
    };

    return {
      left: (scrollPosition?.x || 0) + (boundingRect?.left || 0) + margin.left,
      right:
        (scrollPosition?.x || 0) + (boundingRect?.right || 0) + margin.left,
      top: (scrollPosition?.y || 0) + (boundingRect?.top || 0) + margin.top,
      bottom:
        (scrollPosition?.y || 0) + (boundingRect?.bottom || 0) + margin.top,
    };
  };

  const isPlaceholderInViewport = () => {
    if (typeof window === "undefined" || !placeholderRef.current) {
      return false;
    }
    const boundingBox = getPlaceholderBoundingBox();

    const viewport = {
      top: scrollPosition?.y || 0,
      bottom: (scrollPosition?.y || 0) + window.innerHeight,
      left: scrollPosition?.x || 0,
      right: (scrollPosition?.x || 0) + window.innerWidth,
    };

    return Boolean(
      viewport.top - threshold <= boundingBox.bottom &&
        viewport.bottom + threshold >= boundingBox.top &&
        viewport.left - threshold <= boundingBox.right &&
        viewport.right + threshold >= boundingBox.left
    );
  };

  const updateVisibility = () => {
    if (isPlaceholderInViewport() && onVisible) {
      onVisible();
    }
  };

  useEffect(() => {
    const ele = placeholderRef.current;
    if (isSupportObserver && observer && ele) {
      ele.onVisible = onVisible;
      observer.observe(ele);
    }
    return () => {
      if (observer && ele) {
        observer.unobserve(ele);
      }
    };
  }, []);

  useEffect(() => {
    if (!isSupportObserver) {
      updateVisibility();
    }
  }, [scrollPosition]);

  if (placeholder && typeof placeholder.type !== "function") {
    return React.cloneElement(placeholder, {
      ref: placeholderRef,
    });
  }

  const styleProps = {
    display: "inline-block",
    ...style,
  };

  if (typeof width !== "undefined") {
    styleProps.width = width;
  }

  if (typeof height !== "undefined") {
    styleProps.height = height;
  }

  return (
    <span ref={placeholderRef} className={className} style={styleProps}>
      {placeholder}
    </span>
  );
};

PlaceholderWithoutTracking.defaultProps = {
  threshold: 100,
  placeholder: null,
  useIntersectionObserver: true,
};

export default PlaceholderWithoutTracking;
