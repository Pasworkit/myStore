import {
  getProductsFromBack, addProductInCart, deleteProductInCart, apdatedCart, getCart, deleteCartFromBack, addProductInFavorites, deleteProductInFavorites,
} from '../../../api/api';
import {
  getProductsInState, toggleProductCart, incrementQuantityProduct, decrementQuantityProduct, deleteCartInState, toggleProductFavorites,
} from './productsSlice';

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
