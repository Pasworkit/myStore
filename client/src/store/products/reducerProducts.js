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
  totalPrice: 0,
  amountProductsInCart: 0,
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
        let amountProducts = 0;
        let totalPrice = 0;
        productsInCart.forEach(item => {
          totalPrice += (item.currentPrice * item.quantityInCart);
          amountProducts += (item.quantityInCart);
        });

        draftState.totalPrice = totalPrice;
        draftState.amountProductsInCart = amountProducts;

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
        const productsInCart = draftState.products.filter(
          ({ isInCart }) => isInCart,
        );
        draftState.productsInCart = productsInCart;

        let amountProducts = 0;
        let totalPrice = 0;
        productsInCart.forEach(item => {
          totalPrice += (item.currentPrice * item.quantityInCart);
          amountProducts += (item.quantityInCart);
        });

        draftState.totalPrice = totalPrice;
        draftState.amountProductsInCart = amountProducts;

        localStorage.setItem('products', JSON.stringify(draftState.products));
        localStorage.setItem(
          'productsInCart',
          JSON.stringify(draftState.productsInCart),
        );
      });
    }

    case INCREMENT_QUANTITY_PRODUCT_IN_CART: {
      return produce(state, draftState => {
        const index = draftState.products.findIndex(
          ({ _id }) => _id === action.payload.id,
        );
        if (action.payload.quantityInCart < action.payload.quantityInStock) {
          draftState.products[index].quantityInCart = action.payload.quantityInCart + 1;
        }

        const productsInCart = draftState.products.filter(
          ({ isInCart }) => isInCart,
        );

        let amountProducts = 0;
        let totalPrice = 0;
        productsInCart.forEach(item => {
          totalPrice += (item.currentPrice * item.quantityInCart);
          amountProducts += (item.quantityInCart);
        });

        draftState.totalPrice = totalPrice;
        draftState.amountProductsInCart = amountProducts;

        localStorage.setItem('products', JSON.stringify(draftState.products));
        localStorage.setItem(
          'productsInCart',
          JSON.stringify(draftState.productsInCart),
        );
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

        const productsInCart = draftState.products.filter(
          ({ isInCart }) => isInCart,
        );

        let amountProducts = 0;
        let totalPrice = 0;
        productsInCart.forEach(item => {
          totalPrice += (item.currentPrice * item.quantityInCart);
          amountProducts += (item.quantityInCart);
        });

        draftState.totalPrice = totalPrice;
        draftState.amountProductsInCart = amountProducts;

        localStorage.setItem('products', JSON.stringify(draftState.products));
        localStorage.setItem(
          'productsInCart',
          JSON.stringify(draftState.productsInCart),
        );
      });
    }

    default:
      return state;
  }
};

export default reducerProducts;
