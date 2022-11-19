import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './Breadсrumbs.module.scss';

function Breadcrumbs(props) {
  const { currenProductPage, currenProductCategory, midLinkName } = props;

  return (
    <ul className={styles.breadCrumbs}>
      <li className={styles.midLink}>
        <Link to="/">
          Home
        </Link>
        <span className={styles.divider}>/</span>
      </li>
      <li className={styles.midLink}>
        <Link to={`/${midLinkName.trim().toLowerCase().split('&').join('and')
          .split(' ')
          .join('-')
        }`}
        >
          {currenProductCategory}
        </Link>
        <span className={styles.divider}>/</span>
      </li>
      <li className={styles.endLink}>
        <span>
          {currenProductPage}
        </span>
      </li>
    </ul>
  );
}

Breadcrumbs.propTypes = {
  currenProductPage: PropTypes.string.isRequired,
  currenProductCategory: PropTypes.string.isRequired,
  midLinkName: PropTypes.string.isRequired,
};

export default Breadcrumbs;
