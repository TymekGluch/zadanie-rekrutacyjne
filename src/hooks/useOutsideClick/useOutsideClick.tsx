import React from 'react';

const useOutsideClick = (
  callback: () => void,
  ...refs: React.RefObject<HTMLDivElement>[]
) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = refs.every((ref) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });

      if (isOutside) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback]);

  return refs;
};

export { useOutsideClick };
