import { useEffect, useState } from "react";

/**
 * useWindowSize
 * Provides a custom hook for tracking the window size.
 * @example
 * const { height, width } = useWindowSize();
 * @returns Object with height and width
 */
export const useWindowSize = () => {
  const [size, setSize] = useState({ height: 0, width: 0 });

  const handleResize = () => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (typeof window === "undefined") {
    return { height: 0, width: 0 };
  }

  return size;
};
