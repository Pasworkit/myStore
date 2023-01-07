import { useSelector, useDispatch } from 'react-redux';
import {
  nextPageCatalog, prevPageCatalog, setCurrentPage,
} from '../../store/slices/catalogSlice';
import NextIconC from './NextIcon/NextIcon';
import PreviousIconC from './PreviousIcon/PreviousIcon';

import styles from './Pagination.module.scss';

function Pagination() {
  const pageNumber = [];

  const productsQuantity = useSelector((store) => store.catalog.productsQuantity);
  const productsPurPage = useSelector((store) => store.catalog.productsPurPage);
  const currentPageNumber = useSelector((store) => store.catalog.currentPageNumber);

  const dispatch = useDispatch();

  for (let i = 1; i <= Math.ceil(productsQuantity / productsPurPage); i += 1) {
    pageNumber.push(i);
  }

  const handleClickPadination = (num) => {
    dispatch(setCurrentPage(num));

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {productsQuantity > 9 && (
      <button
        type="button"
        onClick={() => {
          if (currentPageNumber === 1) {
            return;
          }
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
