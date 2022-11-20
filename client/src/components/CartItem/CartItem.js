import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CartItem.module.scss';
import { ReactComponent as DeleteIcon } from '../../svg/icon-delete.svg';
import { ReactComponent as MinusIcon } from '../../svg/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../../svg/icon-plus.svg';
import { toggleProductInCart, incrementQuantityProductInCart, decrementQuantityProductInCart } from '../../store/products/actionCreatorsProducts';

function CartItem({
  product: {
    _id,
    name,
    currentPrice,
    imageUrls,
  },
}) {
  const quantityCardCount = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).quantityInCart);
  const quantityInStockCardCount = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).quantity);

  const dispatch = useDispatch();

  const addToCartHandler = () => dispatch(toggleProductInCart(_id));
  const incrementCardQuantity = () => dispatch(incrementQuantityProductInCart(_id, quantityCardCount, quantityInStockCardCount));
  const decrementCardQuantity = () => dispatch(decrementQuantityProductInCart(_id, quantityCardCount, quantityInStockCardCount));

  return (
    <li className={styles.item}>
      <img className={styles.img} src={imageUrls} alt={name} />

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
