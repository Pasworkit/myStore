import {
  Formik, Form, useFormik,
} from 'formik';
import {
  Box,
  Button, ButtonGroup,
  Container,
  Grid, Radio, RadioGroup, TextareaAutosize,
  TextField,
} from '@mui/material';
import { useSelector } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from './OrderPage.module.scss';
import { createOrder } from '../../API/ApiTest';

function OrderPage() {
  const auth = useSelector((store) => store.auth);

  const formik = useFormik({
    initialValues: {
      shipping: '',
      email: auth.email,
      mobile: auth.mobile,

      deliveryAddress: {
        country: '',
        city: '',
        address: '',
      },
      paymentInfo: '',
      letterSubject: 'Thank you for order! You are welcome!',
      letterHtml:
          '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',
      comments: '',

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
          <h2 className={styles.title}>Choose a shipping method</h2>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  '& > *': {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button type="text" onClick={() => formik.setFieldValue('shipping', 'Courier')}>By Courier</Button>
                  <Button type="text" onClick={() => formik.setFieldValue('shipping', 'Pickup')}> Pickup</Button>
                  <Button type="text" onClick={() => formik.setFieldValue('shipping', 'NovaPoshta')}>Nova Poshta</Button>
                </ButtonGroup>
              </Box>
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

              <h2 className={styles.title}>Select a Payment Method</h2>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="credit"
                name="radio-buttons-group"
              >
                <FormControlLabel type="text" onClick={() => formik.setFieldValue('paymentInfo', 'creditCard')} control={<Radio />} label="Payment by credit card in the online store" />
                <FormControlLabel type="text" onClick={() => formik.setFieldValue('paymentInfo', 'creditCardAfter')} control={<Radio />} label="Payment by credit card upon receipt" />
                <FormControlLabel type="text" onClick={() => formik.setFieldValue('paymentInfo', 'cash')} control={<Radio />} label="Cash upon receipt" />
              </RadioGroup>

              <h2 className={styles.title}>Order comment (optional)</h2>
              <TextareaAutosize
                type="text"
                name="comments"
                value={formik.values.comments}
                onChange={formik.handleChange}
                className={styles.textArea}
                minRows={6}
                aria-label="maximum height"
                placeholder="Leave your comment..."
              />
            </Grid>

            <Grid item xs={4}>

              <div className={styles.cart__order}>
                <p className={styles.cart__titleOrder}>Your order</p>
                <p className={styles.cart__textOrder}>
                  Amount products:
                  <span className={styles.cart__amountProducts}>{6}</span>
                </p>
                <p className={styles.cart__textOrder}>
                  Total price:
                  <span className={styles.cart__amountProducts}>
                    {5}
                    {' '}
                    $
                  </span>
                </p>
              </div>
              <div>
                <Button color="primary" variant="contained" fullWidth type="submit">Confirm the order</Button>
              </div>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default OrderPage;
