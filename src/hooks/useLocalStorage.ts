import { useEffect, useState } from "react";

/**
 * useLocalStorage
 * Provides a custom hook for interacting with localStorage.
 * @example
 * const [list, get, set, remove] = useLocalStorage();
 * list(); // Returns an array of keys
 * get("key"); // Returns the value for "key"
 * set("key", "value"); // Sets "key" to "value"
 * remove("key"); // Removes "key"
 * @returns Array of [list, get, set, remove]
 */
export const useLocalStorage = () => {
  const [, setStorageChange] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleStorageChange = () => setStorageChange((prev) => prev + 1);
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (typeof window === "undefined") {
    return [() => [], () => undefined, () => undefined, () => undefined] as const;
  }

  const validateKey = (key: string) => {
    if (!key) {
      throw new Error("Key is required");
    }
  };

  const handleLocalStorageError = (error: unknown, message: string) => {
    throw new Error(`${message}: ${error instanceof Error ? error.message : String(error)}`);
  };

  const list = (): string[] => {
    try {
      return Object.keys(window.localStorage);
    } catch (error) {
      handleLocalStorageError(error, "Unable to list keys");
      return [];
    }
  };

  const get = <T>(key: string): T | undefined => {
    validateKey(key);
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : undefined;
    } catch (error) {
      handleLocalStorageError(error, "Unable to get item");
      return undefined;
    }
  };

  const set = <T>(key: string, value: T) => {
    validateKey(key);
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStorageChange((prev) => prev + 1);
    } catch (error) {
      handleLocalStorageError(error, "Unable to set item");
    }
  };

  const remove = (key: string) => {
    validateKey(key);
    try {
      window.localStorage.removeItem(key);
      setStorageChange((prev) => prev + 1);
    } catch (error) {
      handleLocalStorageError(error, "Unable to remove item");
    }
  };

  return [list, get, set, remove] as const;
};
