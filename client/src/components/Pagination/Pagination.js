import { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(setCurrentPage(pageUrl === '' ? 1 : Number(pageUrl)));
    dispatch(paginationCatalog());
  }, []);

  // console.log(currentPage);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (currentPage === 1) {
            return;
          }
          console.log(currentPage);
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
      <button
        type="button"
        onClick={() => {
          if (currentPage === Math.ceil(catalogProducts.length / productsPurPage)) {
            return;
          }
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
    </>
  );
}

export default Pagination;
