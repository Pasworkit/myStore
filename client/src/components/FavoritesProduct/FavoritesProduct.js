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
      </div>
    </section>
  );
}

export default FavoritesProduct;
