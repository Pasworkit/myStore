import { ReactComponent as PreviousIcon } from '../../../img/icon/pagination-icon/previous.svg';
import { ReactComponent as Previous } from '../../../img/icon/pagination-icon/previous-.svg';
import styles from './PreviousIcon.module.scss';

function PreviousIconC() {
  return (
    <div className={styles.position}>
      <PreviousIcon />
      <Previous className={styles.prevPosition} />
    </div>
  );
}

export default PreviousIconC;
