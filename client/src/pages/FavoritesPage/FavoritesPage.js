import FavoritesProduct from '../../components/FavoritesProduct/FavoritesProduct';
import styles from './FavoritesPage.module.scss';

function FavoritesPage() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.fevoritesHeading}>Favorites</h2>
        <ul className={styles.favoritesList}>
          <FavoritesProduct />
          <FavoritesProduct />
        </ul>
      </div>
    </main>
  );
}

export default FavoritesPage;
