// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import SectionDelivery from '../../components/SectionDelivery/SectionDelivery';
import SectionFeedback from '../../components/SectionFeedback/SectionFeedback';
import SectionBest from '../../components/SectionBest/SectionBest';
import SectionCarousel from '../../components/SectionCarousel/SectionCarousel';
import YmalProducts from '../../components/YmalProducts/YmalProducts';

function HomePage() {
  const products = useSelector((state) => state.productsAll.products);
  return (
    <div>
      <SectionCarousel />
      <div>
        <YmalProducts products={products} />
      </div>
      <SectionBest />
      <SectionDelivery />
      <SectionFeedback />
    </div>
  );
}

export default HomePage;
