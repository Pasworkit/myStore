import FilterEasyCare from './FilterEasyCare';
import styles from './FilterCatalog.module.scss';
import FilterPetAndBabySafe from './FilterPetAndBabySafe';
import FilterHeight from './FilterHeight';
import FilterCategory from './FilterCategory';
import FilterPopular from './FilterPopular';
import FilterPrice from './FilterPrice';

function FilterCatalog() {
  return (
    <div className={styles.container}>
      <FilterCategory />
      <FilterPopular />
      <FilterEasyCare />
      <FilterPetAndBabySafe />
      <FilterHeight />
      <FilterPrice />
    </div>
  );
}

export default FilterCatalog;
