import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';
import {
  filterCategoryCatalogAC, paginationProductsNumberAC, setCurrentPageAC,
} from '../../store/catalog/actionCreatorCatalog';

function FilterCategory() {
  const [checkedCategory, setCheckedCategory] = useState({
    Hanging: false,
    Flowering: false,
    fernsPalms: false,
    SucculentsCacti: false,
  });
  const [checkedCategoryName, setCheckedCategoryName] = useState({
    Hanging: '',
    Flowering: '',
    fernsPalms: '',
    SucculentsCacti: '',
  });

  const [showcheckedCategory, setShowcheckedCategory] = useState(false);

  const dispatch = useDispatch();

  const filterParamsCategory = () => {
    // if (checked) {
    dispatch(filterCategoryCatalogAC(checkedCategoryName));
    setTimeout(() => {
      dispatch(setCurrentPageAC(1));
      dispatch(paginationProductsNumberAC());
    }, 200);
    // } else {
    //   dispatch(getAllProductsAC());
    //   setTimeout(() => {
    //     dispatch(paginationProductsNumberAC());
    //   }, 200);
    // }
  };

  const handleChangeCategory = (event) => {
    setCheckedCategory({
      ...checkedCategory, [event.target.name]: event.target.checked,
    });
    setCheckedCategoryName({
      ...checkedCategoryName, [event.target.name]: event.target.value,
    });
    filterParamsCategory();
  };

  const {
    Hanging,
    Flowerin,
    fernsPalms,
    SucculentsCacti,
  } = checkedCategory;

  return (
    <div className={styles.containerFilterMenu}>
      <button type="button" onClick={() => setShowcheckedCategory((prevStatus) => !prevStatus)} className={styles.EasyCareBtn}>
        Category
        {showcheckedCategory ? <CloseCheckboxIcon /> : <ShowCheckboxIcon />}
      </button>
      {showcheckedCategory && (
      <div className={styles.CheckboxWrapper}>
        <FormGroup>
          <FormControlLabel
            control={(
              <Checkbox
                checked={Hanging}
                name="Hanging"
                value="Hanging"
                onChange={handleChangeCategory}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Hanging"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={Flowerin}
                name="Flowering"
                value="Flowering"
                onChange={handleChangeCategory}
                inputProps={{ 'aria-label': 'controlled' }}

              />
)}
            label="Flowering"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={fernsPalms}
                name="fernsPalms"
                onChange={handleChangeCategory}
                inputProps={{ 'aria-label': 'controlled' }}

              />
)}
            label="Ferns & Palms"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={SucculentsCacti}
                name="SucculentsCacti"
                onChange={handleChangeCategory}
                inputProps={{ 'aria-label': 'controlled' }}

              />
)}
            label="Succulents & Cacti"
          />
        </FormGroup>
      </div>
      )}

    </div>
  );
}

export default FilterCategory;
