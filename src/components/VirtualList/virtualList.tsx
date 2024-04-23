import React, {
  CSSProperties,
  HTMLAttributes,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useChildren from "./hooks/useChildren";
import { GetKey, RenderFunc } from "./interface";
import useHeights from "./hooks/useHeights";
import type { ResizeObserverProps, SizeInfo } from "rc-resize-observer";
import ResizeObserver from "rc-resize-observer";
import Filter from "./filter";
import { useEvent } from "rc-util";
import ScrollBar, { ScrollBarRef } from "./scrollBar";
import useFrameWheel from "./hooks/useFrameWheel";
import useOriginScroll from "./hooks/useOriginScroll";
import useMobileTouchMove from "./hooks/useMobileTouchMove";
import { getSpinSize } from "./utils/scrollBar";

const ScrollStyle: React.CSSProperties = {
  overflowY: "auto",
  overflowAnchor: "none",
};

export interface ScrollInfo {
  x: number;
  y: number;
}

export type ScrollTo = (arg: number) => void;

export type ListRef = {
  scrollTo: ScrollTo;
  scrollInfo: ScrollInfo;
};

export interface VirtualListProps<T>
  extends Omit<HTMLAttributes<any>, "children"> {
  dataSource: T[];
  itemKey: React.Key | ((item: T) => React.Key);
  scrollWidth?: number;
  itemHeight?: number;
  style?: CSSProperties;
  height?: number;
  fullHeight?: boolean;
  children: RenderFunc<T>;
  onVirtualScroll?: (info: ScrollInfo) => void;
  onScroll?: React.UIEventHandler<HTMLElement>;
  /** Trigger when render list item changed */
  onVisibleChange?: (visibleList: T[], fullList: T[]) => void;
}

export const VirtualList = <T,>(
  props: VirtualListProps<T>,
  ref: React.Ref<ListRef>
) => {
  const {
    dataSource,
    scrollWidth,
    itemKey,
    style,
    height = 0,
    itemHeight = 0,
    fullHeight = true,
    children,
    onVirtualScroll,
    onScroll,
    onVisibleChange,
  } = props;
  const mergedData = dataSource || [];
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [scrollMoving, setScrollMoving] = useState(false);

  const componentRef = useRef<HTMLDivElement>(null);

  const onScrollbarStartMove = () => {
    setScrollMoving(true);
  };

  const onScrollbarStopMove = () => {
    setScrollMoving(false);
  };

  const wrapperStyle: CSSProperties = {
    ...(style || {}),
    position: "relative",
  };

  function syncScrollTop(newTop: number | ((prev: number) => number)) {
    setOffsetTop((origin) => {
      let value: number;
      if (typeof newTop === "function") {
        value = newTop(origin);
      } else {
        value = newTop;
      }

      const alignedTop = keepInRange(value);

      if (componentRef.current) componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }

  const getVirtualScrollInfo = () => ({
    x: offsetLeft,
    y: offsetTop,
  });

  const lastVirtualScrollInfoRef = useRef(getVirtualScrollInfo());

  const triggerScroll = useEvent(() => {
    const nextInfo = getVirtualScrollInfo();

    // Trigger when offset changed
    if (
      lastVirtualScrollInfoRef.current.x !== nextInfo.x ||
      lastVirtualScrollInfoRef.current.y !== nextInfo.y
    ) {
      if (onVirtualScroll) onVirtualScroll(nextInfo);

      lastVirtualScrollInfoRef.current = nextInfo;
    }
  });

  const getKey = useCallback<GetKey<T>>(
    (item: T) => {
      if (typeof itemKey === "function") {
        return itemKey(item);
      }
      return (item as { [key: string]: any })?.[itemKey as string];
    },
    [itemKey]
  );

  const [setInstanceRef, collectHeight, heights, heightUpdatedMark] =
    useHeights(getKey);

  const {
    startIndex,
    endIndex,
    scrollHeight,
    offset: fillerOffset,
  } = useMemo(() => {
    let itemTop = 0,
      startIndex: number | undefined = undefined,
      endIndex: number | undefined = undefined,
      startOffset: number | undefined = undefined;
    const dataLen = mergedData.length;
    for (let i = 0; i < dataLen; i += 1) {
      const item = mergedData[i];
      const key = getKey(item);
      const cacheHeight = heights.get(key);
      const currentItemBottom =
        itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
      if (currentItemBottom >= offsetTop && startIndex === undefined) {
        startIndex = i;
        startOffset = itemTop;
      }

      if (currentItemBottom > offsetTop + height && endIndex === undefined) {
        endIndex = i;
      }

      itemTop = currentItemBottom;
    }

    if (startIndex === undefined) {
      startIndex = 0;
      startOffset = 0;
      endIndex = Math.ceil(height / itemHeight);
    }

    if (endIndex === undefined) {
      endIndex = dataLen - 1;
    }

    endIndex = Math.min(endIndex + 1, dataLen - 1);

    return {
      scrollHeight: itemTop,
      startIndex,
      endIndex,
      offset: startOffset,
    };
  }, [offsetTop, mergedData, height, heightUpdatedMark]);

  console.log(scrollHeight, fillerOffset);

  const [size, setSize] = React.useState({ width: 0, height });

  const onHolderResize: ResizeObserverProps["onResize"] = (
    sizeInfo: SizeInfo
  ) => {
    setSize({
      width: sizeInfo.width || sizeInfo.offsetWidth,
      height: sizeInfo.height || sizeInfo.offsetHeight,
    });
  };

  const verticalScrollBarSpinSize = React.useMemo(
    () => getSpinSize(size.height, scrollHeight),
    [size.height, scrollHeight]
  );

  const maxScrollHeight = scrollHeight - height;
  const maxScrollHeightRef = useRef(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;

  function keepInRange(newScrollTop: number) {
    let newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }

  const isScrollAtTop = offsetTop <= 0;
  const isScrollAtBottom = offsetTop >= maxScrollHeight;

  const originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);

  function onScrollBar(newScrollOffset: number) {
    const newOffset = newScrollOffset;
    syncScrollTop(newOffset);
  }

  function onFallbackScroll(e: React.UIEvent<HTMLDivElement>) {
    console.log(e);
    const { scrollTop: newScrollTop } = e.currentTarget;
    if (newScrollTop !== offsetTop) {
      syncScrollTop(newScrollTop);
    }

    // Trigger origin onScroll
    onScroll?.(e);
    triggerScroll();
  }

  const onWheelDelta: Parameters<typeof useFrameWheel>[4] = useEvent(
    (offsetXY) => {
      syncScrollTop((top) => {
        const newTop = top + offsetXY;
        return newTop;
      });
    }
  );

  const [onRawWheel, onFireFoxScroll] = useFrameWheel(
    true,
    isScrollAtTop,
    isScrollAtBottom,
    !!scrollWidth,
    onWheelDelta
  );

  // Mobile touch move
  useMobileTouchMove(true, componentRef, (deltaY, smoothOffset) => {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }

    onRawWheel({ preventDefault() {}, deltaY } as WheelEvent);
    return true;
  });

  useLayoutEffect(() => {
    // Firefox only
    function onMozMousePixelScroll(e: Event) {
      e.preventDefault();
    }

    const componentEle = componentRef.current;
    componentEle?.addEventListener("wheel", onRawWheel);
    componentEle?.addEventListener("DOMMouseScroll", onFireFoxScroll as any);
    componentEle?.addEventListener(
      "MozMousePixelScroll",
      onMozMousePixelScroll
    );

    return () => {
      componentEle?.removeEventListener("wheel", onRawWheel);
      componentEle?.removeEventListener(
        "DOMMouseScroll",
        onFireFoxScroll as any
      );
      componentEle?.removeEventListener(
        "MozMousePixelScroll",
        onMozMousePixelScroll as any
      );
    };
  }, [componentRef.current]);

  const verticalScrollBarRef = useRef<ScrollBarRef>(null);

  const delayHideScrollBar = () => {
    verticalScrollBarRef.current?.delayHidden();
  };

  useLayoutEffect(() => {
    if (onVisibleChange) {
      const renderList = mergedData.slice(startIndex, endIndex + 1);

      onVisibleChange(renderList, mergedData);
    }
  }, [startIndex, endIndex, mergedData]);

  const listChildren = useChildren({
    list: dataSource,
    startIndex,
    endIndex,
    scrollWidth,
    renderFunc: children,
    setNodeRef: setInstanceRef,
    sharedConf: { getKey },
  });

  let componentStyle: React.CSSProperties = {};
  if (height) {
    componentStyle = {
      [fullHeight ? "height" : "maxHeight"]: height,
      ...ScrollStyle,
    };

    componentStyle.overflowY = "hidden";

    if (scrollWidth) {
      componentStyle.overflowX = "hidden";
    }

    if (scrollMoving) {
      componentStyle.pointerEvents = "none";
    }
  }

  return (
    <div style={wrapperStyle}>
      <ResizeObserver onResize={onHolderResize}>
        <div
          ref={componentRef}
          style={componentStyle}
          onScroll={onFallbackScroll}
          onMouseEnter={delayHideScrollBar}
        >
          <Filter
            height={scrollHeight}
            offsetY={fillerOffset}
            offsetX={offsetLeft}
            onInnerResize={collectHeight}
          >
            {listChildren}
          </Filter>
        </div>
      </ResizeObserver>

      {scrollHeight > height && (
        <ScrollBar
          ref={verticalScrollBarRef}
          rtl={false}
          scrollOffset={offsetTop}
          scrollRange={scrollHeight}
          containerSize={size.height}
          spinSize={verticalScrollBarSpinSize}
          onScroll={onScrollBar}
          onStartMove={onScrollbarStartMove}
          onStopMove={onScrollbarStopMove}
        />
      )}
    </div>
  );
};

const List = React.forwardRef<ListRef, VirtualListProps<any>>(VirtualList);

export default List;
