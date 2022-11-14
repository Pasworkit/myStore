import { ReactComponent as FilterIconBtn } from '../../img/icon/filter-icon.svg';
import styles from './FilterIcon.module.scss';

function FilterIcon() {
  return <FilterIconBtn className={styles.filterPosition} />;
}

export default FilterIcon;
