import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../Breadсrumbs/Breadсrumbs';
import FilterCatalog from '../FilterCatalog/FilterCatalog';
import FilterIcon from '../FilterIcon/FilterIcon';
import Card from '../Card/Card';
import styles from './Catalog.module.scss';
import Pagination from '../Pagination/Pagination';
import PreviousIconC from './CatalogPaginationIcon/PreviousIcon/PreviousIcon';
import NextIconC from './CatalogPaginationIcon/NextIcon/NextIcon';
import {
  getAllProductsAC, nextPageCatalogeAC, paginationNumberAC, previousPageCatalogeAC,
} from '../../store/catalog/actionCreatorCatalog';

function Catalog() {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const catalogProducts = useSelector((state) => state.catalogProducts.catalogProducts);
  const currentProducts = useSelector((state) => state.catalogProducts.currentProducts);
  const productsPurPage = useSelector((store) => store.catalogProducts.productsPurPage);
  const currentPage = useSelector((state) => state.catalogProducts.currentPage);
  const dispatch = useDispatch();

  const handleClickShowFilter = () => {
    setShowMobileFilter((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    dispatch(getAllProductsAC());
    if (catalogProducts.length !== 0) {
      dispatch(paginationNumberAC());
    }
  }, []);

  return (
    <div className={styles.container}>
      <Breadcrumbs currenProductPage="Categories" currenProductCategory="Catalog" midLinkName="catalog" />

      <div className={styles.containerDesc}>
        <div className={styles.wrapperFilterDesc}>
          <FilterCatalog />
        </div>

        <div className={currentProducts.length < 6 ? styles.wrapperWidth : ''}>
          <h2 className={styles.heading}>Catalog</h2>

          <div className={styles.wrapperMobile}>
            <div className={styles.wrapperMobileBtnFilter}>
              <button onClick={handleClickShowFilter} className={styles.BtnFilterOpen} type="button">
                Filters
                <FilterIcon />
              </button>
            </div>
            {showMobileFilter && (
            <div className={styles.filtersContainerMobile}>
              <div className={styles.filtersHeadingMobileWrapper}>
                <h2 className={styles.filtersHeadingMobile}>Filters</h2>
                <button onClick={handleClickShowFilter} className={styles.BtnFilterClose} type="button">
                  <span className={styles.BtnFilterFirstLine} />
                  <span className={styles.BtnFilterSecondLine} />
                </button>
              </div>
              <FilterCatalog />
            </div>
            )}
          </div>

          <ul className={styles.wrapperProductsList}>
            {currentProducts.map((item) => (
              <li
                key={item.id}
                className={styles.wrapperProductsItem}
              >
                <Card productCardData={item} />
              </li>
            ))}
          </ul>
          <div className={styles.wrapperPagination}>
            <button
              type="button"
              onClick={() => {
                if (currentPage === 1) {
                  return;
                }
                dispatch(previousPageCatalogeAC());
                dispatch(paginationNumberAC());
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <PreviousIconC />
            </button>
            <Pagination />
            <button
              type="button"
              onClick={() => {
                if (currentPage === Math.ceil(catalogProducts.length / productsPurPage)) {
                  return;
                }
                dispatch(nextPageCatalogeAC());
                dispatch(paginationNumberAC());
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <NextIconC />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
