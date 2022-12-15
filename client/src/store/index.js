import { configureStore } from '@reduxjs/toolkit';
import reducerProducts from './slices/productsSlice';
import commentsReducer from './slices/commentsSlice';
import authReducer from './slices/authSlice';
import catalogsReducer from './slices/catalogSlice';
import orderReducer from './slices/orderSlice';
import filterCatalogReducer from './slices/filterCatalogSlice';
import modalReducer from './slices/modalSlise';
import slidesReducer from './slices/slidesSlice';

const store = configureStore({
  reducer: {
    productsAll: reducerProducts,
    comments: commentsReducer,
    auth: authReducer,
    catalog: catalogsReducer,
    order: orderReducer,
    filter: filterCatalogReducer,
    modal: modalReducer,
    slides: slidesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
