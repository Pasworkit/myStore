import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterPopular() {
  const [checkedPopularYes, setCheckedPopularYes] = useState(false);
  const [checkedPopularYNo, setCheckedPopularYNo] = useState(false);
  const [showcheckedPopular, setShowcheckedPopular] = useState(false);

  const handleChangePopularYes = (event) => {
    setCheckedPopularYes(event.target.checked);
  };

  const handleChangePopularNo = (event) => {
    setCheckedPopularYNo(event.target.checked);
  };

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
                  checked={checkedPopularYes}
                  onChange={handleChangePopularYes}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Yes"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkedPopularYNo}
                  onChange={handleChangePopularNo}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="No"
            />
          </FormGroup>
        </div>
      )}

    </div>

  );
}

export default FilterPopular;
