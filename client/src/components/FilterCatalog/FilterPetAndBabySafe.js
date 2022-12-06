import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterPetAndBabySafe({ handleChangePetAndBabySafe }) {
  const [showcheckedPetAndBabySafe, setShowcheckedPetAndBabySafe] = useState(false);

  const checkeFilter = useSelector(store => store.filter);

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
                  checked={checkeFilter.safe}
                  name="safe"
                  onChange={handleChangePetAndBabySafe}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Safe"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkeFilter['not-safe']}
                  name="not-safe"
                  onChange={handleChangePetAndBabySafe}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Not safe"
            />
          </FormGroup>
        </div>
      )}

    </div>
  );
}

export default FilterPetAndBabySafe;
