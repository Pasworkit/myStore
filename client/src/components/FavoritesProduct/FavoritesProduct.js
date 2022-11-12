import { useSelector } from 'react-redux';
import styles from './FavoritesProduct.module.scss';
import Card from '../Card/Card';

function FavoritesProduct() {
  const products = useSelector((state) => state.productsAll.products);
  const favoriteArr = JSON.parse(localStorage.getItem('favoriteArr')) || [];
  const productsInFavorites = products.filter((el) => favoriteArr.includes(el.id));
  // eslint-disable-next-line max-len
  const FavoritesItems = productsInFavorites.map((item) => <Card key={item.id} productCardData={item} />);

  return (
    <>
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

      <section className={styles.favoritesPageContainer}>
        <div className={styles.favoritesItemsWrapper}>
          {FavoritesItems}
        </div>
      </section>

    </>
  );
}

export default FavoritesProduct;
