import { useEffect, useState, useCallback } from "react";

/**
 * useDebounce
 * Provides a custom hook for debouncing a function.
 * @example
 * const debouncedFunc = useDebounce(func, 1000);
 * debouncedFunc(); // Calls `func` after 1000ms
 * @param func Function to debounce
 * @param delay Delay in milliseconds
 * @returns Debounced function
 */
export const useDebounce = <T extends (...args: any[]) => any>(func: T, delay: number) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const debouncedFunc = useCallback(
    (...args: Parameters<T>) => {
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => {
        func(...args);
      }, delay);
      setTimer(newTimer);
    },
    // This dependency array only includes `func` and `delay`. `timer` is an
    // internal state and should not trigger a redefinition of this callback.
    // Changes to `timer` are handled by `useEffect`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [func, delay],
  );

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return debouncedFunc;
};
