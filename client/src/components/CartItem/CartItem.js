import PropTypes from 'prop-types';
import styles from './CartItem.module.scss';
import { ReactComponent as DeleteIcon } from '../../svg/icon-delete.svg';
import { ReactComponent as MinusIcon } from '../../svg/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../../svg/icon-plus.svg';

function CartItem({
  product: {
    id, title, price, image,
  }, handleDelete,
}) {
  return (
    <li className={styles.item}>
      <img className={styles.img} src={image} alt={title} />

      <span className={styles.title}>{title}</span>

      <div className={styles.counterWrapper}>
        <button type="button" className={styles.buttonCartItem}>
          <MinusIcon />
        </button>
        <div className={styles.counter}>1</div>
        <button type="button" className={styles.buttonCartItem}>
          <PlusIcon />
        </button>
      </div>

      <span className={styles.price}>{price}</span>

      <button type="button" className={styles.buttonCartItem} onClick={() => { handleDelete(id); }}>
        <DeleteIcon />
      </button>
    </li>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CartItem;
