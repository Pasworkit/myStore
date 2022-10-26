import { NavLink } from 'react-router-dom';
// import Navigation from '../Navigation/Navigation';
import logoHeader from '../../img/logo/logo-header-mb.png';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <NavLink to="/">
          <img src={logoHeader} alt="logo" />
        </NavLink>
      </div>

      <div className={styles.burgerMenu}>
        <button type="button" className={styles.burgerMenuBtn}>
          <span className={styles.menuSpanBurger} />
        </button>

      </div>
      {/* <Navigation /> */}
    </header>

  );
}

export default Header;
