import { useState } from "react";

import { isBrowser } from "utils";
import { useWindowEvent } from "./use-window-event.hook";

export type ScrollXType = number;
export type ScrollYType = number;
export type UseWindowScrollType = [ScrollXType, ScrollYType];

const getPosition = () => [isBrowser ? window.screenX : 0, isBrowser ? window.scrollY : 0];

export const useWindowScroll = () => {
  const [values, setValues] = useState(getPosition);

  useWindowEvent(["scroll", { capture: false, passive: true }], () => {
    setValues(getPosition);
  });

  return values;
};
