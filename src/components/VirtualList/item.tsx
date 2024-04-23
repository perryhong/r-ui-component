import React, { ReactElement, useCallback } from "react";

export interface ItemProps {
  children: ReactElement;
  setRef: (element: HTMLElement) => void;
}

export const Item: React.FC<ItemProps> = ({ setRef, children }) => {
  const refFunc = useCallback((node: HTMLElement) => {
    setRef(node);
  }, []);

  return React.cloneElement(children, {
    ref: refFunc,
  });
};
