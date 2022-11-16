/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  GET_ALL_PRODUCTS,
  PAGINATION_NUMBER_PRODUCTS,
  SET_CURREN_PAGE,
  NEXT_PAGE_CATALOG,
  PREVIOUS_PAGE_CATALOGE,
  FILTER_CATEGORY_CATALOG,
} from './actionsCatalog';

const initialState = {
  catalogProducts: [],
  currentProducts: [],
  currentPage: 1,
  productsPurPage: 9,
};
// eslint-disable-next-line default-param-last
const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return produce(state, (draftState) => {
        draftState.catalogProducts = action.payload;
      });
    }

    case PAGINATION_NUMBER_PRODUCTS: {
      return produce(state, (draftState) => {
        const lastProductIndex = draftState.currentPage * draftState.productsPurPage;
        const firstProductIndex = lastProductIndex - draftState.productsPurPage;
        // eslint-disable-next-line max-len
        draftState.currentProducts = draftState.catalogProducts.slice(firstProductIndex, lastProductIndex);
      });
    }

    case SET_CURREN_PAGE: {
      return produce(state, (draftState) => {
        draftState.currentPage = action.payload;
      });
    }

    case NEXT_PAGE_CATALOG: {
      return produce(state, (draftState) => {
        draftState.currentPage += 1;
      });
    }

    case PREVIOUS_PAGE_CATALOGE: {
      return produce(state, (draftState) => {
        draftState.currentPage -= 1;
      });
    }

    case FILTER_CATEGORY_CATALOG: {
      return produce(state, (draftState) => {
        draftState.catalogProducts = action.payload;
      });
    }

    default: {
      return state;
    }
  }
};

export default catalogReducer;
