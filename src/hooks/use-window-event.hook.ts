import { useRef } from "react";
import { useDidUpdate, useWillUnmount } from "@better-typed/react-lifecycle-hooks";

import { getIsClient } from "utils";

type EventHandler<T extends Event = Event> = (e: T) => void;

type WindowEventHook = {
  <K extends keyof WindowEventMap>(
    value: K | [K, AddEventListenerOptions],
    handler: EventHandler<WindowEventMap[K]>,
    dependencies?: any[],
  ): void;
};

const unpackValue = <K extends keyof WindowEventMap>(
  value: K | [K, AddEventListenerOptions],
): [K, AddEventListenerOptions] => {
  if (typeof value === "string") {
    return [value, {}];
  }
  return value;
};

export const useWindowEvent: WindowEventHook = (value, handler, dependencies = []) => {
  const didUnmount = useRef(false);
  useWillUnmount(() => (didUnmount.current = true));

  useDidUpdate(
    () => {
      const isClient = getIsClient();
      if (!isClient) return;

      const [name, options] = unpackValue(value);
      const windowOptions = typeof options === "object" ? options : {};

      window.addEventListener(name, handler, windowOptions);
      return () => window.removeEventListener(name, handler, windowOptions);
    },
    [JSON.stringify(value), ...dependencies],
    true,
  );
};

export default useWindowEvent;
