import produce from 'immer';
import {
  GET_PRODUCTS,
  TOGGLE_PRODUCT_IN_CART,
  INCREMENT_QUANTITY_PRODUCT_IN_CART,
  DECREMENT_QUANTITY_PRODUCT_IN_CART,
} from './actionsProducts';

const initialState = {
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
        draftState.products[index].isInCart = !draftState.products[index].isInCart;
        if (!draftState.products[index].isInCart) {
          draftState.products[index].quantityInCart = 1;
        }
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

    case INCREMENT_QUANTITY_PRODUCT_IN_CART: {
      return produce(state, draftState => {
        const index = draftState.products.findIndex(
          ({ _id }) => _id === action.payload.id,
        );
        if (action.payload.quantityInCart < action.payload.quantity) {
          draftState.products[index].quantityInCart = action.payload.quantityInCart + 1;
        }

        localStorage.setItem('products', JSON.stringify(draftState.products));
        localStorage.setItem(
          'productsInCart',
          JSON.stringify(draftState.productsInCart),
        );
        console.log(state);
      });
    }

    case DECREMENT_QUANTITY_PRODUCT_IN_CART: {
      return produce(state, draftState => {
        const index = draftState.products.findIndex(
          ({ _id }) => _id === action.payload.id,
        );
        const { quantityInCart } = action.payload;
        if (quantityInCart > 1) {
          draftState.products[index].quantityInCart = action.payload.quantityInCart - 1;
        }

        localStorage.setItem('products', JSON.stringify(draftState.products));
        localStorage.setItem(
          'productsInCart',
          JSON.stringify(draftState.productsInCart),
        );
        console.log(state);
      });
    }

    default:
      return state;
  }
};

export default reducerProducts;
