import {
  GET_PRODUCTS, TOGGLE_PRODUCT_IN_CART, INCREMENT_QUANTITY_PRODUCT_IN_CART, DECREMENT_QUANTITY_PRODUCT_IN_CART,
} from './actionsProducts';
import {
  getProductsFromBack, addProductInCart, deleteProductInCart, apdatedCart,
} from '../../API/ApiTest';

export const getProducts = () => async (dispatch) => {
  const productsInLocalStorage = localStorage.getItem('products');

  if (productsInLocalStorage) {
    const products = JSON.parse(productsInLocalStorage);
    dispatch({ type: GET_PRODUCTS, payload: products });
  } else {
    const productsData = await getProductsFromBack();
    const products = productsData.data.map((product) => ({ ...product, isInCart: false, quantityInCart: 1 }));
    dispatch({ type: GET_PRODUCTS, payload: products });
  }
};

export const toggleProductInCart = (id, isInCart, token, productsInCart) => async (dispatch) => {
  if (isInCart) {
    const deleteProductCartData = await deleteProductInCart(id, token);
    console.log(deleteProductCartData);
  } else {
    const addProductCartData = await addProductInCart(id, token);
    console.log(addProductCartData);
    if (addProductCartData.status === 200) {
      const apdatedCartData = await apdatedCart(token, productsInCart);
      console.log(apdatedCartData);
    }
  }
  dispatch({ type: TOGGLE_PRODUCT_IN_CART, payload: id });
};

export const incrementQuantityProductInCart = (id, quantityInCart, quantity) => async (dispatch) => {
  dispatch({ type: INCREMENT_QUANTITY_PRODUCT_IN_CART, payload: { id, quantityInCart, quantity } });
  // if (isInCart && quantityInCart < quantity) {
  // const apdatedCartData = await apdatedCart(id, token, quantityInCart + 1);
  // console.log(apdatedCartData);
  // }
};

export const decrementQuantityProductInCart = (id, quantityInCart) => async (dispatch) => {
  dispatch({ type: DECREMENT_QUANTITY_PRODUCT_IN_CART, payload: { id, quantityInCart } });
  // if (isInCart && quantityInCart > 1) {
  //   const apdatedCartData = await apdatedCart(id, token, quantityInCart - 1);
  //   console.log(apdatedCartData);
  // }
};
