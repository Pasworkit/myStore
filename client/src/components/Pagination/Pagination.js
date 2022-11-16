import { useSelector, useDispatch } from 'react-redux';
import { paginationNumberAC, setCurrentPageAC } from '../../store/catalog/actionCreatorCatalog';
import styles from './Pagination.module.scss';

function Pagination() {
  const pageNumber = [];
  const catalogProducts = useSelector((store) => store.catalogProducts.catalogProducts);
  const productsPurPage = useSelector((store) => store.catalogProducts.productsPurPage);
  const currentPage = useSelector((store) => store.catalogProducts.currentPage);

  const dispatch = useDispatch();

  for (let i = 1; i <= Math.ceil(catalogProducts.length / productsPurPage); i += 1) {
    pageNumber.push(i);
  }

  const handleClickPadination = (num) => {
    dispatch(setCurrentPageAC(num));
    dispatch(paginationNumberAC());
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
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
  );
}

export default Pagination;
