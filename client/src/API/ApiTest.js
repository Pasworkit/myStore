import axios from 'axios';
import { useEffect } from 'react';

function ApiTest() {
  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);
}

export default ApiTest;
