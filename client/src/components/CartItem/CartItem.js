import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.scss';
import { ReactComponent as DeleteIcon } from '../../svg/icon-delete.svg';
import { ReactComponent as MinusIcon } from '../../svg/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../../svg/icon-plus.svg';
import { toggleProductInCart, incrementQuantityProductInCart, decrementQuantityProductInCart } from '../../store/slices/productsSlice';

function CartItem({
  product: {
    _id,
    name,
    currentPrice,
    imageUrls,
    itemNo,
  },
}) {
  const quantityCardCount = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).quantityInCart);
  const quantityInStockCardCount = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).quantity);
  const isInCart = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).isInCart);

  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies();
  const addToCartHandler = () => dispatch(toggleProductInCart(_id, isInCart, cookies.token));

  const incrementCardQuantity = () => dispatch(incrementQuantityProductInCart(cookies.token, _id, quantityCardCount, quantityInStockCardCount, isInCart));
  const decrementCardQuantity = () => dispatch(decrementQuantityProductInCart(_id, quantityCardCount, isInCart, cookies.token));

  return (
    <li className={styles.item}>

      <Link to={`/${itemNo}`}>
        <img className={styles.img} src={imageUrls} alt={name} />
      </Link>

      <span className={styles.title}>{name}</span>

      <div className={styles.counterWrapper}>
        <button type="button" className={styles.buttonCartItem} onClick={decrementCardQuantity}>
          <MinusIcon />
        </button>
        <div className={styles.counter}>{quantityCardCount}</div>
        <button type="button" className={styles.buttonCartItem} onClick={incrementCardQuantity}>
          <PlusIcon />
        </button>
      </div>

      <span className={styles.price}>{currentPrice}</span>

      <button type="button" className={styles.buttonCartItem} onClick={addToCartHandler}>
        <DeleteIcon />
      </button>
    </li>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    quantityInCart: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
