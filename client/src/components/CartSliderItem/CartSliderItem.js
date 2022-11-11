import PropTypes from 'prop-types';
import styles from './CartSliderItem.module.scss';

function CartSliderItem({
  product: {
    title, price, image,
  },
}) {
  return (
    <div className={styles.item}>
      <div className={styles.containerImg}>
        <img className={styles.img} src={image} alt={title} />

        <p className={styles.price}>
          {' '}
          {price}
          {' '}
        </p>
      </div>

      <p className={styles.title}>
        {' '}
        {title}
        {' '}
      </p>

    </div>
  );
}

CartSliderItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default CartSliderItem;
