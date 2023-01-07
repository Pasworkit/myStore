import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useSelector } from 'react-redux';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterCategory({ showcheckedCategory, setShowcheckedCategory, handleChangeCategories }) {
  const checkeFilter = useSelector(store => store.filterCategories);

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
                  checked={checkeFilter.hanging}
                  name="hanging"
                  onChange={handleChangeCategories}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Hanging"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkeFilter.flowering}
                  name="flowering"
                  onChange={handleChangeCategories}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Flowering"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkeFilter['ferns-and-palms']}
                  name="ferns-and-palms"
                  onChange={handleChangeCategories}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Ferns & Palms"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkeFilter['succulents-and-cacti']}
                  name="succulents-and-cacti"
                  onChange={handleChangeCategories}
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
