import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  nextPageCatalog, paginationCatalog, prevPageCatalog, setCurrentPage,
} from '../../store/slices/catalogSlice';
import NextIconC from '../Catalog/CatalogPaginationIcon/NextIcon/NextIcon';
import PreviousIconC from '../Catalog/CatalogPaginationIcon/PreviousIcon/PreviousIcon';

import styles from './Pagination.module.scss';

function Pagination() {
  const pageNumber = [];
  const [nextAndPrevPage, setNextAndPrevPage] = useState(1);
  const catalogProducts = useSelector((store) => store.catalog.catalogProducts);
  const productsPurPage = useSelector((store) => store.catalog.productsPurPage);
  const currentPage = useSelector((store) => store.catalog.currentPage);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageUrl = searchParams.get('page') || '';
  const dispatch = useDispatch();

  for (let i = 1; i <= Math.ceil(catalogProducts.length / productsPurPage); i += 1) {
    pageNumber.push(i);
  }

  const handleClickPadination = (num) => {
    dispatch(setCurrentPage(num));
    dispatch(paginationCatalog());
    setNextAndPrevPage(num);
    if (num !== 1) {
      setSearchParams({ page: num });
    } else {
      const deletePageUtl = searchParams.delete('page') || '';

      setSearchParams(deletePageUtl);
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const setNextPageUrl = () => {
    setNextAndPrevPage(curentNumber => curentNumber + 1);

    setSearchParams({ page: pageNumber[nextAndPrevPage] });
  };

  const setPrevPageUrl = () => {
    setNextAndPrevPage(curentNumber => curentNumber - 1);
    const newPrevNum = nextAndPrevPage - 1;

    if (newPrevNum !== 1) {
      setSearchParams({ page: newPrevNum });
    } else {
      const deletePageUtl = searchParams.delete('page') || '';

      setSearchParams(deletePageUtl);
    }
  };

  useEffect(() => {
    dispatch(setCurrentPage(pageUrl === '' ? 1 : Number(pageUrl)));
    dispatch(paginationCatalog());

    setNextAndPrevPage(pageUrl === '' ? 1 : Number(pageUrl));
  }, []);

  return (
    <>
      {catalogProducts.length > 9 && (
      <button
        type="button"
        onClick={() => {
          if (currentPage === 1) {
            return;
          }
          setPrevPageUrl();
          dispatch(prevPageCatalog());
          dispatch(paginationCatalog());
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
            className={currentPage === number ? styles.itemActivePagination : ''}
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
      {catalogProducts.length > 9 && (
      <button
        type="button"
        onClick={() => {
          if (currentPage === Math.ceil(catalogProducts.length / productsPurPage)) {
            return;
          }
          setNextPageUrl();
          dispatch(nextPageCatalog());
          dispatch(paginationCatalog());
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
