import { useState } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../Breadсrumbs/Breadсrumbs';
import FilterCatalog from '../FilterCatalog/FilterCatalog';
import FilterIcon from '../FilterIcon/FilterIcon';
import Card from '../Card/Card';
import styles from './Catalog.module.scss';

function Catalog() {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const products = useSelector((store) => store.productsAll.products);
  const handleClickShowFilter = () => {
    setShowMobileFilter((prevStatus) => !prevStatus);
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs currenProductPage="Categories" currenProductCategory="Catalog" midLinkName="catalog" />

      <div className={styles.containerDesc}>
        <div className={styles.wrapperFilterDesc}>
          <FilterCatalog />
        </div>

        <div>
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
            {products.map((item) => (
              <li
                key={item._id}
                className={styles.wrapperProductsItem}
              >
                <Card productCardData={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
