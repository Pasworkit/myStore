import { useSelector } from 'react-redux';
import { ReactComponent as ShopingBascet } from '../../../img/icon/bascet.svg';
import styles from './HeaderBascet.module.scss';

function HeaderBascetIcon() {
  const amountProducts = useSelector((store) => store.productsAll.amountProductsInCart);
  return (
    <button
      type="button"
      className={styles.cartButton}
      data-products-in-cart={amountProducts}
    >
      <ShopingBascet data-bascet-icon="bascet-icon" className={styles.basketIcon} />
    </button>
  );
}

export default HeaderBascetIcon;
