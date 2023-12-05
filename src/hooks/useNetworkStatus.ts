import { useEffect, useState } from "react";

/**
 * useNetworkStatus
 * Provides a custom hook for tracking the network status.
 * @example
 * const isOnline = useNetworkStatus();
 * @returns Boolean indicating whether the user is online
 */
export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(
    typeof window !== "undefined" ? navigator.onLine : false,
  );

  const handleStatusChange = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []);

  return isOnline;
};
