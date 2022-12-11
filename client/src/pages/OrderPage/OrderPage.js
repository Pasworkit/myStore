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
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OrderPage.module.scss';
import { createOrder } from '../../API/ApiTest';
import { fetchCart } from '../../store/slices/orderSlice';
import { deleteCart } from '../../store/slices/productsSlice';

function OrderPage() {
  const navigate = useNavigate();
  const token = useSelector((store) => store.auth.token);
  const customerId = useSelector((store) => store.auth.id);
  const products = useSelector((store) => store.order.data);
  const dispatch = useDispatch();
  const totalPrice = useSelector((store) => store.productsAll.totalPrice);
  const amountProducts = useSelector((store) => store.productsAll.amountProductsInCart);

  useEffect(() => {
    dispatch(fetchCart(token));
  }, []);

  const deleteCartHandler = () => dispatch(deleteCart(token));

  const createOrderFromValues = (values) => ({
    letterSubject: 'Thank you for order! You are welcome!',
    letterHtml:
      '<h1>Your order is placed. OrderNo is 023689452.</h1><p>Other details about Order</p>'
      + '<p>In this place will be good letter</p>',
    products,
    customerId,
    shipping: values.shipping,
    email: values.email,
    mobile: values.mobile,
    paymentInfo: values.paymentInfo,
    comments: values.comments,
    deliveryAddress: {
      country: values.deliveryAddress.country,
      city: values.deliveryAddress.city,
      address: values.deliveryAddress.address,
    },
  });

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
      comments: '',
    },
    onSubmit: async (values) => {
      const {
        data, status,
      } = await createOrder(token, createOrderFromValues(values));
      if (status === 200) {
        deleteCartHandler();
        navigate('/');
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
                  <Button type="button" onClick={() => formik.setFieldValue('shipping', 'Courier')}>By Courier</Button>
                  <Button type="button" onClick={() => formik.setFieldValue('shipping', 'Pickup')}> Pickup</Button>
                  <Button type="button" onClick={() => formik.setFieldValue('shipping', 'NovaPoshta')}>Nova Poshta</Button>
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
                  <span className={styles.cart__amountProducts}>{amountProducts}</span>
                </p>
                <p className={styles.cart__textOrder}>
                  Total price:
                  <span className={styles.cart__amountProducts}>
                    {totalPrice.toFixed(2)}
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
