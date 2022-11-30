import { NavLink } from 'react-router-dom';

import styles from './NavigationHeader.module.scss';

function NavigationHeader() {
  return (
    <nav>
      <ul className={styles.listNavigation}>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLink} data-home-page-link="home-page-link" to="/">Home Page</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLink} data-catalog-page-link="catalog-page-link" to="/catalog">Catalog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeader;
