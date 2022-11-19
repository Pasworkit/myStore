import {
  GET_PRODUCTS, TOGGLE_PRODUCT_IN_CART, INCREMENT_QUANTITY_PRODUCT_IN_CART, DECREMENT_QUANTITY_PRODUCT_IN_CART,
} from './actionsProducts';
import { getProductsFromBack } from '../../API/ApiTest';
// import { GET_PRODUCTS, TOGGLE_PRODUCT_IN_CART, CLEAR_CART } from './actionsProducts';

// export const getProductsAC = () => async (dispatch) => {
//   const productsDataInLocalStorage = localStorage.getItem('productsData');
//   let productsData = JSON.parse(productsDataInLocalStorage);
//   if (productsData) {
//     dispatch({ type: GET_PRODUCTS, payload: productsData });
//   } else {
//     productsData = await fetch('./products/products.json').then((res) => res.json());
//     localStorage.setItem('productsData', JSON.stringify(productsData));
//     dispatch({ type: GET_PRODUCTS, payload: productsData });
//   }
// };

export const getProducts = () => async (dispatch) => {
  const productsInLocalStorage = localStorage.getItem('products');

  if (productsInLocalStorage) {
    const products = JSON.parse(productsInLocalStorage);
    dispatch({ type: GET_PRODUCTS, payload: products });
  } else {
    const productsData = await getProductsFromBack();
    const products = productsData.data.map((product) => ({ ...product, isInCart: false, quantityInCart: 1 }));
    console.log(products);
    dispatch({ type: GET_PRODUCTS, payload: products });
  }
};

export const toggleProductInCart = (id) => ({ type: TOGGLE_PRODUCT_IN_CART, payload: id });

export const incrementQuantityProductInCart = (id, quantityInCart, quantity) => ({ type: INCREMENT_QUANTITY_PRODUCT_IN_CART, payload: { id, quantityInCart, quantity } });

export const decrementQuantityProductInCart = (id, quantityInCart) => ({ type: DECREMENT_QUANTITY_PRODUCT_IN_CART, payload: { id, quantityInCart } });
