import {
  GET_PRODUCTS, TOGGLE_PRODUCT_IN_CART, INCREMENT_QUANTITY_PRODUCT_IN_CART, DECREMENT_QUANTITY_PRODUCT_IN_CART,
} from './actionsProducts';
import { getProductsFromBack, deleteProductInCart } from '../../API/ApiTest';

export const getProducts = () => async (dispatch) => {
  const productsData = await getProductsFromBack();
  console.log(productsData);
  const products = productsData.data.map((product) => ({ ...product, isInCart: false, quantityInCart: 1 }));
  console.log(products);
  dispatch({ type: GET_PRODUCTS, payload: products });
};

export const toggleProductInCart = (id, isInCart) => async (dispatch) => {
  if (isInCart) {
    const deleteProductCartData = await deleteProductInCart(id);
    console.log(deleteProductCartData);
  }

  dispatch({ type: TOGGLE_PRODUCT_IN_CART, payload: id });
};

export const incrementQuantityProductInCart = (id, quantityInCart, quantity) => ({ type: INCREMENT_QUANTITY_PRODUCT_IN_CART, payload: { id, quantityInCart, quantity } });

export const decrementQuantityProductInCart = (id, quantityInCart) => ({ type: DECREMENT_QUANTITY_PRODUCT_IN_CART, payload: { id, quantityInCart } });
