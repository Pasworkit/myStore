import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';
import { filterCatalogProducts, getAllProducts, paginationCatalog } from '../../store/slices/catalogSlice';

function FilterCategory() {
  const [showcheckedCategory, setShowcheckedCategory] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsUrl = {};
  const dispatch = useDispatch();
  const allParams = searchParams.get('categories') || '';

  // const serializeQuery = (search, value) => {
  //   const params = {};

  //   params[search] = value;

  //   return params;
  // };

  const handleChangeCategoryHanging = (event) => {
    const { checked } = event.target;
    const { name } = event.target;
    if (checked) paramsUrl.categories = name;
    setSearchParams(paramsUrl);
  };

  useEffect(() => {
    if (allParams) {
      console.log(paramsUrl);
      setShowcheckedCategory(true);
      dispatch(filterCatalogProducts(allParams));
      setTimeout(() => {
        dispatch(paginationCatalog());
      }, 400);
    } else {
      dispatch(getAllProducts());
      setTimeout(() => {
        dispatch(paginationCatalog());
      }, 400);
    }
  }, [allParams]);

  // const handleChangeCategoryFlowering = (event) => {
  //   const { checked } = event.target;
  //   const { name } = event.target;
  //   if (checked) paramsUrl.categories = name;
  //   setSearchParams(paramsUrl);
  // };

  // const handleChangeCategoryFernsAndPalms = (event) => {
  //   const { checked } = event.target;
  //   const { name } = event.target;
  //   if (checked) paramsUrl.categories = name;
  //   setSearchParams(paramsUrl);
  // };
  // const handleChangeCategorySucculents = (event) => {
  //   const { checked } = event.target;
  //   const { name } = event.target;
  //   if (checked) paramsUrl.categories = name;
  //   setSearchParams(paramsUrl);
  // };
  // const [checkedCategory, setCheckedCategory] = useState({
  //   hanging: false,
  //   flowering: false,
  //   'ferns-and-palms': false,
  //   'succulents-and-cacti': false,
  // });

  // const dispatch = useDispatch();
  // const [arrayUrl, setArrayUrl] = useState([]);

  // searchParams.set('categories', arrayUrl);

  // const handleChangeCategory = (event) => {
  //   setCheckedCategory({
  //     ...checkedCategory, [event.target.name]: event.target.checked,
  //   });

  //   if (event.target.checked) {
  //     setArrayUrl([...arrayUrl, event.target.name]);
  //   } else {
  //     setArrayUrl(currentUrlName => currentUrlName.filter(el => el !== event.target.name));
  //     const delUrlCategory = searchParams.delete('categories');
  //     setSearchParams(delUrlCategory);
  //   }
  // };

  // useEffect(() => {
  //   if (arrayUrl.length) {
  //     setSearchParams({ categories: arrayUrl.join(' ') });
  //   }

  //   const paramsQuery = searchParams.get('categories');
  //   // console.log(paramsQuery);
  //   if (paramsQuery !== '') {
  //     dispatch(filterCatalogProducts(paramsQuery));
  //     setTimeout(() => {
  //       dispatch(paginationCatalog());
  //     }, 400);
  //   } else {
  //     dispatch(getAllProducts());
  //     setTimeout(() => {
  //       dispatch(paginationCatalog());
  //     }, 400);
  //   }
  // }, [arrayUrl]);

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
                checked={allParams === 'hanging'}
                name="hanging"
                // value="hanging"
                onChange={handleChangeCategoryHanging}
                inputProps={{ 'aria-label': 'controlled' }}
              />
)}
            label="Hanging"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={allParams === 'flowering'}
                name="flowering"
                // value="flowering"
                onChange={handleChangeCategoryHanging}
                inputProps={{ 'aria-label': 'controlled' }}

              />
)}
            label="Flowering"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={allParams === 'ferns-and-palms'}
                name="ferns-and-palms"
                onChange={handleChangeCategoryHanging}
                inputProps={{ 'aria-label': 'controlled' }}

              />
)}
            label="Ferns & Palms"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={allParams === 'succulents-and-cacti'}
                name="succulents-and-cacti"
                onChange={handleChangeCategoryHanging}
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
