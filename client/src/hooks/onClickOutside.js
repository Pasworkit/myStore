import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.target.dataset.openBurgerBtn === 'open-burger-btn' || event.target.dataset.openBurgerMenu === 'open-burger-menu' || event.target.dataset.phoneNumber === 'phone-number') {
        return;
      }

      if (event.target.tagName === 'A' || event.target.dataset.basketText === 'basket-text' || event.target.dataset.bascetIcon === 'bascet-icon' || event.target.dataset.favoritesIcon === 'favorites-icon' || event.target.dataset.favoritesText === 'favorites-text') {
        document.removeEventListener('click', listener);
        handler(event);
      }

      if (!ref.current || ref.current.contains(event.target)) {
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
