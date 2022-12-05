import { createSlice } from '@reduxjs/toolkit';
import { getCart } from '../../API/ApiTest';

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
  try {
    const { status, data: { products } } = await getCart(token);
    if (status === 200) {
      dispatch(cartClient(products));
    }
  } catch (error) {
    console.log(error);
  }
};

export { postOrder, cartClient, fetchCart };

export default orderSlice.reducer;
