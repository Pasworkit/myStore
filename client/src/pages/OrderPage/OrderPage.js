import {
  Formik, Form, useFormik,
} from 'formik';
import {
  Box,
  Button, ButtonGroup,
  Container, FormControl,
  Grid, Radio, RadioGroup, TextareaAutosize, ThemeProvider,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createTheme } from '@mui/material/styles';
import styles from './OrderPage.module.scss';
import styles2 from '../../components/Cart/Cart.module.scss';
import { createOrder, createOrderWithoutAuthorization } from '../../api/api';
import { fetchCart } from '../../store/slices/orderSlice';
import { deleteCart } from '../../store/slices/productsSlice/actionCreators';
import { setModalIsOpen, setModalData } from '../../store/slices/modalSlise';

function OrderPage() {
  const theme = createTheme({
    palette: {
      action: {
        disabled: '#6CAC72',
      },
    },
  });
  const phoneRegExp = /^\+?[1-9][0-9]{11}$/;

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Mail is required'),
    mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'),
    deliveryAddress: Yup.object().shape({
      country: Yup.string()
        .min(2, 'Country must be between 2 and 25 characters')
        .max(25, 'Too Long!')
        .required('Required'),
      city: Yup.string()
        .min(2, 'City must be between 2 and 30 characters!')
        .max(30, 'Too Long!')
        .required('Required'),
      address: Yup.string()
        .min(3, 'Address must be between 3 and 30 characters')
        .max(30, 'Too Long!')
        .required('Required'),
    }),
  });

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

  const handleModalCancel = () => { dispatch(setModalIsOpen(false)); };

  const createOrderFromValues = (values) => {
    if (token) {
      return ({
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
    }
    return ({
      letterSubject: 'Thank you for order! You are welcome!',
      letterHtml:
        '<h1>Your order is placed. OrderNo is 023689452.</h1><p>Other details about Order</p>'
        + '<p>In this place will be good letter</p>',
      products,
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
  };
  const formik = useFormik({
    initialValues: {
      shipping: 'Courier',
      email: '',
      mobile: '',

      deliveryAddress: {
        country: 'Ukraine',
        city: 'Dnipro',
        address: '',
      },
      paymentInfo: 'creditCard',
      comments: '',
    },
    onSubmit: async (values) => {
      const {
        data, status,
      } = token ? await createOrder(createOrderFromValues(values)) : await createOrderWithoutAuthorization(createOrderFromValues(values));
      if (status === 200) {
        await deleteCartHandler();
        dispatch(setModalIsOpen(true));
        dispatch(setModalData({
          header: 'Your order has been successfully placed!',
          // text: 'Your order has been successfully placed!',
          actions: (
            <div>
              <Button color="success" onClick={handleModalCancel}> OK </Button>
            </div>
          ),
        }));
        navigate('/');
      } else {
        throw new Error('Invalid');
      }
      return data;
    },
    validationSchema: schema,
  });

  return (
    <Container className={styles.container} sx={{ mb: 4 }}>
      <Box sx={{ mt: 4 }}>
        <h2 className={styles.main_title}>Making your order</h2>
        <Formik
          initialValues={formik.initialValues}
          onSubmit={formik.handleSubmit}
          isValid={formik.isValid}
        >
          <Form>
            <h2 className={styles.title}>Choose a shipping method</h2>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                      m: 1,
                    },
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <ButtonGroup>
                      <Button
                        variant="outlined"
                        type="button"
                        disabled={formik.values.shipping === 'Courier'}
                        onClick={() => formik.setFieldValue('shipping', 'Courier')}
                      >
                        By Courier
                      </Button>
                      <Button
                        variant="outlined"
                        type="button"
                        disabled={formik.values.shipping === 'Pickup'}
                        onClick={() => formik.setFieldValue('shipping', 'Pickup')}
                      >
                        Pickup
                      </Button>
                      <Button
                        variant="outlined"
                        type="button"
                        disabled={formik.values.shipping === 'NovaPoshta'}
                        onClick={() => formik.setFieldValue('shipping', 'NovaPoshta')}
                      >
                        Nova Poshta
                      </Button>
                    </ButtonGroup>
                  </ThemeProvider>
                </Box>
                <h2 className={styles.title}>Fill in your personal details</h2>

                <Grid container spacing={2}>
                  <Grid item md={6} xs={12}>
                    <TextField type="text" fullWidth name="email" label="Email" value={formik.values.email} onChange={formik.handleChange} />
                    {formik.errors.email
                      ? <div className={styles.formik_error}>{formik.errors.email}</div> : null}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField type="text" fullWidth name="mobile" label="Mobile" value={formik.values.mobile} onChange={formik.handleChange} />
                    {formik.errors.mobile
                      ? <div className={styles.formik_error}>{formik.errors.mobile}</div> : null}
                  </Grid>

                </Grid>

                <h2 className={styles.title}>Fill in the delivery address:</h2>

                <Grid container spacing={2}>
                  <Grid item md={6} xs={12}>
                    <TextField type="text" fullWidth name="deliveryAddress.country" label="Country" value={formik.values.deliveryAddress.country} onChange={formik.handleChange} />
                    {formik.errors.deliveryAddress && formik.errors.deliveryAddress.country
                      ? <div className={styles.formik_error}>{formik.errors.deliveryAddress.country}</div> : null}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField type="text" fullWidth name="deliveryAddress.city" label="City" value={formik.values.deliveryAddress.city} onChange={formik.handleChange} />
                    {formik.errors.deliveryAddress && formik.errors.deliveryAddress.city
                      ? <div className={styles.formik_error}>{formik.errors.deliveryAddress.city}</div> : null}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField type="text" fullWidth name="deliveryAddress.address" label="Address" value={formik.values.deliveryAddress.address} onChange={formik.handleChange} />
                    {formik.errors.deliveryAddress && formik.errors.deliveryAddress.address
                      ? <div className={styles.formik_error}>{formik.errors.deliveryAddress.address}</div> : null}
                  </Grid>
                </Grid>

                <h2 className={styles.title}>Select a Payment Method</h2>

                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="creditCard"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      checked={formik.values.paymentInfo === 'creditCard'}
                      onClick={() => formik.setFieldValue('paymentInfo', 'creditCard')}
                      control={<Radio />}
                      label="Payment by credit card in the online store"
                    />
                    <FormControlLabel
                      checked={formik.values.paymentInfo === 'creditCardAfter'}
                      onClick={() => formik.setFieldValue('paymentInfo', 'creditCardAfter')}
                      control={<Radio />}
                      label="Payment by credit card upon receipt"
                    />
                    <FormControlLabel
                      checked={formik.values.paymentInfo === 'cash'}
                      onClick={() => formik.setFieldValue('paymentInfo', 'cash')}
                      control={<Radio />}
                      label="Cash upon receipt"
                    />
                  </RadioGroup>
                </FormControl>

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
            </Grid>

            <Box sx={{ mb: 4 }}>
              <div className={styles.cart__containerOrder}>
                <div className={styles.cart__order}>
                  <p className={styles2.cart__titleOrder}>Your order</p>
                  <p className={styles2.cart__textOrder}>
                    Amount products:
                    <span className={styles2.cart__amountProducts}>{amountProducts}</span>
                  </p>
                  <p className={styles2.cart__textOrder}>
                    Total price:
                    <span className={styles2.cart__amountProducts}>
                      {totalPrice.toFixed(2)}
                      {' '}
                      $
                    </span>
                  </p>
                  <p className={styles2.cart__textOrderStar}>* excluding delivery</p>
                </div>
                <div className={styles2.cart__buttons}>
                  <NavLink className={styles2.cart__button} to="/catalog">Continue shopping</NavLink>
                  <Button color="primary" className={styles2.cart__buttonOrder} variant="outlined" fullWidth type="submit" disabled={!formik.isValid}>Confirm the order</Button>
                </div>
              </div>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}

export default OrderPage;
