import { createSlice } from '@reduxjs/toolkit';
import {
  getProductsFromBack, addProductInCart, deleteProductInCart, apdatedCart, getCart, deleteCartFromBack, addProductInFavorites, deleteProductInFavorites,
} from '../../API/ApiTest';

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

const getProducts = () => async (dispatch) => {
  const productsInLocalStorage = localStorage.getItem('products');

  if (productsInLocalStorage) {
    const products = JSON.parse(productsInLocalStorage);
    dispatch(getProductsInState(products));
  } else {
    try {
      const productsData = await getProductsFromBack();
      const products = await productsData.data.map((product) => ({
        ...product, isInCart: false, isInFavorites: false, quantityInCart: 1,
      }));
      dispatch(getProductsInState(products));
    } catch (error) {
      console.error(error);
    }
  }
};

const toggleProductInCart = (id, isInCart, token, quantityInCart) => async (dispatch) => {
  if (token) {
    try {
      if (isInCart) {
        await deleteProductInCart(id, token);
      } else {
        const addProductCartData = await addProductInCart(id, token);

        if (addProductCartData.status === 200) {
          const productsData = await getCart(token);

          const { products } = productsData.data;

          const index = products.findIndex(({ product }) => product._id === id);
          products[index].cartQuantity = quantityInCart;
          const productsInCart = products.map(item => ({
            product: item.product._id,
            cartQuantity: item.cartQuantity,
          }));

          await apdatedCart(token, productsInCart);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  dispatch(toggleProductCart(id));
};

const incrementQuantityProductInCart = (token, id, quantityInCart, quantityInStock, isInCart) => async (dispatch) => {
  if (token) {
    try {
      if (isInCart && quantityInCart < quantityInStock) {
        const productsData = await getCart(token);

        const { products } = productsData.data;

        const index = products.findIndex(({ product }) => product._id === id);
        products[index].cartQuantity += 1;
        const productsInCart = products.map(item => ({
          product: item.product._id,
          cartQuantity: item.cartQuantity,
        }));
        await apdatedCart(token, productsInCart);
      }
    } catch (error) {
      console.error(error);
    }
  }
  dispatch(incrementQuantityProduct({ id, quantityInCart, quantityInStock }));
};

const decrementQuantityProductInCart = (id, quantityInCart, isInCart, token) => async (dispatch) => {
  if (token) {
    try {
      if (isInCart && quantityInCart > 1) {
        const productsData = await getCart(token);

        const { products } = productsData.data;

        const index = products.findIndex(({ product }) => product._id === id);
        products[index].cartQuantity -= 1;
        const productsInCart = products.map(item => ({
          product: item.product._id,
          cartQuantity: item.cartQuantity,
        }));
        await apdatedCart(token, productsInCart);
      }
    } catch (error) {
      console.error(error);
    }
  }
  dispatch(decrementQuantityProduct({ id, quantityInCart }));
};

const deleteCart = (token) => async (dispatch) => {
  if (token) {
    try {
      await deleteCartFromBack(token);
    } catch (error) {
      console.error(error);
    }
  }
  dispatch(deleteCartInState({ token }));
};

const toggleProductInFavorites = (id, isInFavorites, token) => async (dispatch) => {
  if (token) {
    try {
      if (isInFavorites) {
        await deleteProductInFavorites(id, token);
        dispatch(toggleProductFavorites(id));
      } else {
        await addProductInFavorites(id, token);
        dispatch(toggleProductFavorites(id));
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    dispatch(toggleProductFavorites(id));
  }
};

export {
  getProducts, toggleProductInCart, incrementQuantityProductInCart, decrementQuantityProductInCart, deleteCart,
  toggleProductInFavorites,
};

export default productsSlice.reducer;
