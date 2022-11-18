import produce from 'immer';
import {
  GET_PRODUCTS,
  TOGGLE_PRODUCT_IN_CART,
  // CLEAR_CART,
} from './actionsProducts';

const initialState = {
  // products: JSON.parse(localStorage.getItem('productsData')) || [{}],
  // // eslint-disable-next-line default-param-last
  products: [],
  productsInCart: [],
};

const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return produce(state, draftState => {
        const productsInCart = action.payload.filter(
          (product) => product.isInCart,
        );

        draftState.products = action.payload;
        draftState.productsInCart = productsInCart;

        localStorage.setItem('products', JSON.stringify(draftState.products));
        localStorage.setItem(
          'productsInCart',
          JSON.stringify(draftState.productsInCart),
        );
      });
    }
    case TOGGLE_PRODUCT_IN_CART: {
      return produce(state, draftState => {
        const index = draftState.products.findIndex(
          ({ _id }) => _id === action.payload,
        );
        console.log(index);
        draftState.products[index].isInCart = !draftState.products[index].isInCart;
        draftState.productsInCart = draftState.products.filter(
          ({ isInCart }) => isInCart,
        );

        localStorage.setItem('products', JSON.stringify(draftState.products));
        localStorage.setItem(
          'productsInCart',
          JSON.stringify(draftState.productsInCart),
        );
        console.log(state);
      });
    }

    // case CLEAR_CART: {
    //   return produce(state, (draftState) => {
    //     draftState.products.forEach((product) => {
    //       product.isInCart = false;
    //     });
    //     draftState.productsInCart.length = 0;

    //     localStorage.setItem('products', JSON.stringify(draftState.products));
    //     localStorage.removeItem('productsInCart');
    //   });
    // }
    default:
      return state;
  }
};

export default reducerProducts;
