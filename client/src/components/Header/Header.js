import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

import useOnClickOutside from '../../hooks/onClickOutside';

import logoHeaderMb from '../../img/logo/logo-header-mb.png';
import logoHeader from '../../img/logo/logo-header.png';
import NavigationHeader from '../Navigation/NavigationHeader';

import styles from './Header.module.scss';
import './Transition/TransitionHeaderMenu.css';
import NavigationHeaderFilter from '../Navigation/NavigationHeaderFilter';
import HeaderBascetIcon from '../HeaderIcon/HeaderBascetIcon/HeaderBascetIcon';
import HeaderPhoneIcon from '../HeaderIcon/HeaderPhoneIcon/HeaderPhoneIcon';
import HeaderFavoritesIcon from '../HeaderIcon/HeaderFavoritesIcon/HeaderFavoritesIcon';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import HeaderRegister from '../HeaderRegister/HeaderRegister';
import LightTooltip from '../LightTooltip/LightTooltip';
import HeaderSignUpIconMob from '../HeaderIcon/HeaderSignUpIconMob/HeaderSignUpIconMob';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const nodeRef = useRef(null);

  const hendleIsOpenMenu = () => {
    setIsOpenMenu((currentIsOpen) => !currentIsOpen);
  };

  useOnClickOutside(nodeRef, () => {
    if (isOpenMenu) {
      hendleIsOpenMenu();
    }
  });

  return (
    <header className={styles.header}>
      <div className={styles.containerMobile}>
        <div>
          <NavLink to="/">
            <img src={logoHeaderMb} alt="logo" />
          </NavLink>
        </div>

        <div className={styles.burgerMenu}>
          <button data-open-burger-btn="open-burger-btn" type="button" className={styles.burgerMenuBtn} onClick={hendleIsOpenMenu}>
            <span data-open-burger-menu="open-burger-menu" className={styles.menuSpanBurger} />
            <span data-open-burger-menu="open-burger-menu" className={styles.menuSpanBurger} />
            <span data-open-burger-menu="open-burger-menu" className={styles.menuSpanBurger} />
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
              <NavLink className={styles.basketLink} to="/cart">
                <HeaderBascetIcon />
                <p data-basket-text="basket-text" className={styles.basketLinkText}>Basket</p>
              </NavLink>
              <NavLink className={styles.FavoritesLink} to="/favorites">
                <HeaderFavoritesIcon />
                <p data-favorites-text="favorites-text" className={styles.basketLinkText}>Favorit</p>
              </NavLink>

              <NavLink className={styles.FavoritesLink} to="/login">
                <HeaderLogin />
                <p data-sign-in="sign-in" className={styles.basketLinkText}>Sign in</p>
              </NavLink>

              <NavLink data-sign-up-link="sign-up-link" className={styles.FavoritesLink} to="/sign-up">
                <HeaderSignUpIconMob />
                <p data-sign-up-text="sign-up-text" className={styles.basketLinkText}>Sign up</p>
              </NavLink>

            </div>

            <div className={styles.phoneWrapper}>
              <a className={styles.phoneNumber} data-phone-number="phone-number" href="tel:+ 375 (29) 918-28-88">
                <HeaderPhoneIcon />
                <span className={styles.phoneNumberSpan}>+ 375 (29) 918-28-88</span>
              </a>
            </div>

          </div>
        </CSSTransition>
      )}

      <div className={styles.container}>
        <NavLink to="/">
          <img src={logoHeader} alt="icon" />
        </NavLink>

        <div>
          <div className={styles.createLine}>
            <div className={styles.navigationHeaderDesctopWrapper}>
              <NavigationHeader />
              <a className={styles.phoneNumber} href="tel:+ 375 (29) 918-28-88">
                <span className={styles.phoneNumberSpan}>+ 375 (29) 918-28-88</span>
              </a>
              <div className={styles.wrapperHeaderIconDesc}>
                <NavLink className={styles.favoritesDescLink} to="/favorites"><HeaderFavoritesIcon /></NavLink>
                <div className={styles.basketDescLinkLine}>
                  <NavLink className={styles.basketDescLink} to="/cart"><HeaderBascetIcon /></NavLink>
                </div>
                <LightTooltip title="Sign in">
                  <NavLink className={styles.basketDescLink} to="/login"><HeaderLogin /></NavLink>
                </LightTooltip>
                <LightTooltip title="Sign up">
                  <NavLink className={styles.basketDescLink} to="/sign-up"><HeaderRegister /></NavLink>
                </LightTooltip>

              </div>
            </div>
          </div>
          <div className={styles.navigationHeaderFilterDesctopWrapper}>
            <NavigationHeaderFilter />
          </div>
        </div>
      </div>

    </header>

  );
}

export default Header;
