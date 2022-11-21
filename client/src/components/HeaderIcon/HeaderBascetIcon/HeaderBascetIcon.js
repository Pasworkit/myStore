import { ReactComponent as ShopingBascet } from '../../../img/icon/bascet.svg';
import styles from './HeaderBascet.module.scss';

function HeaderBascetIcon() {
  const productsInCart = [{ cart: 1 }];

  return (
    <button
      type="button"
      className={styles.cartButton}
      data-products-in-cart={productsInCart.length}
    >
      <ShopingBascet data-bascet-icon="bascet-icon" className={styles.basketIcon} />
    </button>
  );
}

export default HeaderBascetIcon;
