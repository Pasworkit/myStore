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

import { checkedCategoriesFilter, createNewArrCategory } from '../../store/slices/filterCatalogSlice/filterCategoriesSlice';
import {
  filterCatalogProducts, getAllProducts, setCurrentPage,
} from '../../store/slices/catalogSlice';
import { checkedPopularFilter, createNewArrIsPopular } from '../../store/slices/filterCatalogSlice/filterPopularSlice';
import { checkedEasyCareFilter, createNewArrIsEasyCare } from '../../store/slices/filterCatalogSlice/filterEasyCareSlice';
import { checkedPetAndBabeSafeFilter, createNewArrIsPetAndBabySafe } from '../../store/slices/filterCatalogSlice/filterPetAndBabeSafeSlice';
import { checkedHeightRangeFilter, createNewArrHeightRange } from '../../store/slices/filterCatalogSlice/filterHeightRangeSlice';
import { changeSliderPriceFilter, createNewPriceFilter } from '../../store/slices/filterCatalogSlice/filterPriceSlice';

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

  const categories = useSelector(store => store.filterCategories.categories);
  const isPopular = useSelector(store => store.filterPopular.isPopular);
  const isEasyCare = useSelector(store => store.filterEasyCare.isEasyCare);
  const isPetAndBabySafe = useSelector(store => store.filterPetAndBabeSafe.isPetAndBabySafe);
  const heightRange = useSelector(store => store.filterHeightRange.heightRange);
  const minPrice = useSelector(store => store.filterPrice.minPrice);
  const maxPrice = useSelector(store => store.filterPrice.maxPrice);

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
      dispatch(createNewPriceFilter(newArrPrice));
      dispatch(changeSliderPriceFilter(newArrPrice));
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
        dispatch(filterCatalogProducts({
          categories, isPopular, isEasyCare, isPetAndBabySafe, heightRange, minPrice, maxPrice,
        }, currentPageNumber));
      }, 500);
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
      <FilterPrice showcheckedPrice={showcheckedPrice} setShowcheckedPrice={setShowcheckedPrice} />
    </div>
  );
}

export default FilterCatalog;
