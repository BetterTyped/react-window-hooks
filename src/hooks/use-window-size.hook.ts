import { useState } from "react";

import { getIsClient } from "utils";
import { useWindowEvent } from "./use-window-event.hook";

export type WindowWidthType = number;
export type WindowHeightType = number;

export type UseWindowSizeType = [WindowWidthType, WindowHeightType];

export const useWindowSize = (onResize?: (size: UseWindowSizeType) => void) => {
  const isClient = getIsClient();

  const getSize = (): UseWindowSizeType => [
    isClient ? window.innerWidth : 0,
    isClient ? window.innerHeight : 0,
  ];

  const [windowSize, setWindowSize] = useState<UseWindowSizeType>(getSize);

  const handleResize = () => {
    setWindowSize(getSize());
    onResize?.(getSize());
  };

  useWindowEvent("resize", handleResize);

  return windowSize;
};
