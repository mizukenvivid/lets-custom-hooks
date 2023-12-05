import { useCallback, useEffect, useRef } from "react";

/**
 * useInterval
 * Provides a custom hook for calling a function at a set interval.
 * @example
 * const intervalFunc = useInterval(func, 1000);
 * intervalFunc(); // Calls `func` every 1000ms
 * @param func Function to call
 * @param delay Delay in milliseconds
 * @returns Interval function
 */
export const useInterval = <T extends (...args: any[]) => any>(func: T, delay: number) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const intervalFunc = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => {
      func();
    }, delay);
  }, [func, delay]);

  useEffect(() => {
    intervalFunc();
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [intervalFunc]);

  return intervalFunc;
};
