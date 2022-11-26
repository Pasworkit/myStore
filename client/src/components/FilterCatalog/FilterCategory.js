import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';
// import {
//   filterCategoryCatalogAC, paginationProductsNumberAC, setCurrentPageAC,
// } from '../../store/catalog/actionCreatorCatalog';

function FilterCategory() {
  const [checkedCategory, setCheckedCategory] = useState({
    hanging: false,
    flowering: false,
    'fern-and-palms': false,
    'succulents-and-cacti': false,
  });

  const [searchHanging, setSearchHanging] = useState(false);
  const [searshFlowering, setSearchFlowering] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const [showcheckedCategory, setShowcheckedCategory] = useState(false);

  // const dispatch = useDispatch();

  const paramsQuery = searchParams.get('categories') || [];
  const arrayUrl = [];

  const handeleCheckedHanging = (event) => {
    const hanging = event.target.name;
    setSearchHanging(event.target.checked);
    if (event.target.checked) {
      paramsQuery.push(hanging);
      // console.log(paramsQuery);
    }
    // eslint-disable-next-line no-undef

    // setSearchParams({ categories: `${hanging}` });
  };

  const handeleCheckedFlowering = (event) => {
    const flowering = event.target.name;
    setSearchFlowering(event.target.checked);
    if (event.target.checked) {
      paramsQuery.push(flowering);
    }
    // console.log(paramsQuery);
    setSearchParams({ categories: 'flowering, hanging' });
  };

  const handleChangeCategory = (event) => {
    setCheckedCategory({
      ...checkedCategory, [event.target.name]: event.target.checked,
    });

    if (event.target.checked) {
      arrayUrl.push(event.target.name);
    }
    console.log(event.target.checked);
    console.log(arrayUrl);

    // const paramsQuerySet = searchParams.set('categories', event.target.name);

    // setSearchParams({ categories: event.target.name });
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
                checked={searchHanging}
                name="hanging"
                // value="hanging"
                onChange={handeleCheckedHanging}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Hanging"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={searshFlowering}
                name="flowering"
                // value="flowering"
                onChange={handeleCheckedFlowering}
                inputProps={{ 'aria-label': 'controlled' }}

              />
)}
            label="Flowering"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkedCategory.fernsPalms}
                name="fern-and-palms"
                onChange={handleChangeCategory}
                inputProps={{ 'aria-label': 'controlled' }}

              />
)}
            label="Ferns & Palms"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={checkedCategory.SucculentsCacti}
                name="succulents-and-cacti"
                onChange={handleChangeCategory}
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
