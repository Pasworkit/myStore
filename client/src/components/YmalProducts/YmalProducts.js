import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from '../Card/Card';
import styles from './YmalProducts.module.scss';
import CardsSlider from '../Slider/Slider';

function YmalProducts(props) {
  // eslint-disable-next-line react/prop-types
  const { products } = props;

  const [favoriteArr, setFavoriteArr] = useState(JSON.parse(localStorage.getItem('favoriteArr')) || []);
  const toggleFavoriteStatus = (itemNo) => {
    const index = favoriteArr.indexOf(itemNo);
    const newFavoriteArr = [...favoriteArr];
    if (index !== -1) {
      newFavoriteArr.splice(index, 1);
    } else {
      newFavoriteArr.push(itemNo);
    }
    setFavoriteArr(newFavoriteArr);
    localStorage.setItem('favoriteArr', JSON.stringify(newFavoriteArr));
  };

  // eslint-disable-next-line max-len
  const ymalProductsItems = products.map((item) => <Card toggleFavoriteStatus={toggleFavoriteStatus} key={item.itemNo} productCardData={item} />);

  return (
    <div className={styles.ymalContainer}>
      <h3 className={styles.ymalTitle}>You might also like</h3>
      <CardsSlider
        quantity={4}
        dots={false}
      >
        {ymalProductsItems}
      </CardsSlider>
    </div>
  );
}

YmalProducts.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

YmalProducts.defaultProps = {
  products: [],
};

export default YmalProducts;
