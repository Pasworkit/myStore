import { ReactComponent as NextIcon } from '../../../img/icon/pagination-icon/next.svg';
import { ReactComponent as Next } from '../../../img/icon/pagination-icon/next-.svg';
import styles from './NextIcon.module.scss';

function NextIconC() {
  return (
    <div className={styles.position}>
      <NextIcon />
      <Next className={styles.prevPosition} />
    </div>
  );
}

export default NextIconC;
