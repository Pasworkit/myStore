import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as yup from 'yup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form, Formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { useEffect } from 'react';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';
import { changeInputPriceFilter, changeSliderPriceFilter } from '../../store/slices/filterCatalogSlice/filterPriceSlice';
import { setCurrentPage } from '../../store/slices/catalogSlice';

function valuetext(value) {
  return `${value}$`;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#B6D5B9',
      darker: '#B6D5B9',
    },
  },
});

function FilterPrice({ showcheckedPrice, setShowcheckedPrice }) {
  const minPriceInput = useSelector(store => store.filterPrice.minPriceInput);
  const maxPriceInput = useSelector(store => store.filterPrice.maxPriceInput);
  const minPrice = useSelector(store => store.filterPrice.minPrice);
  const maxPrice = useSelector(store => store.filterPrice.maxPrice);
  const priceSlider = useSelector(store => store.filterPrice.priceSlider);

  const dispatch = useDispatch();

  const handleChangePrice = (event, newValue) => {
    dispatch(changeSliderPriceFilter(newValue));
  };

  const schemaValidation = yup.object().shape({

    minPrice: yup.number().min(0).max(500).required(),
    maxPrice: yup.number().min(0).max(500).required(),
  });

  const formik = useFormik({
    initialValues: {
      minPrice: minPriceInput,
      maxPrice: maxPriceInput,
    },

    onSubmit: (e) => {
      dispatch(changeInputPriceFilter(e));
      dispatch(setCurrentPage(1));
    },

    validationSchema: schemaValidation,
  });

  useEffect(() => {
    // eslint-disable-next-line no-return-await
    (async () => await formik.setValues({ minPrice: minPriceInput, maxPrice: maxPriceInput }))();
  }, [minPrice, maxPrice, minPriceInput, maxPriceInput]);

  return (
    <div className={styles.containerFilterMenu}>
      <button type="button" onClick={() => setShowcheckedPrice((prevStatus) => !prevStatus)} className={styles.EasyCareBtn}>
        Price
        {showcheckedPrice ? <CloseCheckboxIcon /> : <ShowCheckboxIcon />}
      </button>
      {showcheckedPrice && (
        <>
          <div>
            <Formik
              initialValues={formik.initialValues}
              validationSchema={schemaValidation}
              onSubmit={formik.handleSubmit}
            >
              <Form className={styles.priceContainer}>

                <input
                  type="text"
                  name="minPrice"
                  onChange={formik.handleChange}
                  value={formik.values.minPrice}
                  className={formik.errors.minPrice ? styles.priceWrapperError : styles.priceWrapper}
                />
                <p className={styles.lineFormPrice} />
                <input
                  type="text"
                  name="maxPrice"
                  onChange={formik.handleChange}
                  value={formik.values.maxPrice}
                  className={formik.errors.maxPrice ? styles.priceWrapperError : styles.priceWrapper}
                />
                <button className={styles.priceBtnSubmit} type="submit">ok</button>
              </Form>
            </Formik>
          </div>

          <Box sx={{
            width: 200,
            margin: '0 auto',
          }}
          >
            <ThemeProvider theme={theme}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={priceSlider}
                onChange={handleChangePrice}
                valueLabelDisplay="auto"
                getAriaValueText={debounce(valuetext, 600)}
                min={0}
                max={500}
              />
            </ThemeProvider>
          </Box>

        </>
      )}
    </div>

  );
}

export default FilterPrice;
