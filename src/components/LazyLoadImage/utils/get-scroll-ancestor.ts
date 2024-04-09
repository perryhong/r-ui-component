const getElementOverflowValues = (element: HTMLElement): string => {
  const computedStyle = getComputedStyle(element, null);

  return (
    computedStyle.getPropertyValue("overflow") +
    computedStyle.getPropertyValue("overflow-y") +
    computedStyle.getPropertyValue("overflow-x")
  );
};

const getScrollAncestor = (element: Node | null): HTMLElement | Window => {
  if (!(element instanceof HTMLElement)) {
    return window;
  }

  let parent: Node | null = element;

  while (parent) {
    if (!(parent instanceof HTMLElement)) {
      break;
    }

    if (/(scroll|auto)/.test(getElementOverflowValues(parent))) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return window;
};

export default getScrollAncestor;
