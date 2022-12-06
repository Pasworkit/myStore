import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterPopular({ handleChangePopular }) {
  const [showcheckedPopular, setShowcheckedPopular] = useState(false);

  const checkeFilter = useSelector(store => store.filter);

  return (

    <div className={styles.containerFilterMenu}>
      <button type="button" onClick={() => setShowcheckedPopular((prevStatus) => !prevStatus)} className={styles.EasyCareBtn}>
        Popular
        {showcheckedPopular ? <CloseCheckboxIcon /> : <ShowCheckboxIcon />}
      </button>
      {showcheckedPopular && (
        <div className={styles.CheckboxWrapper}>
          <FormGroup>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkeFilter.popular}
                  name="popular"
                  onChange={handleChangePopular}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Popular"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkeFilter['not-popular']}
                  name="not-popular"
                  onChange={handleChangePopular}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Not-popular"
            />
          </FormGroup>
        </div>
      )}

    </div>

  );
}

export default FilterPopular;
