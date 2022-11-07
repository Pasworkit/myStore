import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ShopPage from './pages/ShopPage/ShopPage';
import CartPage from './pages/CartPage/CartPage';
import BasketPage from './pages/BasketPage/BasketPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/:productLinkName" element={<ProductPage />} />
      <Route path="/Basket" element={<BasketPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
