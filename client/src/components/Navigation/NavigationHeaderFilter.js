import { NavLink } from 'react-router-dom';
import styles from './NavigationHeaderFilter.module.scss';

function NavigationHeaderFilter() {
  return (
    <nav>
      <ul className={styles.listNavigation}>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/shop">Houseplants</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/shop">Florariums</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/shop">Dried flowers</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/shop">Planters and pots</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeaderFilter;
