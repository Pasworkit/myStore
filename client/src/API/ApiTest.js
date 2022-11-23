import axios from 'axios';

export const getProductsFromBack = async () => axios.get(`${process.env.REACT_APP_API_URL}/products`);

export const createCustomer = async (newUser) => axios.post(`${process.env.REACT_APP_API_URL}/customers`, newUser);

export const loginCustomer = async (userData) => axios.post(`${process.env.REACT_APP_API_URL}/customers/login`, userData);

export const createOrder = async (newOrder) => axios.post(`${process.env.REACT_APP_API_URL}/orders`, newOrder);

export const getComments = async () => axios.get(`${process.env.REACT_APP_API_URL}/comments`);

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
