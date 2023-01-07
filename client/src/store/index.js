import { configureStore } from '@reduxjs/toolkit';
import reducerProducts from './slices/productsSlice/productsSlice';
import commentsReducer from './slices/commentsSlice';
import authReducer from './slices/authSlice';
import catalogsReducer from './slices/catalogSlice';
import orderReducer from './slices/orderSlice';
import modalReducer from './slices/modalSlise';
import slidesReducer from './slices/slidesSlice';
import filterCategoriesReduser from './slices/filterCatalogSlice/filterCategoriesSlice';
import filterPopularReducer from './slices/filterCatalogSlice/filterPopularSlice';
import filterEasyCareReducer from './slices/filterCatalogSlice/filterEasyCareSlice';
import filterPetAndBabeSafeReducer from './slices/filterCatalogSlice/filterPetAndBabeSafeSlice';
import filterHeightRangeReducer from './slices/filterCatalogSlice/filterHeightRangeSlice';
import filterPriceReducer from './slices/filterCatalogSlice/filterPriceSlice';

const store = configureStore({
  reducer: {
    productsAll: reducerProducts,
    comments: commentsReducer,
    auth: authReducer,
    catalog: catalogsReducer,
    order: orderReducer,
    modal: modalReducer,
    slides: slidesReducer,
    filterCategories: filterCategoriesReduser,
    filterPopular: filterPopularReducer,
    filterEasyCare: filterEasyCareReducer,
    filterPetAndBabeSafe: filterPetAndBabeSafeReducer,
    filterHeightRange: filterHeightRangeReducer,
    filterPrice: filterPriceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
