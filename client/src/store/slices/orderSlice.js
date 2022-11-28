import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    id: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
  },
  reducers: {
    postOrder: (state, action) => {
      state.id = action.payload.id;
      state.login = action.payload.login;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.telephone = action.payload.telephone;
    },
  },
});
export const { postOrder } = orderSlice.actions;

export default orderSlice.reducer;
