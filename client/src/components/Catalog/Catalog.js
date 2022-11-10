import Breadcrumbs from '../Breadсrumbs/Breadсrumbs';
import FilterCatalog from '../FilterCatalog/FilterCatalog';
import FilterIcon from '../FilterIcon/FilterIcon';
import styles from './Catalog.module.scss';

function Catalog() {
  return (
    <div className={styles.container}>
      <Breadcrumbs currenProductPage="Catalog" currenProductCategory="Shop" midLinkName="shop" />

      <div>
        <h2 className={styles.heading}>Shop page</h2>

        <div className={styles.wrapperMobile}>
          <div className={styles.wrapperMobileBtnFilter}>
            <button className={styles.BtnFilterOpen} type="button">
              Filters
              <FilterIcon />
            </button>
          </div>

          <div>
            <div className={styles.filtersHeadingMobileWrapper}>
              <h2 className={styles.filtersHeadingMobile}>Filters</h2>
              <button className={styles.BtnFilterClose} type="button">
                <span className={styles.BtnFilterFirstLine} />
                <span className={styles.BtnFilterSecondLine} />
              </button>
            </div>
            <FilterCatalog />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Catalog;
