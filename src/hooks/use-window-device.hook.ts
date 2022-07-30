import { useRef } from "react";
import MobileDetect from "mobile-detect";

export const useWindowDevice = () => {
  const md = useRef(new MobileDetect(navigator.userAgent)).current;
  return md;
};

export default useWindowDevice;
