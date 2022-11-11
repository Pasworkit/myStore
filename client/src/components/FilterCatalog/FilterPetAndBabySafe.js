import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterPetAndBabySafe() {
  const [checkedPetAndBabySafeYes, setCheckedPetAndBabySafeYes] = useState(false);
  const [checkedPetAndBabySafeYNo, setCheckedPetAndBabySafeYNo] = useState(false);
  const [showcheckedPetAndBabySafe, setShowcheckedPetAndBabySafe] = useState(false);

  const handleChangePetAndBabySafeYes = (event) => {
    setCheckedPetAndBabySafeYes(event.target.checked);
  };

  const handleChangePetAndBabySafeNo = (event) => {
    setCheckedPetAndBabySafeYNo(event.target.checked);
  };

  return (
    <div className={styles.containerFilterMenu}>
      <button type="button" onClick={() => setShowcheckedPetAndBabySafe((prevStatus) => !prevStatus)} className={styles.EasyCareBtn}>
        Pet and baby safe
        {showcheckedPetAndBabySafe ? <CloseCheckboxIcon /> : <ShowCheckboxIcon />}
      </button>
      {showcheckedPetAndBabySafe && (
        <div className={styles.CheckboxWrapper}>
          <FormGroup>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkedPetAndBabySafeYes}
                  onChange={handleChangePetAndBabySafeYes}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Yes"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkedPetAndBabySafeYNo}
                  onChange={handleChangePetAndBabySafeNo}
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

export default FilterPetAndBabySafe;
