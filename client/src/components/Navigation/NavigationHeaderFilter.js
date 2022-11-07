import { NavLink } from 'react-router-dom';
import styles from './NavigationHeaderFilter.module.scss';

function NavigationHeaderFilter() {
  return (
    <nav>
      <ul className={styles.listNavigation}>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/hanging">Hanging</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/flowering">Flowering</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/ferns-and-palms">Ferns & Palms</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} to="/succulents-and-cacti">Succulents & Cacti</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeaderFilter;
