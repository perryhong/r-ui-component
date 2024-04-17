import { Meta, ReactRenderer } from "@storybook/react";
import { ArgsStoryFn } from "@storybook/types";
import Icon from "./icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default {
  component: Icon,
  title: "Icons",
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

const icons: IconProp[] = [
  "search",
  "table",
  "eye",
  "copy",
  "file",
  "arrow-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "file-upload",
  "upload",
  "edit",
  "user",
  "user-group",
  "history",
  "add",
  "close",
  "clock",
  "cloud",
  "delete-left",
  "trash",
  "flag",
  "info",
  "info-circle",
  "link",
  "play",
  "play-circle",
  "sync",
  "star",
  "share",
];

export const Icons: ArgsStoryFn<ReactRenderer> = () => (
  <div
    style={{
      display: "grid",
      justifyContent: "space-evenly",
      gridTemplateColumns: "repeat(auto-fill, minmax(8rem, 1fr))",
      gridAutoRows: "1fr",
      rowGap: "1rem",
      columnGap: "1rem",
    }}
  >
    {icons.map((item, index) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.625rem",
          textAlign: "center",
        }}
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
      >
        <div
          style={{
            padding: "2rem",
            border: "1px dashed #6c757d",
            borderRadius: "0.2rem",
            width: "100%",
          }}
        >
          <Icon icon={item} size="sm" />
        </div>
      </div>
    ))}
  </div>
);

export const ThemeIcons: ArgsStoryFn<ReactRenderer> = () => (
  <div
    style={{
      display: "grid",
      justifyContent: "space-evenly",
      gridTemplateColumns: "repeat(auto-fill, minmax(8rem, 1fr))",
      gridAutoRows: "1fr",
      rowGap: "1rem",
      columnGap: "1rem",
    }}
  >
    {icons.map((item, index) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.625rem",
          textAlign: "center",
        }}
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
      >
        <div
          style={{
            padding: "2rem",
            border: "1px dashed #6c757d",
            borderRadius: "0.2rem",
            width: "100%",
          }}
        >
          <Icon icon={item} size="sm" theme="primary" />
        </div>
      </div>
    ))}
  </div>
);
