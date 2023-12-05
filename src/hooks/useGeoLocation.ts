import { useState, useEffect } from "react";

interface LocationError {
  code: number;
  message: string;
}

interface LocationState {
  coordinates?: {
    lat: number;
    lng: number;
  };
  error?: LocationError;
  loaded: boolean;
}

/**
 * useGeoLocation
 * Provides a custom hook for tracking the user's location.
 * @example
 * const { coordinates, error, loaded } = useGeoLocation();
 * @returns Object with coordinates, error, and loaded
 */
const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationState>({
    loaded: false,
  });

  const onSuccess = (location: GeolocationPosition) => {
    setLocation({
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
      loaded: true,
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setLocation({
      error: {
        code: error.code,
        message: error.message,
      },
      loaded: true,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      } as GeolocationPositionError);
      return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
