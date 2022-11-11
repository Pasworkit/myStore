import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import CartItem from '../CartItem/CartItem';
import CartSlider from '../CartSlider/CartSlider';

function Cart({ productsCart, productsCartSlider }) {
  const amountProducts = 3;
  const totalPrice = 3500;

  const handleDeleteCartItem = () => {
  };

  return (
    <section className={styles.cart__container}>
      <h3 className={styles.cart__title}>Cart</h3>
      <div className={styles.cart__containerItems}>
        <div className={styles.cart__containerItem}>
          <ul>
            {productsCart.map((product) => (
              <CartItem key={product.id} product={product} handleDelete={handleDeleteCartItem} />
            ))}
          </ul>
        </div>
        <div className={styles.cart__containerOrder}>
          <div className={styles.cart__order}>
            <p className={styles.cart__titleOrder}>Your order</p>
            <p className={styles.cart__textOrder}>
              Amount products:
              <span className={styles.cart__amountProducts}>{amountProducts}</span>
            </p>
            <p className={styles.cart__textOrder}>
              Total price:
              <span className={styles.cart__amountProducts}>
                {totalPrice}
                {' '}
                $
              </span>
            </p>
            <p className={styles.cart__textOrderStar}>* excluding delivery</p>
          </div>
          <div className={styles.cart__buttons}>
            <button type="button" className={styles.cart__button}>Continue shopping</button>
            <button type="button" className={styles.cart__buttonOrder}>Checkout</button>
          </div>
        </div>
      </div>

      <div className={styles.cart__containerSlider}>
        <CartSlider productsSlider={productsCartSlider} />
      </div>
    </section>
  );
}

Cart.propTypes = {
  productsCart: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  productsCartSlider: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Cart;
