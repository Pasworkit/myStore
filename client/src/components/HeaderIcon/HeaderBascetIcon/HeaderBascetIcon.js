import { useSelector } from 'react-redux';
import { ReactComponent as ShopingBascet } from '../../../img/icon/bascet.svg';
import styles from './HeaderBascet.module.scss';

function HeaderBascetIcon() {
  const amountProductsInStore = useSelector((store) => store.productsAll.amountProductsInCart);

  return (
    <button
      type="button"
      className={styles.cartButton}
      data-bascet-icon="bascet-icon"
    >
      <ShopingBascet data-bascet-icon="bascet-icon" className={styles.basketIcon} />
      {(amountProductsInStore > 0) && <div className={styles.basket_amount}>{amountProductsInStore}</div>}

    </button>
  );
}

export default HeaderBascetIcon;
