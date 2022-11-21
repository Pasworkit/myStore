import { ReactComponent as ShopingBascet } from '../../../img/icon/bascet.svg';
import styles from './HeaderBascet.module.scss';

function HeaderBascetIcon() {
  return <ShopingBascet data-bascet-icon="bascet-icon" className={styles.basketIcon} />;
}

export default HeaderBascetIcon;
