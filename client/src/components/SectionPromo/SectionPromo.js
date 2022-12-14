import { Button, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import styles from './SectionPromo.module.scss';
import Succulent from '../../img/PromoPic/Succulent.svg';
import Pot1 from '../../img/PromoPic/Pot1.svg';
import Pot2 from '../../img/PromoPic/Pot2.svg';

function SectionPromo() {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#456F49',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#456F49',
      },
    },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner1}>
        <div>
          <h2 className={styles.title}>Get 10% off on our Instagram!</h2>
          <div className={styles.wrapper_content1}>
            <p className={styles.subTitle}>
              Subscribe to our account and write in direct “I want a promo code“
            </p>
            <img src={Succulent} alt="succulent" className={styles.img} />
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                href="https://www.instagram.com/indoorplantshome/"
                className={styles.btn}
                target="_blank"
              >
                go to instagram
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>

      <div className={styles.banner}>
        <div>
          <h2 className={styles.title}>New collection of ceramic pots in stock</h2>
          <div className={styles.wrapper_content2}>
            <div className={styles.wrapper_img}>
              <img src={Pot2} alt="pot" />
              <img src={Pot1} alt="pot" />
            </div>
            <ThemeProvider theme={theme}>
              <Button variant="contained" href="/catalog" className={styles.btn1}>
                go to catalog
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionPromo;
