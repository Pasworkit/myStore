import { NavLink } from 'react-router-dom';

import styles from './NavigationFooterCategories.module.scss';

function NavigationFooterCategories() {
  return (
    <nav>
      <ul className={styles.listNavigationFooterCategories}>
        <li className={styles.itemNavigationFooterCategories}>
          <NavLink className={styles.itemNavigationFooterCategoriesLink} to="/shop">Houseplants</NavLink>
        </li>
        <li className={styles.itemNavigationFooterCategories}>
          <NavLink className={styles.itemNavigationFooterCategoriesLink} to="/shop">Florariums</NavLink>
        </li>
        <li className={styles.itemNavigationFooterCategories}>
          <NavLink className={styles.itemNavigationFooterCategoriesLink} to="/shop">Dried flowers</NavLink>
        </li>
        <li className={styles.itemNavigationFooterCategories}>
          <NavLink className={styles.itemNavigationFooterCategoriesLink} to="/shop">Planters and pots</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationFooterCategories;
