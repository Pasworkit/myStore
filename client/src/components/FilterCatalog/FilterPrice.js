import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

  return (

    <div className={styles.containerFilterMenu}>
      <button type="button" onClick={() => setShowcheckedPrice((prevStatus) => !prevStatus)} className={styles.EasyCareBtn}>
        Price
        {showcheckedPrice ? <CloseCheckboxIcon /> : <ShowCheckboxIcon />}
      </button>
      {showcheckedPrice && (
        <>
          <div className={styles.priceContainer}>
            <p className={styles.priceWrapper}>{valuePrice[0]}</p>
            <p>-</p>
            <p className={styles.priceWrapper}>{valuePrice[1]}</p>
            <button className={styles.priceBtnSubmit} type="submit">ok</button>
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
