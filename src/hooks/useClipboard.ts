import { useCallback, useState } from "react";

/**
 * useClipboard
 * Provides a custom hook for copying text to the clipboard.
 * @example
 * const [copied, copy] = useClipboard();
 * copy("Text to copy");
 * @returns Array of [copied, copy]
 * copied: Boolean indicating whether text was copied
 * copy: Function to copy text to clipboard
 */
export const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  }, []);

  return [copied, copy] as const;
};
