import { ReactComponent as HeaderSignInIconC } from '../../../img/icon/sign-in.svg';
import styles from './HeaderSignInIcon.module.scss';

function HeaderSignInIcon() {
  return <HeaderSignInIconC data-sign-in-icon="sign-in-icon" className={styles.signInIcon} />;
}

export default HeaderSignInIcon;
