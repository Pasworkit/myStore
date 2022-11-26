import { configureStore } from '@reduxjs/toolkit';
import reducerProducts from './products/reducerProducts';
import catalogReducer from './catalog/catalogReducer';
import commentsReducer from './slices/commentsSlice';
import authReducer from './slices/authSlice';
import orderReducer from './slices/orderSlice';

const store = configureStore({
  reducer: {
    productsAll: reducerProducts,
    catalogProducts: catalogReducer,
    comments: commentsReducer,
    auth: authReducer,
    order: orderReducer,
  },
});

export default store;
