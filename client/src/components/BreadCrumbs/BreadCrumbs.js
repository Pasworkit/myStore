import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';

function BreadCrumbs() {
  return (
    <ul className={styles.breadCrumbs}>
      <li className={styles.midLink}>
        <Link to="/">
          Home
        </Link>
        <span className={styles.divider}>/</span>
      </li>
      <li className={styles.midLink}>
        <Link to="/shop">
          Category
        </Link>
        <span className={styles.divider}>/</span>
      </li>
      <li className={styles.endLink}>
        <span>
          Product Name here
        </span>
      </li>
    </ul>
  );
}

export default BreadCrumbs;
