import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import AppRoutes from '../../AppRoutes';
import { getProducts } from '../../store/slices/productsSlice/actionCreators';
import { getAllProducts } from '../../store/slices/catalogSlice';
import { setUser } from '../../store/slices/authSlice';

function App() {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllProducts());
    if (cookies.token !== undefined && cookies.token !== '') {
      dispatch(setUser({
        token: cookies.token,
      }));
    }
  }, []);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
