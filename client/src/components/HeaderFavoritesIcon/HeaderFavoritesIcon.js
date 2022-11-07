import { ReactComponent as Favorites } from '../../img/icon/favoritesIcon.svg';
import styles from './HeaderFavoritesIcon.module.scss';

function HeaderFavoritesIcon() {
  return <Favorites data-favorites-icon="favorites-icon" className={styles.favoritesIcon} />;
}

export default HeaderFavoritesIcon;
