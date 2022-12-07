import {
  GET_PRODUCTS, TOGGLE_PRODUCT_IN_CART, INCREMENT_QUANTITY_PRODUCT_IN_CART, DECREMENT_QUANTITY_PRODUCT_IN_CART,
} from './actionsProducts';
import {
  getProductsFromBack, addProductInCart, deleteProductInCart, apdatedCart, getCart,
} from '../../API/ApiTest';

export const getProducts = () => async (dispatch) => {
  const productsInLocalStorage = localStorage.getItem('products');

  if (productsInLocalStorage) {
    const products = JSON.parse(productsInLocalStorage);
    dispatch({ type: GET_PRODUCTS, payload: products });
  } else {
    try {
      const productsData = await getProductsFromBack();
      const products = productsData.data.map((product) => ({ ...product, isInCart: false, quantityInCart: 1 }));
      dispatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
      console.error(error);
    }
  }
};

export const toggleProductInCart = (id, isInCart, token, quantityInCart) => async (dispatch) => {
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
    dispatch({ type: TOGGLE_PRODUCT_IN_CART, payload: id });
  }
};

export const incrementQuantityProductInCart = (token, id, quantityInCart, quantityInStock, isInCart) => async (dispatch) => {
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
  dispatch({ type: INCREMENT_QUANTITY_PRODUCT_IN_CART, payload: { id, quantityInCart, quantityInStock } });
};

export const decrementQuantityProductInCart = (id, quantityInCart, isInCart, token) => async (dispatch) => {
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
        console.log(productsInCart);
        await apdatedCart(token, productsInCart);
      }
    } catch (error) {
      console.error(error);
    }
  }
  dispatch({ type: DECREMENT_QUANTITY_PRODUCT_IN_CART, payload: { id, quantityInCart } });
};
