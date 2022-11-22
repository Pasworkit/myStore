import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import styles from './Card.module.scss';
import { toggleProductInCart, incrementQuantityProductInCart, decrementQuantityProductInCart } from '../../store/products/actionCreatorsProducts';
import Preloader from '../Prelolader/Preloader';

function Card(props) {
  const {
    productCardData: {
      _id,
      itemNo,
      currentPrice,
      imageUrls,
      quantity,
      name,
    },
    toggleFavoriteStatus,
  } = props;

  const isPreloaderOpen = useSelector(store => store.preloader.isOpen);
  const isInCart = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).isInCart);
  const quantityCardCount = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).quantityInCart);
  const productsInCartInStore = useSelector((store) => store.productsAll.productsInCart);
  const productsInCart = [];

  productsInCartInStore.forEach((item) => {
    productsInCart.push({
      product: item._id,
      cartQuantity: item.quantityInCart,
    });
  });

  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies();
  const addToCartHandler = () => {
    dispatch(toggleProductInCart(_id, isInCart, cookies.token, productsInCart));
  };
  const incrementCardQuantity = () => dispatch(incrementQuantityProductInCart(_id, quantityCardCount, quantity, isInCart, cookies.token));
  const decrementCardQuantity = () => dispatch(decrementQuantityProductInCart(_id, quantityCardCount, isInCart, cookies.token));

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
      <Link to={`/${name.trim().toLowerCase().split('&').join('and')
        .split(' ')
        .join('-')}`}
      >
        <div className={styles.cardProductImgWrapper}>
          <img src={imageUrls} className={styles.cardProductImg} alt={name} />
        </div>
        <div className={styles.cardProductInfoWrapper}>
          <span className={styles.cardInfoTitleText}>{name}</span>
        </div>
      </Link>
      <div className={styles.cardPriceWrapper}>
        <span className={styles.cardPrice}>
                &nbsp;$
          {currentPrice}
        </span>
        <ButtonBuy
          isdisabled={isPreloaderOpen}
          handleClick={() => {
            addToCartHandler();
          }}
          backgroundColor="#456F49"
          padding="15px 30px"
          text={isInCart ? 'Delete' : 'Add to cart'}
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
          {quantity}
        </p>
      </div>

      <Preloader isOpen={isPreloaderOpen} />

    </div>
  );
}

Card.propTypes = {
  productCardData: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    quantityInCart: PropTypes.number,
    quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};

export default memo(Card);
