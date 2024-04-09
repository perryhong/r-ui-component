import React, { ForwardedRef } from "react";
import PlaceholderWithoutTracking, {
  PlaceholderWithoutTrackingProps,
} from "./placeholderWithoutTracking";
import { trackWindowScroll } from "./hoc/trackWindowScroll";

export type PlaceholderWithTrackingProps = PlaceholderWithoutTrackingProps & {
  forwardRef?: ForwardedRef<any>;
};

const PlaceholderWithTracking: React.FC<PlaceholderWithTrackingProps> = (
  props
) => {
  const { forwardRef, ...restProps } = props;
  return (
    <span ref={forwardRef}>
      <PlaceholderWithoutTracking {...restProps} />
    </span>
  );
};

export default trackWindowScroll(PlaceholderWithTracking);
