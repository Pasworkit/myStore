import { createSlice } from '@reduxjs/toolkit';
import axiosConfig from '../../api/axiosConfig';

const catalogSlise = createSlice({
  name: 'catalog',
  initialState: {
    catalogProducts: [],
    currentPageNumber: 1,
    productsPurPage: 9,
    productsQuantity: 0,
  },

  reducers: {
    allCatalogProducts: (state, action) => {
      state.productsQuantity = action.payload.productsQuantity;
      state.catalogProducts = action.payload.data;
    },

    setCurrentPage: (state, action) => {
      state.currentPageNumber = action.payload;
    },

    nextPageCatalog: (state) => {
      state.currentPageNumber += 1;
    },

    prevPageCatalog: (state) => {
      state.currentPageNumber -= 1;
    },
  },

});

export const {
  allCatalogProducts, setCurrentPage, nextPageCatalog, prevPageCatalog,
} = catalogSlise.actions;

const getAllProducts = (currentPage) => async (dispatch) => {
  try {
    const { status, data } = await axiosConfig.get(`/products/filter?perPage=9&startPage=${currentPage}`);

    if (status === 200) {
      dispatch(allCatalogProducts({ data: data.products, productsQuantity: data.productsQuantity }));
    }
  } catch (err) {
    console.warn(err);
  }
};

const filterCatalogProducts = (paramsUrl, currentPageNumber) => async (dispatch) => {
  const categories = paramsUrl.categories.length !== 0 ? `&categories=${paramsUrl.categories}` : '';
  const isPopular = paramsUrl.isPopular.length !== 0 ? `&isPopular=${paramsUrl.isPopular}` : '';
  const isEasyCare = paramsUrl.isEasyCare.length !== 0 ? `&isEasyCare=${paramsUrl.isEasyCare}` : '';
  const isPetAndBabySafe = paramsUrl.isPetAndBabySafe.length !== 0 ? `&isPetAndBabySafe=${paramsUrl.isPetAndBabySafe}` : '';
  const heightRange = paramsUrl.heightRange.length !== 0 ? `&heightRange=${paramsUrl.heightRange}` : '';
  const price = paramsUrl.minPrice !== null && paramsUrl.maxPrice !== null ? `&minPrice=${paramsUrl.minPrice}&maxPrice=${paramsUrl.maxPrice}` : '';

  try {
    const { status, data } = await axiosConfig.get(`/products/filter?perPage=9&startPage=${currentPageNumber}${categories}${isPopular}${isEasyCare}${isPetAndBabySafe}${heightRange}${price}
    `);
    if (status === 200) {
      dispatch(allCatalogProducts({ data: data.products, productsQuantity: data.productsQuantity }));
    }
  } catch (err) {
    console.warn(err);
  }
};

export { getAllProducts, filterCatalogProducts };

export default catalogSlise.reducer;
