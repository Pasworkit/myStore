import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Field, Form, Formik } from 'formik';
import ShowCheckboxIcon from '../FilterIcon/ShowCheckboxIcon';
import CloseCheckboxIcon from '../FilterIcon/CloseCheckboxIcon';
import styles from './FilterCatalog.module.scss';

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

function FilterPrice() {
  const [showcheckedPrice, setShowcheckedPrice] = useState(false);

  const [valuePrice, setValuePrice] = useState([0, 100]);

  const handleChangePrice = (event, newValue) => {
    setValuePrice(newValue);
  };

  const handelSubmitPriceForm = (e) => {
    // eslint-disable-next-line prefer-destructuring
    e.minPrice = valuePrice[0];
    // eslint-disable-next-line prefer-destructuring
    e.maxPrice = valuePrice[1];
    console.log(e);
  };

  const initialValues = {
    minPrice: 0,
    maxPrice: 0,
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
                  disabled
                  value={valuePrice[0]}
                  name="minPrice"
                  className={styles.priceWrapper}
                />
                <p className={styles.lineFormPrice} />
                <Field type="text" disabled value={valuePrice[1]} name="maxPrice" className={styles.priceWrapper} />
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
                value={valuePrice}
                onChange={handleChangePrice}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </ThemeProvider>
          </Box>

        </>
      )}
    </div>

  );
}

export default FilterPrice;
