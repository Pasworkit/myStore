import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import CartItem from '../CartItem/CartItem';

function Cart({ products }, handleDelete) {
  const amountProducts = 3;
  const totalСost = 3500;

  return (
    <section className={styles.cart__container}>
      <h3 className={styles.cart__title}>Корзина</h3>
      <div className={styles.cart__containerItems}>
        <div className={styles.cart__containerItem}>
          <ul>
            {products.map((product) => (
              <CartItem key={product.id} product={product} handleDelete={handleDelete} />
            ))}
          </ul>
        </div>
        <div className={styles.cart__containerOrder}>
          <div className={styles.cart__order}>
            <p className={styles.cart__titleOrder}>Ваш заказ</p>
            <p className={styles.cart__textOrder}>
              Товаров:
              <span className={styles.cart__amountProducts}>{amountProducts}</span>
            </p>
            <p className={styles.cart__textOrder}>
              Общая стоимость:
              <span className={styles.cart__amountProducts}>
                {totalСost}
                {' '}
                $
              </span>
            </p>
            <p className={styles.cart__textOrderStar}>* без учета доставки</p>
          </div>
          <div className={styles.cart__buttons}>
            <button type="button" className={styles.cart__button}>Продолжить покупки</button>
            <button type="button" className={styles.cart__buttonOrder}>Оформить заказ</button>
          </div>
        </div>
      </div>
    </section>
  );
}

Cart.propTypes = {
  products: PropTypes.arrayOf.isRequired,
};

export default Cart;
