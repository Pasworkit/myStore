import axios from 'axios';

import {
  GET_ALL_PRODUCTS,
  PAGINATION_NUMBER_PRODUCTS,
  SET_CURREN_PAGE,
  NEXT_PAGE_CATALOG,
  PREVIOUS_PAGE_CATALOGE,
  FILTER_CATEGORY_CATALOG,
} from './actionsCatalog';

export const getAllProductsAC = () => async (dispatch) => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
    if (status === 200) {
      // eslint-disable-next-line no-undef
      dispatch({ type: GET_ALL_PRODUCTS, payload: data });
    }
  } catch (err) {
    console.warn(err);
  }
};

export const paginationProductsNumberAC = (payload) => ({
  type: PAGINATION_NUMBER_PRODUCTS,
  payload,
});

export const setCurrentPageAC = (payload) => ({
  type: SET_CURREN_PAGE,
  payload,
});

export const nextPageCatalogeAC = (payload) => ({
  type: NEXT_PAGE_CATALOG,
  payload,
});

export const previousPageCatalogeAC = (payload) => ({
  type: PREVIOUS_PAGE_CATALOGE,
  payload,
});

export const filterCategoryCatalogAC = (value) => async (dispatch) => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/products/filter?categories=${value.Hanging},${value.Flowering}`);
    if (status === 200) {
      dispatch({ type: FILTER_CATEGORY_CATALOG, payload: data.products });
    }
  } catch (err) {
    console.warn(err);
  }
};
