import { NavLink } from 'react-router-dom';
import styles from './NavigationHeaderFilter.module.scss';

function NavigationHeaderFilter() {
  return (
    <nav>
      <ul className={styles.listNavigation}>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} data-hanging-page-link="hanging-page-link" to="/hanging">Hanging</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} data-flowering-page-link="flowering-page-link" to="/flowering">Flowering</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} data-fernsandpalms-page-link="fernsAndPalms-page-link" to="/ferns-and-palms">Ferns & Palms</NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink className={styles.itemNavigationLinkFilter} data-succulentscacti-page-link="succulentsCacti-page-link" to="/succulents-and-cacti">Succulents & Cacti</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHeaderFilter;
