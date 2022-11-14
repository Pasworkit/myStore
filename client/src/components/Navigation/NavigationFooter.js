import { NavLink } from 'react-router-dom';

import styles from './NavigationFooter.module.scss';

function NavigationFooter() {
  return (
    <nav>
      <ul className={styles.listNavigationFooter}>
        <li className={styles.itemNavigationFooter}>
          <NavLink className={styles.itemNavigationFooterLink} to="/">Home Page</NavLink>
        </li>
        <li className={styles.itemNavigationFooter}>
          <NavLink className={styles.itemNavigationFooterLink} to="/catalog">Catalog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationFooter;
