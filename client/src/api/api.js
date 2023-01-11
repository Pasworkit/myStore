import axios from 'axios';
import axiosConfig from './axiosConfig';

export const getSlides = async () => axiosConfig.get('/slides');

export const getComments = async () => axiosConfig.get('/comments');

export const createOrder = async (newOrder) => axiosConfig.post('/orders', newOrder);

export const createCustomer = async (newUser) => axiosConfig.post('/customers', newUser);

export const loginCustomer = async (userData) => axiosConfig.post('/customers/login', userData);

export const getProductsFromBack = async () => axios.get(`${process.env.REACT_APP_API_URL}/products`);

export const createOrderWithoutAuthorization = async (newOrder) => axios.post(
  `${process.env.REACT_APP_API_URL}/orders`,
  newOrder,
);

export const apdatedCart = async (token, productsInCart) => axios.put(`${process.env.REACT_APP_API_URL}/cart`, {
  products: productsInCart,
}, {
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${token}`,
  },
});

export const addProductInCart = async (id, token) => axios.put(`${process.env.REACT_APP_API_URL}/cart/${id}`, {}, {
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${token}`,
  },
});

export const getCart = async (token) => axios.get(`${process.env.REACT_APP_API_URL}/cart`, {
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${token}`,
  },
});

export const deleteProductInCart = async (id, token) => axios.delete(`${process.env.REACT_APP_API_URL}/cart/${id}`, {
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${token}`,
  },
});

export const deleteCartFromBack = async (token) => axios.delete(`${process.env.REACT_APP_API_URL}/cart`, {
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${token}`,
  },
});

export const createFavorites = async (products, token) => axios.put(`${process.env.REACT_APP_API_URL}/wishlist`, { products }, {
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${token}`,
  },
});

export const addProductInFavorites = async (id, token) => axios.put(`${process.env.REACT_APP_API_URL}/wishlist/${id}`, {}, {
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${token}`,
  },
});

export const deleteProductInFavorites = async (id, token) => axios.delete(`${process.env.REACT_APP_API_URL}/wishlist/${id}`, {
  headers: {
    // eslint-disable-next-line quote-props
    'Authorization': `Bearer ${token}`,
  },
});
