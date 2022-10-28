import { NavLink } from 'react-router-dom';

import styles from './NavigationHeader.module.scss';

function NavigationHeader() {
  return (
    <nav>
      <ul className={styles.listNavigation}>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLink} to="/">Home Page</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLink} to="/shop">Shop</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeader;
