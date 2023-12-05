import { useEffect, useState } from "react";

const validateKey = (key: string): void => {
  if (!key) {
    throw new Error("Key is required");
  }
};

const handleLocalStorageError = (error: unknown, message: string) => {
  throw new Error(`${message}: ${error instanceof Error ? error.message : String(error)}`);
};

/**
 * useLocalStorage
 * Provides a custom hook for accessing localStorage.
 * @example
 * const [list, get, set, remove] = useLocalStorage();
 * list(); // Returns all keys in localStorage
 * get<string>("key1"); // Retrieves value for 'key1'
 * set<string>("key3", "value3"); // Sets 'key3' to 'value3'
 * remove("key1"); // Removes 'key1' from localStorage
 * @returns Array of functions [list, get, set, remove]
 */
export const useLocalStorage = () => {
  const [, triggerStorageChange] = useState(0);

  useEffect(() => {
    const handleStorageChange = () => triggerStorageChange((prev) => prev + 1);
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const list = (): string[] => {
    try {
      return Object.keys(window.localStorage);
    } catch (error) {
      handleLocalStorageError(error, "Unable to get keys from localStorage");
      return [];
    }
  };

  const get = <T>(key: string): T | undefined => {
    validateKey(key);
    try {
      const value = window.localStorage.getItem(key);
      if (value === null) {
        throw new Error(`Item not found for key: ${key}`);
      }
      return JSON.parse(value) as T;
    } catch (error) {
      handleLocalStorageError(error, "Unable to get item from localStorage");
      return undefined;
    }
  };

  const set = <T>(key: string, value: T | null): T | undefined => {
    validateKey(key);
    if (value === null) {
      throw new Error("Value is required");
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      triggerStorageChange((prev) => prev + 1);
      return value;
    } catch (error) {
      handleLocalStorageError(error, "Unable to set item in localStorage");
      return undefined;
    }
  };

  const remove = (key: string): void => {
    validateKey(key);
    try {
      window.localStorage.removeItem(key);
      triggerStorageChange((prev) => prev + 1);
    } catch (error) {
      handleLocalStorageError(error, "Unable to remove item from localStorage");
    }
  };

  return [list, get, set, remove] as const;
};
