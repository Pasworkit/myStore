import { Form, Formik, useFormik } from 'formik';
import {
  Button, Container, Grid, TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createCustomer } from '../../API/ApiTest';
import styles from './SignUpPage.module.scss';

function SignUpPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
      telephone: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const { status } = await createCustomer(values);
      if (status === 200) {
        navigate('/');
        resetForm();
      } else {
        throw new Error('Invalid');
      }
    },
  });

  return (
    <Container>
      <h1 className={styles.title}>Sign Up</h1>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
      >
        <Form>
          <Grid container spacing={2}>

            <Grid item md={6}>
              <TextField type="text" fullWidth name="firstName" label="Name" value={formik.values.firstName} onChange={formik.handleChange} />
            </Grid>

            <Grid item md={6}>
              <TextField type="text" fullWidth name="lastName" label="Last Name" value={formik.values.lastName} onChange={formik.handleChange} />
            </Grid>

            <Grid item md={6}>
              <TextField type="text" fullWidth name="login" label="Login" value={formik.values.login} onChange={formik.handleChange} />
            </Grid>

            <Grid item md={6}>
              <TextField type="text" fullWidth name="password" label="Password" value={formik.values.password} onChange={formik.handleChange} />
            </Grid>

            <Grid item md={6}>
              <TextField type="text" fullWidth name="email" label="Email" value={formik.values.email} onChange={formik.handleChange} />
            </Grid>

            <Grid item md={6}>
              <TextField type="text" fullWidth name="telephone" label="Telephone" value={formik.values.telephone} onChange={formik.handleChange} />
            </Grid>

          </Grid>
          <Grid item md={6}>
            <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2, mb: 2 }}>Sign Up</Button>
          </Grid>

        </Form>
      </Formik>
    </Container>
  );
}

export default SignUpPage;
