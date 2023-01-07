import { useSelector } from 'react-redux';
import { ReactComponent as Favorites } from '../../../img/icon/favoritesIcon.svg';
import styles from './HeaderFavoritesIcon.module.scss';

function HeaderFavoritesIcon() {
  const productsInFavorites = useSelector((store) => store.productsAll.productsInFavorites);

  return (
    <button
      type="button"
      className={styles.favoritesButton}
      data-products-in-favorites={productsInFavorites.length}
      data-favorites-icon="favorites-icon"
    >
      <Favorites data-favorites-icon="favorites-icon" className={styles.favoritesIcon} />
    </button>
  );
}

export default HeaderFavoritesIcon;
