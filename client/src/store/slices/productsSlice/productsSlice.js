import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsInCart: [],
    productsInFavorites: [],
    totalPrice: 0,
    amountProductsInCart: 0,
  },

  reducers: {
    getProductsInState: (state, action) => {
      const productsInCart = action.payload.filter(
        (product) => product.isInCart,
      );
      const productsInFavorites = action.payload.filter(
        (product) => product.isInFavorites,
      );
      state.products = action.payload;
      state.productsInCart = productsInCart;
      state.productsInFavorites = productsInFavorites;
      let amountProducts = 0;
      let totalPrice = 0;
      productsInCart.forEach(item => {
        totalPrice += (item.currentPrice * item.quantityInCart);
        amountProducts += (item.quantityInCart);
      });
      state.totalPrice = totalPrice;
      state.amountProductsInCart = amountProducts;

      localStorage.setItem('products', JSON.stringify(state.products));
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
      localStorage.setItem('productsInFavorites', JSON.stringify(state.productsInFavorites));
    },

    toggleProductCart: (state, action) => {
      const index = state.products.findIndex(
        ({ _id }) => _id === action.payload,
      );
      state.products[index].isInCart = !state.products[index].isInCart;
      if (!state.products[index].isInCart) {
        state.products[index].quantityInCart = 1;
      }
      const productsInCart = state.products.filter(
        ({ isInCart }) => isInCart,
      );
      state.productsInCart = productsInCart;
      let amountProducts = 0;
      let totalPrice = 0;
      productsInCart.forEach(item => {
        totalPrice += (item.currentPrice * item.quantityInCart);
        amountProducts += (item.quantityInCart);
      });
      state.totalPrice = totalPrice;
      state.amountProductsInCart = amountProducts;

      localStorage.setItem('products', JSON.stringify(state.products));
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    },

    incrementQuantityProduct: (state, action) => {
      const index = state.products.findIndex(
        ({ _id }) => _id === action.payload.id,
      );
      if (action.payload.quantityInCart < action.payload.quantityInStock) {
        state.products[index].quantityInCart = action.payload.quantityInCart + 1;
      }
      const productsInCart = state.products.filter(
        ({ isInCart }) => isInCart,
      );
      let amountProducts = 0;
      let totalPrice = 0;
      productsInCart.forEach(item => {
        totalPrice += (item.currentPrice * item.quantityInCart);
        amountProducts += (item.quantityInCart);
      });
      state.totalPrice = totalPrice;
      state.amountProductsInCart = amountProducts;

      localStorage.setItem('products', JSON.stringify(state.products));
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    },

    decrementQuantityProduct: (state, action) => {
      const index = state.products.findIndex(
        ({ _id }) => _id === action.payload.id,
      );
      const { quantityInCart } = action.payload;
      if (quantityInCart > 1) {
        state.products[index].quantityInCart = action.payload.quantityInCart - 1;
      }
      const productsInCart = state.products.filter(
        ({ isInCart }) => isInCart,
      );
      let amountProducts = 0;
      let totalPrice = 0;
      productsInCart.forEach(item => {
        totalPrice += (item.currentPrice * item.quantityInCart);
        amountProducts += (item.quantityInCart);
      });
      state.totalPrice = totalPrice;
      state.amountProductsInCart = amountProducts;

      localStorage.setItem('products', JSON.stringify(state.products));
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    },

    deleteCartInState: (state) => {
      const { products } = state;
      const productsNotIsInCart = products.map((product) => ({ ...product, isInCart: false, quantityInCart: 1 }));
      state.products = productsNotIsInCart;
      state.productsInCart = [];
      state.totalPrice = 0;
      state.amountProductsInCart = 0;

      localStorage.setItem('products', JSON.stringify(productsNotIsInCart));
      localStorage.setItem('productsInCart', []);
    },

    toggleProductFavorites: (state, action) => {
      const index = state.products.findIndex(
        ({ _id }) => _id === action.payload,
      );
      state.products[index].isInFavorites = !state.products[index].isInFavorites;
      const productsInFavorites = state.products.filter(
        ({ isInFavorites }) => isInFavorites,
      );
      state.productsInFavorites = productsInFavorites;

      localStorage.setItem('products', JSON.stringify(state.products));
      localStorage.setItem('productsInFavorites', JSON.stringify(state.productsInFavorites));
    },
  },
});

export const {
  getProductsInState, toggleProductCart, incrementQuantityProduct, decrementQuantityProduct, deleteCartInState, toggleProductFavorites,
} = productsSlice.actions;

export default productsSlice.reducer;
