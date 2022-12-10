import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
import {
  nextPageCatalog, prevPageCatalog, setCurrentPage,
} from '../../store/slices/catalogSlice';
import NextIconC from '../Catalog/CatalogPaginationIcon/NextIcon/NextIcon';
import PreviousIconC from '../Catalog/CatalogPaginationIcon/PreviousIcon/PreviousIcon';

import styles from './Pagination.module.scss';

function Pagination() {
  const pageNumber = [];
  // const [nextAndPrevPage, setNextAndPrevPage] = useState(1);
  const productsQuantity = useSelector((store) => store.catalog.productsQuantity);
  const productsPurPage = useSelector((store) => store.catalog.productsPurPage);
  const currentPageNumber = useSelector((store) => store.catalog.currentPageNumber);
  // const [searchParams, setSearchParams] = useSearchParams();

  // const pageUrl = searchParams.get('page') || '';
  const dispatch = useDispatch();

  for (let i = 1; i <= Math.ceil(productsQuantity / productsPurPage); i += 1) {
    pageNumber.push(i);
  }

  const handleClickPadination = (num) => {
    dispatch(setCurrentPage(num));
    // setNextAndPrevPage(num);
    // if (num !== 1) {
    //   setSearchParams({ page: num });
    // } else {
    //   const deletePageUtl = searchParams.delete('page') || '';

    //   setSearchParams(deletePageUtl);
    // }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const setNextPageUrl = () => {
    // setNextAndPrevPage(curentNumber => curentNumber + 1);

    // setSearchParams({ page: pageNumber[nextAndPrevPage] });
  };

  const setPrevPageUrl = () => {
    // setNextAndPrevPage(curentNumber => curentNumber - 1);
    // const newPrevNum = nextAndPrevPage - 1;

    // if (newPrevNum !== 1) {
    //   setSearchParams({ page: newPrevNum });
    // } else {
    //   const deletePageUtl = searchParams.delete('page') || '';

    //   setSearchParams(deletePageUtl);
    // }
  };

  useEffect(() => {
    // dispatch(setCurrentPage(pageUrl === '' ? 1 : Number(pageUrl)));

    // setNextAndPrevPage(pageUrl === '' ? 1 : Number(pageUrl));
  }, []);

  return (
    <>
      {productsQuantity > 9 && (
      <button
        type="button"
        onClick={() => {
          if (currentPageNumber === 1) {
            return;
          }
          setPrevPageUrl();
          dispatch(prevPageCatalog());
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <PreviousIconC />
      </button>
      )}

      <ul className={styles.listPagination}>
        {pageNumber.map((number) => (
          <li
            className={currentPageNumber === number ? styles.itemActivePagination : ''}
            key={number}
          >
            <button
              className={styles.buttonNumber}
              type="button"
              onClick={(event) => {
                event.preventDefault();
                handleClickPadination(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      {productsQuantity > 9 && (
      <button
        type="button"
        onClick={() => {
          if (currentPageNumber === Math.ceil(productsQuantity / productsPurPage)) {
            return;
          }
          setNextPageUrl();
          dispatch(nextPageCatalog());
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <NextIconC />
      </button>
      )}

    </>
  );
}

export default Pagination;
