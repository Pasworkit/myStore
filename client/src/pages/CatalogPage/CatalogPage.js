import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './CatalogPage.module.scss';
import DeletBtnFilterCatalog from '../../components/FilterCatalog/DeletBtnFilterCatalog';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card';
import FilterIcon from '../../components/FilterIcon/FilterIcon';
import Breadcrumbs from '../../components/Breadсrumbs/Breadсrumbs';
import FilterCatalog from '../../components/FilterCatalog/FilterCatalog';

function CatalogPage() {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const catalogProducts = useSelector((state) => state.catalog.catalogProducts);

  const handleClickShowFilter = () => {
    setShowMobileFilter((prevStatus) => !prevStatus);
  };

  const catalogProductsItem = catalogProducts.map((item) => {
    const { _id: idItem } = item;
    return (
      <li
        key={idItem}
        className={styles.wrapperProductsItem}
      >
        <Card productCardData={item} />
      </li>
    );
  });

  return (
    <main className={styles.container}>
      <Breadcrumbs currenProductPage="" currenProductCategory="Catalog" midLinkName="catalog" />

      <div className={styles.containerDesc}>
        <div className={styles.wrapperFilterDesc}>
          <FilterCatalog />
        </div>

        <div className={catalogProducts.length < 4 ? styles.wrapperWidth : ''}>
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
          <DeletBtnFilterCatalog />
          {catalogProducts.length === 0 ? <h2 className={styles.catalogNotFound}>Products not found</h2> : ''}
          <ul className={styles.wrapperProductsList}>
            {catalogProductsItem}
          </ul>
          <div className={styles.wrapperPagination}>
            <Pagination />
          </div>

        </div>
      </div>
    </main>
  );
}
export default CatalogPage;
