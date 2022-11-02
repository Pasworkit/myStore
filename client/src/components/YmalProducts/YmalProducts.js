// eslint-disable-next-line no-unused-vars
import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PropTypes from 'prop-types';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styles from './YmalProducts.module.scss';
import ButtonBuy from '../ButtonBuy/ButtonBuy';

function YmalProducts(props) {
  // eslint-disable-next-line react/prop-types
  const { products } = props;
  // eslint-disable-next-line no-console
  console.log(products);
  return (
    <div>
      <div className={styles.ymalHeading}>
        <h3 className={styles.ymalTitle}>You might also like</h3>
        <p>
          <ArrowBackIosNewOutlinedIcon className={styles.ymalArrowLeft} />
          <ArrowForwardIosOutlinedIcon className={styles.ymalArrowRight} />
        </p>
      </div>
      <div className={styles.ymalCase}>
        {products.map((product) => (
          <div key={product.itemNo} className={styles.ymalProductBox}>
            <div className={styles.ymalProductImgWrapper}>
              {/* eslint-disable-next-line max-len */}
              <img src={product.imgUrl} className={styles.yamalProductImg} alt={product.productName} />
            </div>
            <div className={styles.ymalProductInfoWrapper}>
              <span className={styles.ymalInfoTitleText}>{product.productName}</span>
            </div>
            <div className={styles.ymalPriceWrapper}>
              <span className={styles.ymalPrice}>
                &nbsp;$
                {product.currentPrice}
              </span>
              <ButtonBuy
                handleClick={() => {
                  //  setCurrentProduct(productInfo);
                }}
                backgroundColor="#456F49"
                padding="15px 30px"
                text="Add to cart"
                id={product.id}
              />
            </div>
            <div className={styles.ymalQuantityWrapper}>
              <div className={styles.ymalQuantityBlock}>
                <p className={styles.ymalQuantitySet}>
                  <span>
                    <RemoveIcon className={styles.ymalMinus} />
                  </span>
                  <span className={styles.ymalNum}>{1}</span>
                  <span>
                    <AddIcon className={styles.ymalPlus} />
                  </span>
                </p>
              </div>
              <p>
                <span>In stock: </span>
                {product.inStock}
              </p>
            </div>
          </div>
        ))}
      </div>
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
