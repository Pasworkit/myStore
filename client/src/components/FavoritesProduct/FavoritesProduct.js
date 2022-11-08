import styles from './FavoritesProduct.module.scss';

function FavoritesProduct() {
  return (
    <li className={styles.favoritesProductItem}>
      <div className={styles.favoritesProductItemWrapper}>
        <img className={styles.favoritesImg} src="./products/img/139485.jpg" alt="img" />
        <span className={styles.favoritesProductName}>Marble Queen pothos</span>
        <p className={styles.favoritesProductPrice}>18.99 BYN</p>
        <div className={styles.wrapperBtnAdd}>
          <button className={styles.favoritesButtonAdd} type="button">Add to cart</button>
        </div>
        <button type="button" className={styles.favoritesDelet}>
          <span className={styles.favoritesDeletFirstLine} />
          <span className={styles.favoritesDeletSecondLine} />
        </button>
      </div>
    </li>
  );
}

export default FavoritesProduct;
