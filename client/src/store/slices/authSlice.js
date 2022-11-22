import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    id: '',
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
    token: '',
  },
  reducers: {
    regUser: (state, action) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.login = action.payload.login;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.telephone = action.payload.telephone;
    },
    setUser: (state, action) => {
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.login = null;
      state.email = null;
      state.password = null;
      state.telephone = null;
      state.token = null;
    },
  },
});
export const { regUser, setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
