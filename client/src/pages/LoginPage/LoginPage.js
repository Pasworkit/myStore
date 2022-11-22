import { Form, Formik, useFormik } from 'formik';
import {
  Button, Container, Grid, TextField,
} from '@mui/material';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCustomer } from '../../API/ApiTest';
import styles from './LoginPage.module.scss';
import { setUser } from '../../store/slices/authSlice';

function LoginPage() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);
  console.log(cookies);
  const dispatch = useDispatch();

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
        navigate('/');
      } else {
        throw new Error('Invalid Credentials');
      }
      return data;
    },
  });

  return (
    <Container>
      <h1 className={styles.title}>Login</h1>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField type="text" fullWidth name="loginOrEmail" label="Login Or Email" value={formik.values.loginOrEmail} onChange={formik.handleChange} />
            </Grid>

            <Grid item md={6}>
              <TextField type="text" fullWidth name="password" label="Password" value={formik.values.password} onChange={formik.handleChange} />
            </Grid>
          </Grid>

          <Grid item md={6}>
            <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2, mb: 2 }}>Login</Button>
          </Grid>

        </Form>
      </Formik>
    </Container>
  );
}

export default LoginPage;
