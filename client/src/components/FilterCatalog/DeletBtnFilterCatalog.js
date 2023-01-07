import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../pages/CatalogPage/CatalogPage.module.scss';

import { setCurrentPage } from '../../store/slices/catalogSlice';
import { deleteCategorisFilter } from '../../store/slices/filterCatalogSlice/filterCategoriesSlice';
import { deleteIsPopularFilter } from '../../store/slices/filterCatalogSlice/filterPopularSlice';
import { deleteIsEasyCareFilter } from '../../store/slices/filterCatalogSlice/filterEasyCareSlice';
import { deletePetAndBabeSafeFilter } from '../../store/slices/filterCatalogSlice/filterPetAndBabeSafeSlice';
import { deleteHeightRangeFilter } from '../../store/slices/filterCatalogSlice/filterHeightRangeSlice';
import { deletePriceValueFilter } from '../../store/slices/filterCatalogSlice/filterPriceSlice';

function DeletBtnFilterCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const categories = searchParams.get('categories') || '';
  const isPopular = searchParams.get('isPopular') || '';
  const isEasyCare = searchParams.get('isEasyCare') || '';
  const isPetAndBabySafe = searchParams.get('isPetAndBabySafe') || '';
  const heightParams = searchParams.get('height') || '';
  const price = searchParams.get('price') || '';
  const minPrice = useSelector(store => store.filterPrice.minPrice);
  const maxPrice = useSelector(store => store.filterPrice.maxPrice);

  return (
    <div className={styles.wrapperDelFilterBtn}>
      {categories.includes('hanging') ? (
        <div className={styles.btnFilterCatalogName}>
          Hanging
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteCategorisFilter('hanging'));
              const categoriesDel = searchParams.delete('categories');
              setSearchParams(categoriesDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {categories.includes('flowering') ? (
        <div className={styles.btnFilterCatalogName}>
          Flowering
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteCategorisFilter('flowering'));
              const categoriesDel = searchParams.delete('categories');
              setSearchParams(categoriesDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {categories.includes('ferns-and-palms') ? (
        <div className={styles.btnFilterCatalogName}>
          Ferns & Palms
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteCategorisFilter('ferns-and-palms'));
              const categoriesDel = searchParams.delete('categories');
              setSearchParams(categoriesDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {categories.includes('succulents-and-cacti') ? (
        <div className={styles.btnFilterCatalogName}>
          Succulents & Cacti
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteCategorisFilter('succulents-and-cacti'));
              const categoriesDel = searchParams.delete('categories');
              setSearchParams(categoriesDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {isPopular.includes('true') ? (
        <div className={styles.btnFilterCatalogName}>
          Popular
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteIsPopularFilter({ name: 'popular', bool: 'true' }));
              const isPopularDel = searchParams.delete('isPopular');
              setSearchParams(isPopularDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {isPopular.includes('false') ? (
        <div className={styles.btnFilterCatalogName}>
          Not-Popular
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteIsPopularFilter({ name: 'not-popular', bool: 'false' }));
              const isPopularDel = searchParams.delete('isPopular');
              setSearchParams(isPopularDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {isEasyCare.includes('true') ? (
        <div className={styles.btnFilterCatalogName}>
          Yes
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteIsEasyCareFilter({ name: 'easy-care-yes', bool: 'true' }));
              const isEasyCareDel = searchParams.delete('isEasyCare');
              setSearchParams(isEasyCareDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {isEasyCare.includes('false') ? (
        <div className={styles.btnFilterCatalogName}>
          No
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteIsEasyCareFilter({ name: 'easy-care-no', bool: 'false' }));
              const isEasyCareDel = searchParams.delete('isEasyCare');
              setSearchParams(isEasyCareDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {isPetAndBabySafe.includes('true') ? (
        <div className={styles.btnFilterCatalogName}>
          Safe
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deletePetAndBabeSafeFilter({ name: 'safe', bool: 'true' }));
              const isPetAndBabySafeDel = searchParams.delete('isPetAndBabySafe');
              setSearchParams(isPetAndBabySafeDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {isPetAndBabySafe.includes('false') ? (
        <div className={styles.btnFilterCatalogName}>
          Not safe
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deletePetAndBabeSafeFilter({ name: 'not-safe', bool: 'false' }));
              const isPetAndBabySafeDel = searchParams.delete('isPetAndBabySafe');
              setSearchParams(isPetAndBabySafeDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}

      {heightParams.includes('short') ? (
        <div className={styles.btnFilterCatalogName}>
          Short
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteHeightRangeFilter('short'));
              const heightDel = searchParams.delete('height');
              setSearchParams(heightDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {heightParams.includes('medium') ? (
        <div className={styles.btnFilterCatalogName}>
          Medium
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteHeightRangeFilter('medium'));
              const heightDel = searchParams.delete('height');
              setSearchParams(heightDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {heightParams.includes('high') ? (
        <div className={styles.btnFilterCatalogName}>
          High
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteHeightRangeFilter('high'));
              const heightDel = searchParams.delete('height');
              setSearchParams(heightDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {heightParams.includes('multirange') ? (
        <div className={styles.btnFilterCatalogName}>
          Multirange
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deleteHeightRangeFilter('multirange'));
              const heightDel = searchParams.delete('height');
              setSearchParams(heightDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
      {minPrice !== null && maxPrice !== null ? (
        <div className={styles.btnFilterCatalogName}>
          {price}
          <button
            type="button"
            className={styles.btnDelFilterName}
            onClick={() => {
              dispatch(deletePriceValueFilter({ startPrice: [0, 500], startValue: null }));
              const priceDel = searchParams.delete('price');
              setSearchParams(priceDel);
              dispatch(setCurrentPage(1));
            }}
          >
            <span className={styles.btnDelFilterNameSpan} />
            <span className={styles.btnDelFilterNameSpan} />
          </button>
        </div>
      ) : ''}
    </div>
  );
}

export default DeletBtnFilterCatalog;
