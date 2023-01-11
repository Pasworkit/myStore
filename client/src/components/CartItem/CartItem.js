import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './CartItem.module.scss';
import { ReactComponent as DeleteIcon } from '../../svg/icon-delete.svg';
import { ReactComponent as MinusIcon } from '../../svg/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../../svg/icon-plus.svg';
import { toggleProductInCart, incrementQuantityProductInCart, decrementQuantityProductInCart } from '../../store/slices/productsSlice/actionCreators';
import { setModalIsOpen, setModalData } from '../../store/slices/modalSlise';

function CartItem({
  product: {
    _id,
    name,
    currentPrice,
    imageUrls,
    itemNo,
    quantity,
  },
}) {
  const renderStringTitle = (stringTitle) => [...stringTitle[0].toUpperCase(), stringTitle.slice(1)].join('').split('-').join(' ');
  const quantityCardCount = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).quantityInCart);
  const isInCart = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).isInCart);
  const token = useSelector((store) => store.auth.token);

  const dispatch = useDispatch();

  const handleModalCancel = () => { dispatch(setModalIsOpen(false)); };

  const addToCartHandler = () => {
    dispatch(setModalIsOpen(true));
    dispatch(setModalData({
      header: 'Delete product from cart?',
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
              dispatch(toggleProductInCart(_id, isInCart, token));
              dispatch(setModalIsOpen(false));
            }}
          >
            Delete
          </Button>
        </div>
      ),
    }));
  };

  const incrementCardQuantity = () => {
    if (quantityCardCount < quantity) {
      dispatch(incrementQuantityProductInCart(token, _id, quantityCardCount, quantity, isInCart));
    } else {
      dispatch(setModalIsOpen(true));
      dispatch(setModalData({
        header: 'You have selected the maximum quantity of the product that is in stock',
        text: `Product Name: ${renderStringTitle(name)}`,
        actions: (
          <div>
            <Button color="success" onClick={handleModalCancel}> OK </Button>
          </div>
        ),
      }));
    }
  };

  const decrementCardQuantity = () => dispatch(decrementQuantityProductInCart(_id, quantityCardCount, isInCart, token));

  return (
    <li className={styles.item}>

      <Link to={`/${itemNo}`}>
        <img className={styles.img} src={imageUrls} alt={renderStringTitle(name)} />
      </Link>

      <span className={styles.title}>{renderStringTitle(name)}</span>

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
