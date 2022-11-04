// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-named-as-default
import Card from '../Card/Card';
import styles from './YmalProducts.module.scss';
import CardsSlider from '../Slider/Slider';

function YmalProducts(props) {
  // eslint-disable-next-line react/prop-types
  const { products } = props;
  const ymalProductsItems = products.map((item) => <Card key={item.id} productCardData={item} />);
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
