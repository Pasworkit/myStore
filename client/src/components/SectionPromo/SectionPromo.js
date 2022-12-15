import {
  Button, Grid, ThemeProvider,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import styles from './SectionPromo.module.scss';
import Succulent from '../../img/PromoPic/Succulent.svg';
import Pot1 from '../../img/PromoPic/Pot1.svg';

function SectionPromo() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#456F49',
      },
      secondary: {
        main: '#456F49',
      },
    },
  });

  return (
    <Grid
      p={2}
      container
      spacing={1}
      className={styles.wrapper}
      sx={{
        justifyContent: 'center',
      }}
    >

      <Grid item xs={12} md={5.5} m={2} className={styles.banner}>
        <Grid container spacing={2}>

          <Grid item xs={12} m={2}>
            <h2 className={styles.title}>Get 10% off on our Instagram!</h2>
          </Grid>

          <Grid container spacing={2}>

            <Grid
              item
              xs={6}
              height="180px"
              sx={{
                textAlign: 'center',
              }}
            >
              <img src={Succulent} alt="succulent" />
            </Grid>

            <Grid
              item
              xs={6}
              mb={2}
              sx={{
                textAlign: 'center',
              }}
            >
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  href="https://www.instagram.com/indoorplantshome/"
                  target="_blank"
                >
                  instagram
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>

        </Grid>
      </Grid>

      <Grid item xs={12} md={5.5} m={2} className={styles.banner}>

        <Grid container spacing={2}>

          <Grid item xs={12} m={2}>
            <h2 className={styles.title}>New collection of ceramic pots!</h2>
          </Grid>

          <Grid container spacing={2}>

            <Grid
              item
              xs={6}
              height="180px"
              sx={{
                textAlign: 'center',
              }}
            >
              <img src={Pot1} alt="pot" />
            </Grid>

            <Grid
              item
              xs={6}
              mb={2}
              sx={{
                textAlign: 'center',
              }}
            >
              <ThemeProvider theme={theme}>
                <Button variant="contained" href="/catalog">
                  products
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>

        </Grid>
      </Grid>

    </Grid>
  );
}

export default SectionPromo;
