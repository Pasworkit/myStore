import { configureStore } from '@reduxjs/toolkit';
import reducerProducts from './slices/productsSlice';
import commentsReducer from './slices/commentsSlice';
import authReducer from './slices/authSlice';
import catalogsReduser from './slices/catalogSlice';
import orderReducer from './slices/orderSlice';
import filterCatalogReduser from './slices/filterCatalogSlice';
import modalReducer from './slices/modalSlise';

const store = configureStore({
  reducer: {
    productsAll: reducerProducts,
    comments: commentsReducer,
    auth: authReducer,
    catalog: catalogsReduser,
    order: orderReducer,
    filter: filterCatalogReduser,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
