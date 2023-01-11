import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import styles from './Card.module.scss';
import {
  toggleProductInCart, incrementQuantityProductInCart, decrementQuantityProductInCart, toggleProductInFavorites,
} from '../../store/slices/productsSlice/actionCreators';
import { setModalData, setModalIsOpen } from '../../store/slices/modalSlise';

function Card({
  productCardData: {
    _id,
    itemNo,
    currentPrice,
    imageUrls,
    quantity,
    name,
  },
}) {
  const isInCart = useSelector((state) => state.productsAll.products.find((product) => product._id === _id).isInCart);
  const isInFavorites = useSelector((state) => state.productsAll.products.find((product) => product._id === _id).isInFavorites);
  const quantityCardCount = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).quantityInCart);
  const token = useSelector((store) => store.auth.token);

  const dispatch = useDispatch();

  const handleModalCancel = () => { dispatch(setModalIsOpen(false)); };

  const addToCartHandler = () => {
    if (isInCart) {
      dispatch(setModalIsOpen(true));
      dispatch(setModalData({
        header: 'Delete product from cart?',
        text: `Product Name: ${name}`,
        actions: (
          <div>
            <Button color="success" onClick={handleModalCancel}>Сancel</Button>
            <Button
              color="success"
              onClick={() => {
                dispatch(setModalIsOpen(false));
                dispatch(toggleProductInCart(_id, isInCart, token, quantityCardCount));
              }}
            >
              Delete
            </Button>
          </div>
        ),
      }));
    } else { dispatch(toggleProductInCart(_id, isInCart, token, quantityCardCount)); }
  };

  const incrementCardQuantity = () => {
    if (quantityCardCount < quantity) {
      dispatch(incrementQuantityProductInCart(token, _id, quantityCardCount, quantity, isInCart));
    } else {
      dispatch(setModalIsOpen(true));
      dispatch(setModalData({
        header: 'You have selected the maximum quantity of the product that is in stock',
        text: `Product Name: ${name}`,
        actions: (
          <div>
            <Button color="success" onClick={handleModalCancel}> OK </Button>
          </div>
        ),
      }));
    }
  };

  const decrementCardQuantity = () => dispatch(decrementQuantityProductInCart(_id, quantityCardCount, isInCart, token));

  const addToFavoritesHandler = () => {
    if (isInFavorites) {
      dispatch(setModalIsOpen(true));
      dispatch(setModalData({
        header: 'Delete product from favorites?',
        text: `Product Name: ${name}`,
        actions: (
          <div>
            <Button
              color="success"
              onClick={handleModalCancel}
            >
              Сancel
            </Button>
            <Button
              color="success"
              onClick={() => {
                dispatch(toggleProductInFavorites(_id, isInFavorites, token));
                dispatch(setModalIsOpen(false));
              }}
            >
              Delete
            </Button>
          </div>
        ),
      }));
    } else {
      dispatch(toggleProductInFavorites(_id, isInFavorites, token));
    }
  };

  const renderStringTitle = (stringTitle) => [...stringTitle[0].toUpperCase(), stringTitle.slice(1)].join('').split('-').join(' ');

  return (
    <div key={itemNo} className={styles.cardProductBox}>
      <div
        role="button"
        tabIndex={0}
        onClick={addToFavoritesHandler}
        onKeyDown={addToFavoritesHandler}
        className={styles.favoritesIcon}
      >
        {isInFavorites
          ? (
            <FavoriteIcon className={styles.star} />
          )
          : (
            <FavoriteBorderIcon className={styles.star} />
          )}
      </div>
      <Link to={`/${itemNo}`}>
        <div className={styles.cardProductImgWrapper}>
          <img src={imageUrls} className={styles.cardProductImg} alt={name} />
        </div>
        <div className={styles.cardProductInfoWrapper}>
          <span className={styles.cardInfoTitleText}>{renderStringTitle(name)}</span>
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

    </div>
  );
}

Card.propTypes = {
  productCardData: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    itemNo: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    quantityInCart: PropTypes.number,
    quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};

export default memo(Card);
