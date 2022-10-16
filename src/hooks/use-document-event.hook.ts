/* eslint-disable react-hooks/exhaustive-deps */

import { isBrowser } from "utils";
import { useIsomorphicEffect } from "./use-isomorphic-effect.hook";

type EventHandler<T extends Event = Event> = (e: T) => void;

type DocumentEventHook = {
  <K extends keyof DocumentEventMap>(
    event: K | [K, AddEventListenerOptions],
    handler: EventHandler<DocumentEventMap[K]>,
    dependencies?: any[],
  ): void;
};

const unpackValue = <K extends keyof DocumentEventMap>(
  event: K | [K, AddEventListenerOptions],
): [K, AddEventListenerOptions] => {
  if (typeof event === "string") {
    return [event, {}];
  }
  return event;
};

export const useDocumentEvent: DocumentEventHook = (event, handler, dependencies = []) => {
  useIsomorphicEffect(() => {
    if (!isBrowser) return;

    const [name, options] = unpackValue(event);
    const documentOptions = typeof options === "object" ? options : {};

    document.addEventListener(name, handler, documentOptions);
    return () => {
      document.removeEventListener(name, handler, documentOptions);
    };
  }, [JSON.stringify(event), ...dependencies]);
};
