import { Meta, StoryFn } from "@storybook/react";
import LazyLoadImage, { LazyLoadImageProps } from "./lazyLoadImage";
import { trackWindowScroll } from "./hoc/trackWindowScroll";
import "./lazyLoadImage.stories.scss";
import { PlaceholderWithTrackingProps } from "./placeholderWithTracking";

const meta = {
  title: "LazyLoadImage",
  component: LazyLoadImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof LazyLoadImage>;

export default meta;

const images = [
  {
    src: "images/01.jpg",
  },
  {
    src: "images/02.jpg",
  },
  {
    src: "images/03.jpg",
  },
  {
    src: "images/04.jpg",
  },
  {
    src: "images/05.jpg",
  },
  {
    src: "images/06.jpg",
  },
  {
    src: "images/07.jpg",
  },
  {
    src: "images/08.jpg",
  },
  {
    src: "images/09.jpg",
  },
  {
    src: "images/10.jpg",
  },
  {
    src: "images/11.jpg",
  },
  {
    src: "images/12.jpg",
  },
  {
    src: "images/13.jpg",
  },
  {
    src: "images/14.jpg",
  },
  {
    src: "images/15.jpg",
  },
  {
    src: "images/16.jpg",
  },
];

const LazyImageFC: React.FC<PlaceholderWithTrackingProps> = (props) => {
  const { scrollPosition } = props;
  return (
    <div className="img-list">
      {images.map((image) => (
        <LazyLoadImage
          key={image.src}
          src={image.src}
          width={400}
          height={220}
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          scrollPosition={scrollPosition}
          wrapperClassName="img-wrapper"
        />
      ))}
    </div>
  );
};

export const NoObserverLazyImage: StoryFn<LazyLoadImageProps> = (props) => {
  const Tracked = trackWindowScroll(LazyImageFC);
  return <Tracked {...props} />;
};

NoObserverLazyImage.args = {
  useIntersectionObserver: false,
};

NoObserverLazyImage.parameters = {
  transformSource(src: string) {
    console.log(src);
  },
};

export const ObserverLazyImage: StoryFn<LazyLoadImageProps> = (props) => {
  const Tracked = trackWindowScroll(LazyImageFC);
  return <Tracked {...props} />;
};

const HorizontalLazyImageFC: React.FC<PlaceholderWithTrackingProps> = (
  props
) => {
  const { scrollPosition } = props;
  return (
    <div className="img-list horizontal">
      {images.map((image) => (
        <LazyLoadImage
          key={image.src}
          src={image.src}
          width={400}
          height={220}
          wrapperClassName="img-wrapper"
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          scrollPosition={scrollPosition}
        />
      ))}
    </div>
  );
};

export const HorizontalLazyImage: StoryFn<LazyLoadImageProps> = (props) => {
  const Tracked = trackWindowScroll(HorizontalLazyImageFC);
  return <Tracked {...props} />;
};
