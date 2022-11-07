import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.target.tagName === 'A' || event.target.tagName === 'P' || event.target.dataset.bascetIcon === 'bascet-icon') {
        document.removeEventListener('click', listener);
        handler(event);
      }

      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      if (event.target.type === 'button' || event.target.tagName === 'SPAN') {
        return;
      }

      handler();
    };

    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
