import produce from 'immer';
import { GET__ALL_PRODUCTS_IN_SHOP } from './actionsShopCatalog';

const initialState = {
  products: [],
};
/* eslint no-param-reassign: ["error", { "props": false }] */
// eslint-disable-next-line default-param-last
const reducerShopCatalog = (state = initialState, action) => {
  switch (action.type) {
    case GET__ALL_PRODUCTS_IN_SHOP: {
      return produce(state, (draftState) => {
        console.log(action.payload);
        draftState.products = action.payload;
      });
    }

    default: {
      return state;
    }
  }
};

export default reducerShopCatalog;
