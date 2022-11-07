// eslint-disable-next-line no-unused-vars
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import styles from './Card.module.scss';

function Card({
  productCardData: {
    id,
    itemNo,
    productName,
    currentPrice,
    imgUrl,
    inStock,
  },
}) {
  const [quantityCardCount, setQuantityCardCount] = useState(1);
  const incrementCardQuantity = () => {
    setQuantityCardCount((prevState) => {
      if (prevState < inStock) {
        return prevState + 1;
      }
      // eslint-disable-next-line no-alert
      alert(`You can't buy more products than there is in stock: ${inStock}`);
      return prevState;
    });
  };
  const decrementCardQuantity = () => {
    setQuantityCardCount((prevState) => {
      if (prevState > 1) {
        return prevState - 1;
      }
      return prevState;
    });
  };
  return (
    <div key={itemNo} className={styles.cardProductBox}>
      <Link to={`/${productName.trim().toLowerCase().split('&').join('and')
        .split(' ')
        .join('-')}`}
      >
        <div className={styles.cardProductImgWrapper}>
          <img src={imgUrl} className={styles.cardProductImg} alt={productName} />
        </div>
        <div className={styles.cardProductInfoWrapper}>
          <span className={styles.cardInfoTitleText}>{productName}</span>
        </div>
      </Link>
      <div className={styles.cardPriceWrapper}>
        <span className={styles.cardPrice}>
                &nbsp;$
          {currentPrice}
        </span>
        <ButtonBuy
          handleClick={() => {
            //  placeProductIntoCart(productCardData);
          }}
          backgroundColor="#456F49"
          padding="15px 30px"
          text="Add to cart"
          id={id}
        />
      </div>
      <div className={styles.cardQuantityWrapper}>
        <div className={styles.cardQuantityBlock}>
          <p className={styles.cardQuantitySet}>
            <span role="button" tabIndex={0} onClick={decrementCardQuantity} onKeyDown={decrementCardQuantity}>
              <RemoveIcon className={styles.cardMinus} />
            </span>
            <span className={styles.cardNum}>{quantityCardCount}</span>
            <span role="button" tabIndex={0} onClick={incrementCardQuantity} onKeyDown={incrementCardQuantity}>
              <AddIcon className={styles.cardPlus} />
            </span>
          </p>
        </div>
        <p>
          <span>In stock: </span>
          {inStock}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  productCardData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    itemNo: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    productName: PropTypes.string.isRequired,
    currentPrice: PropTypes.number.isRequired,
    previousPrice: PropTypes.number,
    imgUrl: PropTypes.string.isRequired,
    inStock: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
};

Card.defaultProps = {
  productCardData: {},
};

export default memo(Card);
