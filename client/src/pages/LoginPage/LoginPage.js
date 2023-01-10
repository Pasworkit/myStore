import { Form, Formik, useFormik } from 'formik';
import {
  Box,
  Button, Container, TextField, ThemeProvider,
} from '@mui/material';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { createTheme } from '@mui/material/styles';
import { loginCustomer, createFavorites, apdatedCart } from '../../api/api';
import styles from './LoginPage.module.scss';
import { setUser } from '../../store/slices/authSlice';

function LoginPage() {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#456F49',

      },
      secondary: {
        // This is green.A700 as hex.
        main: '#DE1818',
      },
      error: {
        // This is green.A700 as hex.
        main: '#ffff00',
      },
    },
  });

  const productsInFavorites = useSelector((store) => store.productsAll.productsInFavorites.map((product) => product._id));
  const productsInCart = useSelector((store) => store.productsAll.productsInCart.map((item) => ({
    product: item._id,
    cartQuantity: item.quantityInCart,
  })));

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    loginOrEmail: Yup.string()
      .min(3, 'Login or Email is required.')
      .max(25, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(7, 'Password must be between 7 and 30 characters')
      .max(30, 'Too Long!')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      loginOrEmail: '',
      password: '',
    },
    onSubmit: async (values) => {
      const {
        data, status,
      } = await loginCustomer(values);
      if (status === 200) {
        dispatch(setUser({
          token: data.token.replace('Bearer ', ''),
        }));
        setCookie('token', data.token.replace('Bearer ', ''));
        createFavorites(productsInFavorites, data.token.replace('Bearer ', ''));
        apdatedCart(data.token.replace('Bearer ', ''), productsInCart);
        navigate('/');
      } else {
        throw new Error('Invalid Credentials');
      }
      return data;
    },
    validationSchema: schema,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.container} sx={{ mb: 4 }}>
        <h1 className={styles.title}>Login</h1>
        <Formik
          initialValues={formik.initialValues}
          onSubmit={formik.handleSubmit}
          isValid={formik.isValid}
        >
          <Form>
            <Box>
              <Box sx={{ m: 2 }}>
                <TextField type="text" fullWidth name="loginOrEmail" label="Login Or Email" value={formik.values.loginOrEmail} onChange={formik.handleChange} />
                {formik.errors.loginOrEmail
                  ? <div className={styles.formik_error}>{formik.errors.loginOrEmail}</div> : null}
              </Box>

              <Box sx={{ m: 2 }}>
                <TextField type="password" fullWidth name="password" label="Password" value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password
                  ? <div className={styles.formik_error}>{formik.errors.password}</div> : null}
              </Box>
            </Box>

            <Box>
              <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2, mb: 4 }} disabled={!formik.isValid}>Login</Button>
            </Box>
          </Form>
        </Formik>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
