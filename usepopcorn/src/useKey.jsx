import { useEffect } from "react";

export function useKey(Key, action) {
  useEffect(() => {
    const callback = (e) => {
      if (e.code.toLowerCase() === Key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, Key]);
}
