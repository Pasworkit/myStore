import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterCategory() {
  const [checkedCategoryHanging, setCheckedCategoryHanging] = useState(false);
  const [checkedCategoryFlowering, setCheckedCategoryFlowering] = useState(false);
  const [checkedCategoryFernsPalms, setCheckedCategoryFernsPalms] = useState(false);
  const [checkedCategorySucculentsCacti, setCheckedCategorySucculentsCacti] = useState(false);
  const [showcheckedCategory, setShowcheckedCategory] = useState(false);

  const handleChangeCategoryHanging = (event) => {
    setCheckedCategoryHanging(event.target.checked);
  };

  const handleChangeCategoryFlowering = (event) => {
    setCheckedCategoryFlowering(event.target.checked);
  };

  const handleChangeCategoryFernsPalms = (event) => {
    setCheckedCategoryFernsPalms(event.target.checked);
  };

  const handleChangeCategorySucculentsCacti = (event) => {
    setCheckedCategorySucculentsCacti(event.target.checked);
  };

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
                checked={checkedCategoryHanging}
                onChange={handleChangeCategoryHanging}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Hanging"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkedCategoryFlowering}
                onChange={handleChangeCategoryFlowering}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Flowering"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkedCategoryFernsPalms}
                onChange={handleChangeCategoryFernsPalms}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Ferns & Palms"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkedCategorySucculentsCacti}
                onChange={handleChangeCategorySucculentsCacti}
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
