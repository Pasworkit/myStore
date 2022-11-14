import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterHeight() {
  const [checkedHeightShort, setCheckedHeightShort] = useState(false);
  const [checkedHeightMedium, setCheckedHeightMedium] = useState(false);
  const [checkedHeightHigh, setCheckedHeightHigh] = useState(false);
  const [checkedHeightMultirange, setCheckedHeightMultirange] = useState(false);
  const [showcheckedHeight, setShowcheckedHeight] = useState(false);

  const handleChangeHeightShort = (event) => {
    setCheckedHeightShort(event.target.checked);
  };

  const handleChangeHeightMedium = (event) => {
    setCheckedHeightMedium(event.target.checked);
  };

  const handleChangeHeightHigh = (event) => {
    setCheckedHeightHigh(event.target.checked);
  };

  const handleChangeHeightMultirange = (event) => {
    setCheckedHeightMultirange(event.target.checked);
  };

  return (
    <div className={styles.containerFilterMenu}>
      <button type="button" onClick={() => setShowcheckedHeight((prevStatus) => !prevStatus)} className={styles.EasyCareBtn}>
        Height
        {showcheckedHeight ? <CloseCheckboxIcon /> : <ShowCheckboxIcon />}
      </button>
      {showcheckedHeight && (
      <div className={styles.CheckboxWrapper}>
        <FormGroup>
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkedHeightShort}
                onChange={handleChangeHeightShort}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Short"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkedHeightMedium}
                onChange={handleChangeHeightMedium}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Medium"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkedHeightHigh}
                onChange={handleChangeHeightHigh}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="High"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkedHeightMultirange}
                onChange={handleChangeHeightMultirange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Multirange"
          />
        </FormGroup>
      </div>
      )}

    </div>
  );
}

export default FilterHeight;
