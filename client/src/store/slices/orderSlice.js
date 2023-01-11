import { createSlice } from '@reduxjs/toolkit';
import { getCart } from '../../api/api';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    id: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
    data: [],
  },
  reducers: {
    postOrder: (state, action) => {
      state.id = action.payload.id;
      state.login = action.payload.login;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.telephone = action.payload.telephone;
    },
    cartClient: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { postOrder, cartClient } = orderSlice.actions;

const fetchCart = (token) => async (dispatch) => {
  if (token) {
    try {
      const { status, data: { products } } = await getCart(token);
      if (status === 200) {
        dispatch(cartClient(products));
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    const dataProductsInCart = JSON.parse(localStorage.getItem('productsInCart')).map((product) => ({
      _id: product._id,
      cartQuantity: product.quantityInCart,
      product,
    }));
    const productsInCart = dataProductsInCart.map(({ _id, product, cartQuantity }) => {
      delete product.quantityInCart;
      delete product.isInCart;
      return {
        _id,
        product,
        cartQuantity,
      };
    });

    dispatch(cartClient(productsInCart));
  }
};

export { postOrder, cartClient, fetchCart };

export default orderSlice.reducer;
