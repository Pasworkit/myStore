import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import { getAllProducts } from '../../store/slices/catalogSlice';
import { getProducts } from '../../store/slices/productsSlice/actionCreators';

function ProductPage() {
  const { linkItemNo } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((store) => store.productsAll.products);
  const [theProduct] = products.filter((product) => product.itemNo === linkItemNo);

  return (
    <main>
      {theProduct ? (<Product productToRender={theProduct} />) : (<div>I am spinner</div>) }
    </main>
  );
}

export default ProductPage;
