import { useEffect, useState } from "react";

/**
 * useMousePosition
 * Provides a custom hook for tracking the mouse position.
 * @example
 * const { x, y } = useMousePosition();
 * @returns Object with x and y coordinates
 * x: X coordinate of mouse
 * y: Y coordinate of mouse
 */
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};
