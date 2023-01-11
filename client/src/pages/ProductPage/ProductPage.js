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
  const [product] = products.filter((item) => item.itemNo === linkItemNo);

  return (
    <main>
      {product ? (<Product product={product} />) : (<div>I am spinner</div>) }
    </main>
  );
}

export default ProductPage;
