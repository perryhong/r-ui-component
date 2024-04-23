import { useEffect, useRef, useState } from "react";
import { GetKey } from "../interface";
import CacheMap from "../utils";
import raf from "rc-util/lib/raf";
import { findDOMNode } from "react-dom";

export default function useHeights<T>(
  getKey: GetKey<T>
): [
  setInstanceRef: (item: T, instance: HTMLElement) => void,
  collectHeight: () => void,
  cacheMap: CacheMap,
  updatedMask: number
] {
  const [updatedMark, setUpdatedMark] = useState(0);
  const instanceRef = useRef(new Map<React.Key, HTMLElement>());
  const heightsRef = useRef(new CacheMap());
  const collectRafRef = useRef<number>(0);

  function cancelRaf() {
    raf.cancel(collectRafRef.current);
  }

  function setInstanceRef(item: T, instance: HTMLElement) {
    const key = getKey(item);
    // const origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
  }

  function collectHeight() {
    cancelRaf();
    const doCollect = () => {
      instanceRef.current.forEach((element, key) => {
        if (element && element.offsetParent) {
          const htmlElement = findDOMNode(element) as HTMLElement;
          const { offsetHeight } = htmlElement;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });

      setUpdatedMark((c) => c + 1);
    };

    collectRafRef.current = raf(doCollect);
  }

  useEffect(() => {
    return cancelRaf;
  }, []);

  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
