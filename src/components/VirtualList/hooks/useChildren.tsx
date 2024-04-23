import { ReactElement } from "react";
import { Item } from "../item";
import { RenderFunc, SharedConfig } from "../interface";

export default function useChildren<T>(data: {
  list: T[];
  startIndex: number;
  endIndex: number;
  scrollWidth?: number;
  setNodeRef: (item: T, element: HTMLElement) => void;
  renderFunc: RenderFunc<T>;
  sharedConf: SharedConfig<T>;
}) {
  const {
    list,
    startIndex,
    endIndex,
    scrollWidth,
    sharedConf,
    setNodeRef,
    renderFunc,
  } = data;
  return list.slice(startIndex, endIndex + 1).map((item, index) => {
    const eleIdx = startIndex + index;
    const node = renderFunc(item, eleIdx, {
      ...(typeof scrollWidth !== "undefined"
        ? {
            style: {
              width: scrollWidth,
            },
          }
        : {}),
    }) as ReactElement;

    const key = sharedConf.getKey(item);
    return (
      <Item key={key} setRef={(ele) => setNodeRef(item, ele)}>
        {node}
      </Item>
    );
  });
}
