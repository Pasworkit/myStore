import { useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './FavoritesProduct.module.scss';
import Card from '../Card/Card';

function FavoritesProduct() {
  const products = useSelector((state) => state.productsAll.products);

  const [favoriteArr, setFavoriteArr] = useState(JSON.parse(localStorage.getItem('favoriteArr')) || []);
  const toggleFavoriteStatus = (id) => {
    const index = favoriteArr.indexOf(id);
    const newFavoriteArr = [...favoriteArr];
    if (index !== -1) {
      newFavoriteArr.splice(index, 1);
    } else {
      newFavoriteArr.push(id);
    }
    setFavoriteArr(newFavoriteArr);
    localStorage.setItem('favoriteArr', JSON.stringify(newFavoriteArr));
  };
  const productsInFavorites = products.filter((el) => favoriteArr.includes(el.id));
  const FavoritesTitle = productsInFavorites.length > 0 ? 'Your favorites' : 'You have not chosen any favorites yet';
  // eslint-disable-next-line max-len
  const FavoritesItems = productsInFavorites.map((item) => <Card toggleFavoriteStatus={toggleFavoriteStatus} key={item.id} productCardData={item} />);

  return (

    <section className={styles.favoritesPageContainer}>
      <h1 className={styles.favoritesTitle}>
        {FavoritesTitle}
      </h1>
      <div className={styles.favoritesItemsWrapper}>
        {FavoritesItems}

        <li className={styles.favoritesProductItem}>
          <div className={styles.favoritesProductItemWrapper}>
            <img className={styles.favoritesImg} src="./products/img/139485.jpg" alt="img" />
            <span className={styles.favoritesProductName}>Marble Queen pothos</span>
            <p className={styles.favoritesProductPrice}>18.99$</p>
            <div className={styles.wrapperBtnAdd}>
              <button className={styles.favoritesButtonAdd} type="button">Add to cart</button>
            </div>
            <button type="button" className={styles.favoritesDelet}>
              <span className={styles.favoritesDeletFirstLine} />
              <span className={styles.favoritesDeletSecondLine} />
            </button>
          </div>
        </li>
      </div>
    </section>
  );
}

export default FavoritesProduct;
