import { Form, Formik, useFormik } from 'formik';
import {
  Button, Container, Grid, TextField, ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import * as Yup from 'yup';
import { useCookies } from 'react-cookie';
import {
  createCustomer, loginCustomer, createFavorites, apdatedCart,
} from '../../api/api';
import styles from './SignUpPage.module.scss';
import { regUser, setUser } from '../../store/slices/authSlice';

function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);
  const phoneRegExp = /^\+?[1-9][0-9]{11}$/;

  const productsInFavorites = useSelector((store) => store.productsAll.productsInFavorites.map((product) => product._id));
  const productsInCart = useSelector((store) => store.productsAll.productsInCart.map((item) => ({
    product: item._id,
    cartQuantity: item.quantityInCart,
  })));

  const log = async ({ loginOrEmail, password }) => {
    const {
      data, status,
    } = await loginCustomer({ loginOrEmail, password });
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
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#456F49',
      },
      secondary: {
        main: '#DE1818',
      },
    },
  });

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'First Name must be between 2 and 25 characters')
      .max(25, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Last Name must be between 2 and 25 characters')
      .max(25, 'Too Long!')
      .required('Required'),
    login: Yup.string()
      .min(3, 'Login must be between 3 and 10 characters!')
      .max(10, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Mail is required'),
    password: Yup.string()
      .min(7, 'Password must be between 7 and 30 characters')
      .max(30, 'Too Long!')
      .required('Required'),
    telephone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
      telephone: '+38',
    },
    onSubmit: async (values, { resetForm }) => {
      const { status, data } = await createCustomer(values);
      if (status === 200) {
        dispatch(regUser({
          id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          login: data.login,
          email: data.email,
          password: data.password,
          telephone: data.telephone,
        }));

        await log({ loginOrEmail: values.login, password: values.password });

        navigate('/');
        resetForm();
      } else {
        throw new Error('Invalid');
      }
    },
    validationSchema: schema,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.container} sx={{ mb: 4 }}>
        <h1 className={styles.title}>Sign Up</h1>
        <Formik
          initialValues={formik.initialValues}
          onSubmit={formik.handleSubmit}
          isValid={formik.isValid}
        >
          <Form>
            <Grid container spacing={2}>

              <Grid item md={6}>
                <TextField type="text" fullWidth name="firstName" label="Name" value={formik.values.firstName} onChange={formik.handleChange} />
                {formik.errors.firstName
                  ? <div className={styles.formik_error}>{formik.errors.firstName}</div> : null}
              </Grid>

              <Grid item md={6}>
                <TextField type="text" fullWidth name="lastName" label="Last Name" value={formik.values.lastName} onChange={formik.handleChange} />
                {formik.errors.lastName
                  ? <div className={styles.formik_error}>{formik.errors.lastName}</div> : null}
              </Grid>

              <Grid item md={6}>
                <TextField type="text" fullWidth name="login" label="Login" value={formik.values.login} onChange={formik.handleChange} />
                {formik.errors.login
                  ? <div className={styles.formik_error}>{formik.errors.login}</div> : null}
              </Grid>

              <Grid item md={6}>
                <TextField type="password" fullWidth name="password" label="Password" value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password
                  ? <div className={styles.formik_error}>{formik.errors.password}</div> : null}
              </Grid>

              <Grid item md={6}>
                <TextField type="text" fullWidth name="email" label="Email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email
                  ? <div className={styles.formik_error}>{formik.errors.email}</div> : null}
              </Grid>

              <Grid item md={6}>
                <TextField type="text" fullWidth name="telephone" label="Telephone" value={formik.values.telephone} onChange={formik.handleChange} />
                {formik.errors.telephone
                  ? <div className={styles.formik_error}>{formik.errors.telephone}</div> : null}
              </Grid>

            </Grid>
            <Grid item md={6}>
              <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2, mb: 2 }} disabled={!formik.isValid}>Sign Up</Button>
            </Grid>

          </Form>
        </Formik>
      </Container>
    </ThemeProvider>
  );
}

export default SignUpPage;
