import {
  Formik, Form, useFormik,
} from 'formik';
import {
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import styles from './OrderPage.module.scss';
import { createOrder } from '../../API/ApiTest';

function OrderPage() {
  const formik = useFormik({
    initialValues: {
      shipping: '',
      email: '',
      mobile: '',

      deliveryAddress: {
        country: '',
        city: '',
        address: '',
      },
      paymentInfo: '',
      letterSubject: 'Thank you for order! You are welcome!',
      letterHtml:
          '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',

    },
    onSubmit: async (values) => {
      const {
        data, status,
      } = await createOrder(values);
      if (status === 200) {
        console.log(status);
      } else {
        throw new Error('Invalid');
      }
      return data;
    },
  });

  return (
    <Container>
      <h2 className={styles.main_title}>Making your order</h2>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
      >
        <Form>
          <h2 className={styles.title}>Fill in your personal details</h2>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField type="text" fullWidth name="email" label="Email" value={formik.values.email} onChange={formik.handleChange} />
            </Grid>
            <Grid item md={6}>
              <TextField type="text" fullWidth name="mobile" label="Mobile" value={formik.values.mobile} onChange={formik.handleChange} />
            </Grid>
          </Grid>
          <h2 className={styles.title}>Fill in the delivery address</h2>
          <Grid container spacing={2}>

            <Grid item md={6}>
              <TextField type="text" fullWidth name="deliveryAddress.country" label="Country" value={formik.values.deliveryAddress.country} onChange={formik.handleChange} />
            </Grid>
            <Grid item md={6}>
              <TextField type="text" fullWidth name="deliveryAddress.city" label="City" value={formik.values.deliveryAddress.city} onChange={formik.handleChange} />
            </Grid>
            <Grid item md={6}>
              <TextField type="text" fullWidth name="deliveryAddress.address" label="Address" value={formik.values.deliveryAddress.address} onChange={formik.handleChange} />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" fullWidth type="submit">Order</Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default OrderPage;
