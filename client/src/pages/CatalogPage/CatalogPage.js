import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Catalog from '../../components/Catalog/Catalog';
import { getAllProductsAC, paginationNumberAC } from '../../store/catalog/actionCreatorCatalog';

function CatalogPage() {
  // const catalogProducts = useSelector((state) => state.catalogProducts.catalogProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAC());
    setTimeout(() => {
      dispatch(paginationNumberAC());
    }, 300);
  }, []);

  return (
    <main>
      <Catalog />
    </main>
  );
}
export default CatalogPage;
