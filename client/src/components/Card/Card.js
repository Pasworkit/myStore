import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import styles from './Card.module.scss';
import { toggleProductInCart } from '../../store/products/actionCreatorsProducts';

function Card(props) {
  const {
    productCardData: {
      _id,
      itemNo,
      currentPrice,
      imageUrls,
      inStock,
      myCustomParam: {
        botanicName,
      },
    },

    toggleFavoriteStatus, /* addToCart, */
  } = props;

  const isInCart = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).isInCart);

  const dispatch = useDispatch();

  const addToCartHandler = () => dispatch(toggleProductInCart(_id));

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
  // const [/* cartArr */, setCartArr] =
  // useState(JSON.parse(localStorage.getItem('cartArr')) || []);
  // eslint-disable-next-line no-shadow
  // const addToCart = (_id) => {
  //   let newCartArr = JSON.parse(localStorage.getItem('cartArr')) || [];
  //   // newCartArr.push(id);
  //   newCartArr = [...newCartArr, ...[...Array(quantityCardCount)].map(() => _id)];
  //   setCartArr(newCartArr);
  //   localStorage.setItem('cartArr', JSON.stringify(newCartArr));
  //   const productInCartCount = {};
  //   // eslint-disable-next-line max-len
  //   newCartArr.forEach((item) =>
  // { productInCartCount[item] = (productInCartCount[item] || 0) + 1; });
  //   localStorage.setItem('cartObj', JSON.stringify(productInCartCount));
  // };

  const favoriteArr = JSON.parse(localStorage.getItem('favoriteArr'));
  const isFavoriteStatus = favoriteArr ? favoriteArr.indexOf(_id) !== -1 : false;

  return (
    <div key={itemNo} className={styles.cardProductBox}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => toggleFavoriteStatus(_id)}
        onKeyDown={() => toggleFavoriteStatus(_id)}
      >
        {isFavoriteStatus
          ? (
            <FavoriteIcon className={styles.star} />
          )
          : (
            <FavoriteBorderIcon className={styles.star} />
          )}
      </div>
      <Link to={`/${botanicName.trim().toLowerCase().split('&').join('and')
        .split(' ')
        .join('-')}`}
      >
        <div className={styles.cardProductImgWrapper}>
          <img src={imageUrls} className={styles.cardProductImg} alt={botanicName} />
        </div>
        <div className={styles.cardProductInfoWrapper}>
          <span className={styles.cardInfoTitleText}>{botanicName}</span>
        </div>
      </Link>
      <div className={styles.cardPriceWrapper}>
        <span className={styles.cardPrice}>
                &nbsp;$
          {currentPrice}
        </span>
        <ButtonBuy
          handleClick={() => {
            addToCartHandler();
          }}
          backgroundColor="#456F49"
          padding="15px 30px"
          text={isInCart ? 'Del from cart' : 'Add to cart'}
          id={_id}
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
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    itemNo: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    // productName: PropTypes.string.isRequired,
    currentPrice: PropTypes.number.isRequired,
    previousPrice: PropTypes.number,
    imageUrls: PropTypes.arrayOf.isRequired,
    inStock: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
};

Card.defaultProps = {
  productCardData: {},
};

export default memo(Card);
