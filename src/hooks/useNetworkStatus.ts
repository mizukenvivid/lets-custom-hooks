import { useEffect, useState } from "react";

/**
 * useNetworkStatus
 * Provides a custom hook for tracking the network status.
 * @example
 * const status = useNetworkStatus();
 * @returns Boolean indicating whether the user is online
 */
export const useNetworkStatus = () => {
  const [status, setStatus] = useState(typeof window !== "undefined" ? navigator.onLine : false);

  const handleStatusChange = () => {
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, []);

  return status;
};
