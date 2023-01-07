import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

function FilterHeight({ showcheckedHeight, setShowcheckedHeight, handleChangeHeight }) {
  const checkeFilter = useSelector(store => store.filterHeightRange);

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
                checked={checkeFilter.short}
                name="short"
                onChange={handleChangeHeight}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Short"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkeFilter.medium}
                name="medium"
                onChange={handleChangeHeight}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Medium"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkeFilter.high}
                name="high"
                onChange={handleChangeHeight}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="High"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkeFilter.multirange}
                name="multirange"
                onChange={handleChangeHeight}
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
