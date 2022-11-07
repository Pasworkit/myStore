import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Category.module.scss';

function Category() {
  const categoryPathName = useLocation().pathname.slice(1);
  const products = useSelector((state) => state.productsAll.products);
  const productsOfTheCategory = products.filter((product) => product.category.trim().toLowerCase().split('&').join('and')
    .split(' ')
    .join('-') === categoryPathName);
  const categoryName = productsOfTheCategory.length > 0 ? productsOfTheCategory[0].category : 'There is no products in this category';
  // eslint-disable-next-line max-len
  const CategoryItems = productsOfTheCategory.map((item) => <Card key={item.id} productCardData={item} />);

  const documentMetaDesc = `These are products of the category ${categoryName}`;
  useEffect(() => {
    document.title = categoryName;
    document.querySelector("meta[name='description']").setAttribute('content', documentMetaDesc);
  }, [categoryName, documentMetaDesc]);

  return (
    <section className={styles.categoryPageContainer}>
      <h1 className={styles.categoryTitle}>{categoryName}</h1>
      <div className={styles.categoryItemsWrapper}>
        {CategoryItems}
      </div>
    </section>
  );
}

export default Category;
