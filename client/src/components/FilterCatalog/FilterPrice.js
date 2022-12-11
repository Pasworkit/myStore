import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';
import { changePricefilter } from '../../store/slices/filterCatalogSlice';

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

function FilterPrice({ handelSubmitPriceForm, showcheckedPrice, setShowcheckedPrice }) {
  const price = useSelector(store => store.filter.price);

  const dispatch = useDispatch();

  const handleChangePrice = (event, newValue) => {
    dispatch(changePricefilter(newValue));
  };

  const initialValues = {
    minPrice: price[0],
    maxPrice: price[1],
  };

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
              initialValues={initialValues}
              onSubmit={handelSubmitPriceForm}
            >
              <Form className={styles.priceContainer}>

                <Field
                  type="text"
                  value={price[0]}
                  name="minPrice"
                  className={styles.priceWrapper}
                />
                <p className={styles.lineFormPrice} />
                <Field
                  type="text"
                  value={price[1]}
                  name="maxPrice"
                  className={styles.priceWrapper}
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
                value={price}
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
