import { useState } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../Breadсrumbs/Breadсrumbs';
import FilterCatalog from '../FilterCatalog/FilterCatalog';
import FilterIcon from '../FilterIcon/FilterIcon';
import Card from '../Card/Card';
import styles from './Catalog.module.scss';

function Catalog() {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const products = useSelector((state) => state.productsAll.products);

  const handleClickShowFilter = () => {
    setShowMobileFilter((prevStatus) => !prevStatus);
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs currenProductPage="Catalog" currenProductCategory="Shop" midLinkName="shop" />

      <div>
        <h2 className={styles.heading}>Shop page</h2>

        <div className={styles.wrapperMobile}>
          <div className={styles.wrapperMobileBtnFilter}>
            <button onClick={handleClickShowFilter} className={styles.BtnFilterOpen} type="button">
              Filters
              <FilterIcon />
            </button>
          </div>
          {showMobileFilter && (
          <div>
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

        <div className={styles.wrapperProducts}>
          {products.map((item) => <Card key={item.id} productCardData={item} />)}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
