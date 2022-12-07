import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import CartItem from '../CartItem/CartItem';
import CartSlider from '../CartSlider/CartSlider';

function Cart({ productsCartSlider }) {
  const productsCart = useSelector((store) => store.productsAll.productsInCart);
  const totalPrice = useSelector((store) => store.productsAll.totalPrice);
  const amountProducts = useSelector((store) => store.productsAll.amountProductsInCart);

  return (
    <section className={styles.cart__container}>
      <h3 className={styles.cart__title}>Cart</h3>
      <div className={styles.cart__containerItems}>
        <div className={styles.cart__containerItem}>
          <ul>
            {productsCart.map((product) => (
              <CartItem key={product._id} product={product} />
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
                {totalPrice.toFixed(2)}
                {' '}
                $
              </span>
            </p>
            <p className={styles.cart__textOrderStar}>* excluding delivery</p>
          </div>
          <div className={styles.cart__buttons}>
            <NavLink className={styles.cart__button} to="/catalog">Continue shopping</NavLink>
            <Link to="/cart/order">
              <button type="button" className={styles.cart__buttonOrder}>Checkout</button>
            </Link>
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
  productsCartSlider: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Cart;
