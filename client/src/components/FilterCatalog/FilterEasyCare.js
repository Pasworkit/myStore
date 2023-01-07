import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useSelector } from 'react-redux';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterEasyCare({ showcheckedEasyCare, setShowcheckedEasyCare, handleChangeEasyCare }) {
  const checkeFilter = useSelector(store => store.filterEasyCare);

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
                  checked={checkeFilter['easy-care-yes']}
                  name="easy-care-yes"
                  onChange={handleChangeEasyCare}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
)}
              label="Yes"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checkeFilter['easy-care-no']}
                  name="easy-care-no"
                  onChange={handleChangeEasyCare}
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
