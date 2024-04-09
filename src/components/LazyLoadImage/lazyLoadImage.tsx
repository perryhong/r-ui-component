import React, {
  CSSProperties,
  ImgHTMLAttributes,
  ReactElement,
  ReactEventHandler,
  SyntheticEvent,
  useState,
} from "react";
import LazyLoadComponent, { LazyLoadComponentProps } from "./lazyLoadComponent";
import classNames from "classnames";

type LazyEffectClassNames = "blur" | "black-and-white" | "opacity";

export type LazyLoadImageProps = ImgHTMLAttributes<HTMLElement> &
  Omit<LazyLoadComponentProps, "children" | "forwardRef"> & {
    /** 图片懒加载过程的css效果 */
    effect?: LazyEffectClassNames;
    /** 图片懒加载默认背景图 */
    placeholderSrc?: string;
    /** 图片父容器的样式class，如果wrapperClassName、wrapperProps、placeholderSrc都不传则不对图片进行包裹 */
    wrapperClassName?: string;
    /** 图片父容器的额外props */
    wrapperProps?: { [key: string]: any };
  };

/**
 * 图片懒加载组件
 * ### 基础用法
 * ~~~js
  import { LazyLoadImage } from '@pekings/r-ui-component'

  const LazyImagesFC = () => {
    return (
      <div className="img-list">
        {images.map((image) => (
          <LazyLoadImage
            key={image.src}
            src={image.src}
            width={400}
            height={220}
            effect="blur"
          />
        ))}
      </div>
    )
  }
 * ~~~
 * ### 图片较多时基础用法在非IntersectionObserver模式下会卡顿，可采用下面的高阶用法
 * ~~~js
  import { LazyLoadImage } from '@pekings/r-ui-component'
  const { trackWindowScroll } = LazyLoadImage

  const LazyImagesFC = ({ scrollPosition }) => {
    return (
      <div className="img-list">
        {images.map((image) => (
          <LazyLoadImage
            key={image.src}
            src={image.src}
            width={400}
            height={220}
            effect="blur"
            scrollPosition={scrollPosition}
          />
        ))}
      </div>
    );
  };

  const ObserverLazyImage = () => {
    const Tracked = trackWindowScroll(LazyImagesFC);
    return <Tracked />;
  };
 * ~~~
 */
export const LazyLoadImage: React.FC<LazyLoadImageProps> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const {
    effect,
    wrapperClassName,
    delayTime,
    wrapperProps,
    placeholder,
    placeholderSrc,
    scrollPosition,
    threshold,
    useIntersectionObserver,
    visibleByDefault,
    delayMethod,
    beforeLoad,
    ...imgProps
  } = props;

  const needWrapper = !!placeholderSrc && !visibleByDefault;

  const onImageLoad = (): ReactEventHandler<HTMLImageElement> => {
    if (loaded) {
      return (e) => {};
    }

    return (e: SyntheticEvent<HTMLImageElement, Event>) => {
      if (props.onLoad) props.onLoad(e);

      setLoaded(true);
    };
  };

  const getImg = () => {
    return (
      <img
        {...imgProps}
        alt={imgProps.alt || "lazy-img"}
        onLoad={onImageLoad()}
      />
    );
  };

  const getLazyLoadImage = () => {
    const { className, width, height, style } = props;
    return (
      <LazyLoadComponent
        className={className}
        delayMethod={delayMethod}
        delayTime={delayTime}
        height={height}
        placeholder={placeholder}
        scrollPosition={scrollPosition}
        style={style}
        threshold={threshold}
        useIntersectionObserver={useIntersectionObserver}
        visibleByDefault={visibleByDefault}
        width={width}
        beforeLoad={beforeLoad}
      >
        {getImg()}
      </LazyLoadComponent>
    );
  };

  const getWrappedLazyLoadImage = (lazyLoadImage: ReactElement) => {
    const { width, height } = props;
    const loadedClassName = loaded ? "lazy-load-image-loaded" : "";
    const wrapperBackground =
      loaded || !placeholderSrc
        ? {}
        : {
            backgroundImage: `url(${placeholderSrc})`,
            backgroundSize: "100% 100%",
          };
    const classes = classNames(
      "lazy-load-image-background",
      effect,
      wrapperClassName,
      loadedClassName
    );

    const wrapperStyle: CSSProperties = {
      ...wrapperBackground,
      color: "transparent",
      display: "inline-block",
      verticalAlign: "middle",
    };
    if (typeof width !== "undefined") {
      wrapperStyle.width = width;
    }
    if (typeof height !== "undefined") {
      wrapperStyle.height = height;
    }
    return (
      <span className={classes} style={wrapperStyle} {...wrapperProps}>
        {lazyLoadImage}
      </span>
    );
  };

  if (!needWrapper && !wrapperClassName && !wrapperProps) {
    return getLazyLoadImage();
  }
  return getWrappedLazyLoadImage(getLazyLoadImage());
};

LazyLoadImage.defaultProps = {
  delayMethod: "throttle",
  threshold: 100,
  useIntersectionObserver: true,
  visibleByDefault: false,
};

export default LazyLoadImage;
