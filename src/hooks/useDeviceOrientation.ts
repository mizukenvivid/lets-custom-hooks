import { useEffect, useState } from "react";

/**
 * useDeviceOrientation
 * Provides a custom hook for tracking the device orientation.
 * @example
 * const { absolute, alpha, beta, gamma } = useDeviceOrientation();
 * @returns Object with absolute, alpha, beta, and gamma
 */
export const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({
    absolute: false,
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  const handleOrientation = (e: DeviceOrientationEvent) => {
    setOrientation({
      absolute: e.absolute,
      alpha: e.alpha || 0,
      beta: e.beta || 0,
      gamma: e.gamma || 0,
    });
  };

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    } else {
      console.warn("DeviceOrientationEvent not supported");
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return orientation;
};
