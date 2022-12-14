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
  changePricefilter,
  checkedCategoriesFilter, checkedEasyCareFilter, checkedHeightRangeFilter, checkedPetAndBabeSafeFilter, checkedPopularFilter, createNewArrCategory, createNewArrHeightRange, createNewArrIsEasyCare, createNewArrIsPetAndBabySafe, createNewArrIsPopular, setPriceMinMaxfilter,
} from '../../store/slices/filterCatalogSlice';
import {
  filterCatalogProducts, getAllProducts, setCurrentPage,
} from '../../store/slices/catalogSlice';

function FilterCatalog() {
  const [showcheckedCategory, setShowcheckedCategory] = useState(false);
  const [showcheckedPopular, setShowcheckedPopular] = useState(false);
  const [showcheckedEasyCare, setShowcheckedEasyCare] = useState(false);
  const [showcheckedPetAndBabySafe, setShowcheckedPetAndBabySafe] = useState(false);
  const [showcheckedHeight, setShowcheckedHeight] = useState(false);
  const [showcheckedPrice, setShowcheckedPrice] = useState(false);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPageNumber = useSelector((store) => store.catalog.currentPageNumber);

  const categories = useSelector(store => store.filter.categories);
  const isPopular = useSelector(store => store.filter.isPopular);
  const isEasyCare = useSelector(store => store.filter.isEasyCare);
  const isPetAndBabySafe = useSelector(store => store.filter.isPetAndBabySafe);
  const heightRange = useSelector(store => store.filter.heightRange);
  const price = useSelector(store => store.filter.price);
  const minPrice = useSelector(store => store.filter.minPrice);
  const maxPrice = useSelector(store => store.filter.maxPrice);
  const filterState = useSelector(store => store.filter);

  const handleChangeCategories = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    dispatch(checkedCategoriesFilter({ name, checked }));
    dispatch(setCurrentPage(1));

    if (!checked) {
      const params = searchParams.delete('categories');
      setSearchParams(params);
      dispatch(setCurrentPage(1));
    }
  };

  const handleChangePopular = (event) => {
    const { name } = event.target;
    const { checked } = event.target;

    dispatch(checkedPopularFilter({ name, checked }));
    dispatch(setCurrentPage(1));

    if (!checked) {
      const params = searchParams.delete('isPopular');
      setSearchParams(params);
      dispatch(setCurrentPage(1));
    }
  };

  const handleChangeEasyCare = (event) => {
    const { name } = event.target;
    const { checked } = event.target;

    dispatch(checkedEasyCareFilter({ name, checked }));
    dispatch(setCurrentPage(1));

    if (!checked) {
      const params = searchParams.delete('isEasyCare');
      setSearchParams(params);
      dispatch(setCurrentPage(1));
    }
  };

  const handleChangePetAndBabySafe = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    dispatch(checkedPetAndBabeSafeFilter({ name, checked }));
    dispatch(setCurrentPage(1));

    if (!checked) {
      const params = searchParams.delete('isPetAndBabySafe');
      setSearchParams(params);
      dispatch(setCurrentPage(1));
    }
  };

  const handleChangeHeight = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    dispatch(checkedHeightRangeFilter({ name, checked }));
    dispatch(setCurrentPage(1));

    if (!checked) {
      const params = searchParams.delete('height');
      setSearchParams(params);
      dispatch(setCurrentPage(1));
    }
  };

  const handelSubmitPriceForm = (e) => {
    // eslint-disable-next-line prefer-destructuring
    e.minPrice = price[0];
    // eslint-disable-next-line prefer-destructuring
    e.maxPrice = price[1];
    dispatch(setPriceMinMaxfilter([e.minPrice, e.maxPrice]));
    dispatch(setCurrentPage(1));
  };

  useEffect(() => {
    const categoriesParams = searchParams.get('categories') || '';
    const isPopularParams = searchParams.get('isPopular') || '';
    const isEasyCareParams = searchParams.get('isEasyCare') || '';
    const isPetAndBabySafeParams = searchParams.get('isPetAndBabySafe') || '';
    const heightParams = searchParams.get('height') || '';
    const priceParams = searchParams.get('price') || '';
    const pageParams = searchParams.get('page') || '';

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

    if (priceParams !== '') {
      const newArrPrice = priceParams.split('-').map(el => Number(el));
      dispatch(changePricefilter(newArrPrice));
      dispatch(setPriceMinMaxfilter(newArrPrice));
    }

    if (pageParams !== '') {
      dispatch(setCurrentPage(Number(pageParams)));
    }
  }, []);

  useEffect(() => {
    if (currentPageNumber > 1) {
      searchParams.set('page', currentPageNumber);
      setSearchParams(searchParams);
    } else {
      const params = searchParams.delete('page');
      setSearchParams(params);
    }

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

    if (minPrice !== null && maxPrice !== null) {
      searchParams.set('price', [minPrice, maxPrice].join('-'));
      setSearchParams(searchParams);
      setShowcheckedPrice(true);
    }

    if (categories.length !== 0 || isPopular.length !== 0 || isEasyCare.length !== 0 || isPetAndBabySafe.length !== 0 || heightRange.length !== 0 || minPrice !== null || maxPrice !== null) {
      setTimeout(() => {
        dispatch(filterCatalogProducts(filterState, currentPageNumber));
      }, 600);
    } else {
      dispatch(getAllProducts(currentPageNumber));
    }
  }, [categories, isPopular, isEasyCare, isPetAndBabySafe, heightRange, minPrice, maxPrice, currentPageNumber]);

  return (
    <div className={styles.container}>
      <FilterCategory handleChangeCategories={handleChangeCategories} showcheckedCategory={showcheckedCategory} setShowcheckedCategory={setShowcheckedCategory} />
      <FilterPopular handleChangePopular={handleChangePopular} showcheckedPopular={showcheckedPopular} setShowcheckedPopular={setShowcheckedPopular} />
      <FilterEasyCare handleChangeEasyCare={handleChangeEasyCare} showcheckedEasyCare={showcheckedEasyCare} setShowcheckedEasyCare={setShowcheckedEasyCare} />
      <FilterPetAndBabySafe handleChangePetAndBabySafe={handleChangePetAndBabySafe} showcheckedPetAndBabySafe={showcheckedPetAndBabySafe} setShowcheckedPetAndBabySafe={setShowcheckedPetAndBabySafe} />
      <FilterHeight handleChangeHeight={handleChangeHeight} showcheckedHeight={showcheckedHeight} setShowcheckedHeight={setShowcheckedHeight} />
      <FilterPrice handelSubmitPriceForm={handelSubmitPriceForm} showcheckedPrice={showcheckedPrice} setShowcheckedPrice={setShowcheckedPrice} />
    </div>
  );
}

export default FilterCatalog;
