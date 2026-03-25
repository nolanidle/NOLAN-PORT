"use client";

import { useEffect } from 'react';

export function useKeyboardShortcut(key: string, ctrlKey: boolean, callback: () => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Often the grave accent key is interpreted as Backquote or '`'
      if ((event.key === key || event.code === key) && event.ctrlKey === ctrlKey) {
        event.preventDefault();
        callback();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, ctrlKey, callback]);
}
