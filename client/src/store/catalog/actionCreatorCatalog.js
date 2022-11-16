import axios from 'axios';

import {
  GET_ALL_PRODUCTS, PAGINATION_NUMBER, SET_CURREN_PAGE, NEXT_PAGE_CATALOG, PREVIOUS_PAGE_CATALOGE,
} from './actionsCatalog';

export const getAllProductsAC = () => async (dispatch) => {
  try {
    const { data } = await axios.get('./products/products.json');
    // eslint-disable-next-line no-undef
    dispatch({ type: GET_ALL_PRODUCTS, payload: data });
  } catch (err) {
    console.warn(err);
  }
};

export const paginationNumberAC = (payload) => ({
  type: PAGINATION_NUMBER,
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
