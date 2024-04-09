import LazyLoadImage, { LazyLoadImageProps } from "./lazyLoadImage";
import LazyLoadComponent, { LazyLoadComponentProps } from "./lazyLoadComponent";
import {
  ScrollWrapperComponentProps,
  trackWindowScroll,
} from "./hoc/trackWindowScroll";
import { FC } from "react";
import { PlaceholderWithTrackingProps } from "./placeholderWithTracking";

export type ILazyLoadImageComponent = FC<LazyLoadImageProps> & {
  LazyLoadComponent: FC<LazyLoadComponentProps>;
  trackWindowScroll: (
    BaseComponent: FC<PlaceholderWithTrackingProps>
  ) => FC<ScrollWrapperComponentProps>;
};

const TransLazyLoadImage = LazyLoadImage as ILazyLoadImageComponent;
TransLazyLoadImage.LazyLoadComponent = LazyLoadComponent;
TransLazyLoadImage.trackWindowScroll = trackWindowScroll;

export default TransLazyLoadImage;
export type {
  LazyLoadImageProps,
  LazyLoadComponentProps,
  PlaceholderWithTrackingProps,
  ScrollWrapperComponentProps,
};
