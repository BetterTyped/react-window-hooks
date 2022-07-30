import { useRef } from "react";
import { useDidUpdate, useWillUnmount } from "@better-typed/react-lifecycle-hooks";

import { getIsClient } from "utils";

type EventHandler<T extends Event = Event> = (e: T) => void;

type WindowEventHook = {
  <K extends keyof WindowEventMap>(
    eventName: K,
    handler: EventHandler<WindowEventMap[K]>,
    options?: boolean | (AddEventListenerOptions & { disable?: boolean }),
  ): void;
};

export const useWindowEvent: WindowEventHook = (eventName, handler, options) => {
  const didUnmount = useRef(false);
  useWillUnmount(() => (didUnmount.current = true));

  const isClient = getIsClient();

  useDidUpdate(
    () => {
      const { disable = false, ...windowOptions } = typeof options === "object" ? options : {};
      if (!isClient || disable) return;

      window.addEventListener(eventName, handler, windowOptions);
      return () => window.removeEventListener(eventName, handler, windowOptions);
    },
    [eventName, options],
    true,
  );
};

export default useWindowEvent;
