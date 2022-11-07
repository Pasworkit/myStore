import PropTypes from 'prop-types';
import styles from './CartItem.module.scss';

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
          <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.06302 2.98309V0.00842285H0V2.98309H9.06302Z" fill="#2A592E" />
          </svg>
        </button>
        <div className={styles.counter}>1</div>
        <button type="button" className={styles.buttonCartItem}>
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.56875 11.9493V7.19869H12.3196V4.82339H7.56875V0.0505981H5.19333V4.82339H0.420898V7.19869H5.19333V11.9493H7.56875Z" fill="#2A592E" />
          </svg>
        </button>
      </div>

      <span className={styles.price}>{price}</span>

      <button type="button" className={styles.buttonCartItem} onClick={() => { handleDelete(id); }}>
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.935622" y1="1.50659" x2="12.9564" y2="13.5274" stroke="#A8ABA7" strokeLinecap="round" />
          <line x1="12.9238" y1="1.48634" x2="0.903013" y2="13.5072" stroke="#A8ABA7" strokeLinecap="round" />
        </svg>
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
    color: PropTypes.string,
    isFavourite: PropTypes.bool,
    isInCart: PropTypes.bool,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CartItem;
