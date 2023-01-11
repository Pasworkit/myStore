import { useSelector } from 'react-redux';
import { ReactComponent as Favorites } from '../../../img/icon/favoritesIcon.svg';
import styles from './HeaderFavoritesIcon.module.scss';

function HeaderFavoritesIcon() {
  const productsInFavoritesInStore = useSelector((store) => store.productsAll.productsInFavorites);

  return (
    <button
      type="button"
      className={styles.favoritesButton}
      data-favorites-icon="favorites-icon"
    >
      <Favorites data-favorites-icon="favorites-icon" className={styles.favoritesIcon} />

      {(productsInFavoritesInStore.length > 0) && <div className={styles.favorites_amount}>{productsInFavoritesInStore.length}</div>}

    </button>
  );
}

export default HeaderFavoritesIcon;
