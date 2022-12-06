import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import FilterEasyCare from './FilterEasyCare';
import styles from './FilterCatalog.module.scss';
import FilterPetAndBabySafe from './FilterPetAndBabySafe';
import FilterHeight from './FilterHeight';
import FilterCategory from './FilterCategory';
import FilterPopular from './FilterPopular';
import FilterPrice from './FilterPrice';
import {
  checkedCategoriesFilter, checkedEasyCareFilter, checkedHeightRangeFilter, checkedPetAndBabeSafeFilter, checkedPopularFilter,
} from '../../store/slices/filterCatalogSlice';
import { filterCatalogProducts, getAllProducts, paginationCatalog } from '../../store/slices/catalogSlice';

function FilterCatalog() {
  const dispatch = useDispatch();
  const categories = useSelector(store => store.filter.categories);
  const isPopular = useSelector(store => store.filter.isPopular);
  const isEasyCare = useSelector(store => store.filter.isEasyCare);
  const isPetAndBabySafe = useSelector(store => store.filter.isPetAndBabySafe);
  const heightRange = useSelector(store => store.filter.heightRange);
  const filterState = useSelector(store => store.filter);

  const handleChangeCategories = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    dispatch(checkedCategoriesFilter({ name, checked }));
  };

  const handleChangePopular = (event) => {
    const { name } = event.target;
    const { checked } = event.target;

    dispatch(checkedPopularFilter({ name, checked }));
  };

  const handleChangeEasyCare = (event) => {
    const { name } = event.target;
    const { checked } = event.target;

    dispatch(checkedEasyCareFilter({ name, checked }));
  };

  const handleChangePetAndBabySafe = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    dispatch(checkedPetAndBabeSafeFilter({ name, checked }));
  };

  const handleChangeHeight = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    dispatch(checkedHeightRangeFilter({ name, checked }));
  };

  useEffect(() => {
    if (categories.length !== 0 || isPopular.length !== 0 || isEasyCare.length !== 0 || isPetAndBabySafe.length !== 0 || heightRange.length !== 0) {
      dispatch(filterCatalogProducts(filterState));
      setTimeout(() => {
        dispatch(paginationCatalog());
      }, 300);
    } else {
      dispatch(getAllProducts());
      setTimeout(() => {
        dispatch(paginationCatalog());
      }, 300);
    }
  }, [filterState]);

  return (
    <div className={styles.container}>
      <FilterCategory handleChangeCategories={handleChangeCategories} />
      <FilterPopular handleChangePopular={handleChangePopular} />
      <FilterEasyCare handleChangeEasyCare={handleChangeEasyCare} />
      <FilterPetAndBabySafe handleChangePetAndBabySafe={handleChangePetAndBabySafe} />
      <FilterHeight handleChangeHeight={handleChangeHeight} />
      <FilterPrice />
    </div>
  );
}

export default FilterCatalog;
