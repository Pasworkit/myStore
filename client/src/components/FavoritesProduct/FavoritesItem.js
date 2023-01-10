import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './FavoritesItem.module.scss';
import { ReactComponent as DeleteIcon } from '../../svg/icon-delete.svg';
import { toggleProductInFavorites, toggleProductInCart } from '../../store/slices/productsSlice/actionCreators';
import { setModalIsOpen, setModalData } from '../../store/slices/modalSlise';

function FavoritesItem({
  product: {
    _id,
    name,
    currentPrice,
    imageUrls,
    itemNo,
  },
}) {
  const renderStringTitle = (stringTitle) => [...stringTitle[0].toUpperCase(), stringTitle.slice(1)].join('').split('-').join(' ');
  const isInFavorites = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).isInFavorites);
  const token = useSelector((store) => store.auth.token);
  const isInCart = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).isInCart);
  const quantityCardCount = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).quantityInCart);

  const dispatch = useDispatch();

  const handleModalCancel = () => { dispatch(setModalIsOpen(false)); };

  const addToCartHandler = () => {
    if (isInCart) {
      dispatch(setModalIsOpen(true));
      dispatch(setModalData({
        header: 'Delete product from cart?',
        text: `Product Name: ${renderStringTitle(name)}`,
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

  const addToFavoritesHandler = () => {
    if (isInFavorites) {
      dispatch(setModalIsOpen(true));
      dispatch(setModalData({
        header: 'Delete product from favorites?',
        text: `Product Name: ${renderStringTitle(name)}`,
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

  return (
    <li className={styles.item}>

      <Link to={`/${itemNo}`}>
        <img className={styles.img} src={imageUrls} alt={name} />
      </Link>

      <span className={styles.title}>{renderStringTitle(name)}</span>

      <span className={styles.price}>{currentPrice}</span>
      <button type="button" className={styles.favoritesButton} onClick={addToCartHandler}>
        {isInCart ? 'Delete from Cart' : 'Add to cart'}
      </button>

      <button type="button" className={styles.buttonDelete} onClick={addToFavoritesHandler}>
        <DeleteIcon />
      </button>
    </li>

  );
}

FavoritesItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    itemNo: PropTypes.string,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default FavoritesItem;
