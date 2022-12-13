import { useSelector } from 'react-redux';
import FavoritesItem from '../../components/FavoritesProduct/FavoritesItem';
import styles from './FavoritesPage.module.scss';

function FavoritesPage() {
  const productsFavorites = useSelector((store) => store.productsAll.productsInFavorites);

  return (
    <section className={styles.favorites__container}>
      <h3 className={styles.favorites__title}>Favorites</h3>
      <div className={styles.favorites__containerItem}>
        <ul>
          {productsFavorites.map((product) => (
            <FavoritesItem key={product._id} product={product} />
          ))}
        </ul>
        {!productsFavorites.length && (
        <div className={styles.favorites__text}>
          You do not have any items in your favorites yet!
        </div>
        )}
      </div>
    </section>
  );
}

export default FavoritesPage;
