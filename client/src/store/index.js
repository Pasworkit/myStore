import { configureStore } from '@reduxjs/toolkit';
import reducerProducts from './products/reducerProducts';
import commentsReducer from './slices/commentsSlice';
import authReducer from './slices/authSlice';
import catalogsReduser from './slices/catalogSlice';

const store = configureStore({
  reducer: {
    productsAll: reducerProducts,
    comments: commentsReducer,
    auth: authReducer,
    catalog: catalogsReduser,
  },
});

export default store;
