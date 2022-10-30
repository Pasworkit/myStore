import { NavLink } from 'react-router-dom';
import styles from './NavigationHeaderFilter.module.scss';

function NavigationHeaderFilter() {
  return (
    <nav>
      <ul className={styles.listNavigation}>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/shop">Hanging</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/shop">Flowering</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/shop">Ferns & Palms</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/shop">Succulents & Cacti</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeaderFilter;
