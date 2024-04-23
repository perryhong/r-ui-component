import React, { ReactNode, Ref } from "react";
import ResizeObserver from "rc-resize-observer";

interface FilterProps {
  height: number;
  offsetY?: number;
  offsetX: number;
  children: ReactNode;
  extra?: ReactNode;
  onInnerResize?: () => void;
}

const Filter = React.forwardRef(
  (props: FilterProps, ref: Ref<HTMLDivElement>) => {
    const { height, offsetY, children, offsetX, extra, onInnerResize } = props;
    let outerStyle: React.CSSProperties = {};

    let innerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
    };

    if (offsetY !== undefined) {
      // Not set `width` since this will break `sticky: right`
      outerStyle = {
        height,
        position: "relative",
        overflow: "hidden",
      };

      innerStyle = {
        ...innerStyle,
        transform: `translateY(${offsetY}px)`,
        marginLeft: -offsetX,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
      };
    }

    return (
      <div style={outerStyle}>
        <ResizeObserver
          onResize={({ offsetHeight }) => {
            if (offsetHeight && onInnerResize) onInnerResize();
          }}
        >
          <div style={innerStyle} ref={ref}>
            {children}
            {extra}
          </div>
        </ResizeObserver>
      </div>
    );
  }
);

export default Filter;
