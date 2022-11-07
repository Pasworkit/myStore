import { NavLink } from 'react-router-dom';

import styles from './NavigationFooterCategories.module.scss';

function NavigationFooterCategories() {
  return (
    <nav>
      <ul className={styles.listNavigationFooterCategories}>
        <li className={styles.itemNavigationFooterCategories}>
          <NavLink className={styles.itemNavigationFooterCategoriesLink} to="/hanging">Hanging</NavLink>
        </li>
        <li className={styles.itemNavigationFooterCategories}>
          <NavLink className={styles.itemNavigationFooterCategoriesLink} to="/flowering">Flowering</NavLink>
        </li>
        <li className={styles.itemNavigationFooterCategories}>
          <NavLink className={styles.itemNavigationFooterCategoriesLink} to="/ferns-and-palms">Ferns & Palms</NavLink>
        </li>
        <li className={styles.itemNavigationFooterCategories}>
          <NavLink className={styles.itemNavigationFooterCategoriesLink} to="/succulents-and-cacti">Succulents & Cacti</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationFooterCategories;
