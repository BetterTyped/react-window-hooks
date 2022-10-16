import { useState } from "react";

import { isBrowser } from "utils";
import { useDocumentEvent } from "./use-document-event.hook";
import { useWindowEvent } from "./use-window-event.hook";

export type FocusType = boolean;

const getState = () => (isBrowser ? document.visibilityState === "visible" : false);

export const useWindowFocus = (): FocusType => {
  const [focus, setFocus] = useState(getState);

  useDocumentEvent("visibilitychange", () => setFocus(true));
  useWindowEvent("focus", () => setFocus(true));
  useWindowEvent("blur", () => setFocus(false));

  return focus;
};
