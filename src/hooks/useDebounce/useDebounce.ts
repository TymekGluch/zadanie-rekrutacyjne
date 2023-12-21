import React from 'react';

const useDebounce = <T,>(callback: (value: T) => void, delay: number) => {
  const debouncedCallback = React.useCallback(
    (...args: unknown[]) => {
      const handler = setTimeout(() => {
        callback(...(args as [T]));
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [callback, delay]
  );

  return debouncedCallback;
};

export { useDebounce };