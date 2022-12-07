import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import FilterEasyCare from './FilterEasyCare';
import styles from './FilterCatalog.module.scss';
import FilterPetAndBabySafe from './FilterPetAndBabySafe';
import FilterHeight from './FilterHeight';
import FilterCategory from './FilterCategory';
import FilterPopular from './FilterPopular';
import FilterPrice from './FilterPrice';
import {
  checkedCategoriesFilter, checkedEasyCareFilter, checkedHeightRangeFilter, checkedPetAndBabeSafeFilter, checkedPopularFilter, createNewArrCategory, createNewArrHeightRange, createNewArrIsEasyCare, createNewArrIsPetAndBabySafe, createNewArrIsPopular,
} from '../../store/slices/filterCatalogSlice';
import {
  filterCatalogProducts, getAllProducts, paginationCatalog, setCurrentPage,
} from '../../store/slices/catalogSlice';

function FilterCatalog() {
  const [showcheckedCategory, setShowcheckedCategory] = useState(false);
  const [showcheckedPopular, setShowcheckedPopular] = useState(false);
  const [showcheckedEasyCare, setShowcheckedEasyCare] = useState(false);
  const [showcheckedPetAndBabySafe, setShowcheckedPetAndBabySafe] = useState(false);
  const [showcheckedHeight, setShowcheckedHeight] = useState(false);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

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

    if (!checked) {
      const params = searchParams.delete('categories');
      setSearchParams(params);
    }
  };

  const handleChangePopular = (event) => {
    const { name } = event.target;
    const { checked } = event.target;

    dispatch(checkedPopularFilter({ name, checked }));

    if (!checked) {
      const params = searchParams.delete('isPopular');
      setSearchParams(params);
    }
  };

  const handleChangeEasyCare = (event) => {
    const { name } = event.target;
    const { checked } = event.target;

    dispatch(checkedEasyCareFilter({ name, checked }));

    if (!checked) {
      const params = searchParams.delete('isEasyCare');
      setSearchParams(params);
    }
  };

  const handleChangePetAndBabySafe = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    dispatch(checkedPetAndBabeSafeFilter({ name, checked }));

    if (!checked) {
      const params = searchParams.delete('isPetAndBabySafe');
      setSearchParams(params);
    }
  };

  const handleChangeHeight = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    dispatch(checkedHeightRangeFilter({ name, checked }));

    if (!checked) {
      const params = searchParams.delete('height');
      setSearchParams(params);
    }
  };

  useEffect(() => {
    const categoriesParams = searchParams.get('categories') || '';
    const isPopularParams = searchParams.get('isPopular') || '';
    const isEasyCareParams = searchParams.get('isEasyCare') || '';
    const isPetAndBabySafeParams = searchParams.get('isPetAndBabySafe') || '';
    const heightParams = searchParams.get('height') || '';

    if (categoriesParams !== '') {
      const newArrCategories = categoriesParams.split(' ');
      dispatch(createNewArrCategory(newArrCategories));
      setShowcheckedCategory(true);
    }
    if (isPopularParams !== '') {
      dispatch(createNewArrIsPopular(isPopularParams));
      setShowcheckedPopular(true);
    }

    if (isEasyCareParams !== '') {
      dispatch(createNewArrIsEasyCare(isEasyCareParams));
      setShowcheckedEasyCare(true);
    }
    if (isPetAndBabySafeParams !== '') {
      dispatch(createNewArrIsPetAndBabySafe(isPetAndBabySafeParams));
      setShowcheckedPetAndBabySafe(true);
    }
    if (heightParams !== '') {
      const newArrHeightParams = heightParams.split(' ');
      dispatch(createNewArrHeightRange(newArrHeightParams));
      setShowcheckedHeight(true);
    }
  }, []);

  useEffect(() => {
    if (categories.length !== 0) {
      searchParams.set('categories', categories.join(' '));
      setSearchParams(searchParams);
    }

    if (isPopular.length !== 0) {
      searchParams.set('isPopular', isPopular);
      setSearchParams(searchParams);
    }

    if (isEasyCare.length !== 0) {
      searchParams.set('isEasyCare', isEasyCare);
      setSearchParams(searchParams);
    }

    if (isPetAndBabySafe.length !== 0) {
      searchParams.set('isPetAndBabySafe', isPetAndBabySafe);
      setSearchParams(searchParams);
    }

    if (heightRange.length !== 0) {
      searchParams.set('height', heightRange.join(' '));
      setSearchParams(searchParams);
    }

    if (categories.length !== 0 || isPopular.length !== 0 || isEasyCare.length !== 0 || isPetAndBabySafe.length !== 0 || heightRange.length !== 0) {
      dispatch(filterCatalogProducts(filterState));
      dispatch(setCurrentPage(1));
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
      <FilterCategory handleChangeCategories={handleChangeCategories} showcheckedCategory={showcheckedCategory} setShowcheckedCategory={setShowcheckedCategory} />
      <FilterPopular handleChangePopular={handleChangePopular} showcheckedPopular={showcheckedPopular} setShowcheckedPopular={setShowcheckedPopular} />
      <FilterEasyCare handleChangeEasyCare={handleChangeEasyCare} showcheckedEasyCare={showcheckedEasyCare} setShowcheckedEasyCare={setShowcheckedEasyCare} />
      <FilterPetAndBabySafe handleChangePetAndBabySafe={handleChangePetAndBabySafe} showcheckedPetAndBabySafe={showcheckedPetAndBabySafe} setShowcheckedPetAndBabySafe={setShowcheckedPetAndBabySafe} />
      <FilterHeight handleChangeHeight={handleChangeHeight} showcheckedHeight={showcheckedHeight} setShowcheckedHeight={setShowcheckedHeight} />
      <FilterPrice />
    </div>
  );
}

export default FilterCatalog;
