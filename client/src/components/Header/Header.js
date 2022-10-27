import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

import logoHeaderMb from '../../img/logo/logo-header-mb.png';
import logoHeader from '../../img/logo/logo-header.png';
import NavigationHeader from '../Navigation/NavigationHeader';

import styles from './Header.module.scss';
import './Transition/TransitionHeaderMenu.css';
import NavigationHeaderFilter from '../Navigation/NavigationHeaderFilter';
import HeaderBascetIcon from '../HeaderBascetIcon/HeaderBascetIcon';
import HeaderPhoneIcon from '../HeaderPhoneIcon/HeaderPhoneIcon';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const nodeRef = useRef(null);

  const hendleIsOpenMenu = () => {
    setIsOpenMenu((currentIsOpen) => !currentIsOpen);
  };

  return (
    <header>
      <div className={styles.containerMobile}>
        <div>
          <NavLink to="/">
            <img src={logoHeaderMb} alt="logo" />
          </NavLink>
        </div>

        <div className={styles.burgerMenu}>
          <button type="button" className={styles.burgerMenuBtn} onClick={hendleIsOpenMenu}>
            <span className={styles.menuSpanBurger} />
            <span className={styles.menuSpanBurger} />
            <span className={styles.menuSpanBurger} />
          </button>
        </div>
      </div>
      {isOpenMenu && (
        <CSSTransition
          in
          appear
          nodeRef={nodeRef}
          timeout={300}
          classNames="show-menu"
          unmountOnExit
        >
          <div ref={nodeRef} className={styles.menuMobileContainer}>
            <div className={styles.btnWrapper}>
              <button type="button" className={styles.burgerMenuBtn} onClick={hendleIsOpenMenu}>
                <span className={styles.closeBtnMenu} />
                <span className={styles.closeBtnMenu} />
              </button>
            </div>
            <div className={styles.listNavigationWrapper}>
              <NavigationHeader />
            </div>

            <div className={styles.listNavigationFilterWrapper}>
              <NavigationHeaderFilter />
            </div>

            <div className={styles.basketWrapper}>
              <NavLink className={styles.basketLink} to="/Basket">
                <HeaderBascetIcon />
                <p className={styles.basketLinkText}>Basket</p>
              </NavLink>
            </div>

            <div className={styles.phoneWrapper}>
              <a className={styles.phoneNumber} href="tel:+ 375 (29) 918-28-88">
                <HeaderPhoneIcon />
                <span className={styles.phoneNumberSpan}>+ 375 (29) 918-28-88</span>
              </a>
            </div>

          </div>
        </CSSTransition>
      )}

      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <img src={logoHeader} alt="icon" />
        </div>

        <div>
          <div><NavigationHeader /></div>
          <div><NavigationHeaderFilter /></div>
        </div>
      </div>

    </header>

  );
}

export default Header;
