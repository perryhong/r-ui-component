import { Meta, StoryFn } from "@storybook/react";
import VirtualList, { VirtualListProps } from "./virtualList";
import { useEffect, useState } from "react";

const meta = {
  title: "VirtualList",
  component: VirtualList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VirtualList>;

export default meta;

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";

export const Default: StoryFn<VirtualListProps<UserItem>> = (props) => {
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (
      Math.abs(
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop - props.height!
      ) <= 1
    ) {
      appendData();
    }
  };

  return (
    <div style={{ width: 600 }}>
      <VirtualList {...props} dataSource={data} onScroll={onScroll}>
        {(item) => (
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flex: 1 }}>
              <div>
                <img src={item.picture.large} alt="" />
              </div>
              <div>
                <span>{item.name.last}</span>
                <span>{item.email}</span>
              </div>
            </div>
            <div>content</div>
          </div>
        )}
      </VirtualList>
    </div>
  );
};

Default.args = {
  itemKey: "id",
  height: 500,
  style: { height: 500 },
};
