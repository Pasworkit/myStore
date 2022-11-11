import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterEasyCare() {
  const [checkedEasyCareYes, setCheckedEasyCareYes] = useState(false);
  const [checkedEasyCareYNo, setCheckedEasyCareYNo] = useState(false);
  const [showcheckedEasyCare, setShowcheckedEasyCare] = useState(false);

  const handleChangeEasyCareYes = (event) => {
    setCheckedEasyCareYes(event.target.checked);
  };

  const handleChangeEasyCareNo = (event) => {
    setCheckedEasyCareYNo(event.target.checked);
  };

  return (

    <div className={styles.containerFilterMenu}>
      <button type="button" onClick={() => setShowcheckedEasyCare((prevStatus) => !prevStatus)} className={styles.EasyCareBtn}>
        Easy-care
        {showcheckedEasyCare ? <CloseCheckboxIcon /> : <ShowCheckboxIcon />}
      </button>
      {showcheckedEasyCare && (
        <div className={styles.CheckboxWrapper}>
          <FormGroup>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkedEasyCareYes}
                  onChange={handleChangeEasyCareYes}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Yes"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkedEasyCareYNo}
                  onChange={handleChangeEasyCareNo}
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

export default FilterEasyCare;
