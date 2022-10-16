/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect } from "react";

import { isBrowser } from "utils";

const effect = isBrowser ? useEffect : useLayoutEffect;

export const useIsomorphicEffect = effect;
