import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './SectionBest.module.scss';
import Card from '../Card/Card';
import { getAllProducts } from '../../store/slices/catalogSlice';

function SectionBest() {
  const catalogProducts = useSelector((state) => state.catalog.catalogProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(1));
  }, []);

  const
    settings = {
      responsive: [
        {
          breakpoint: 630,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 920,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
            variableHeight: false,
          },
        },
        {
          breakpoint: 1190,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true,
            variableHeight: true,
          },
        },
        {
          breakpoint: 2000,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: true,
            variableHeight: true,
          },
        },
      ],
    };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Most popular items of the month</h2>
      <div className={styles.center}>
        <Slider {...settings}>
          {catalogProducts.map((item) => {
            const { isPopular } = item;
            return (
              <li
                key={isPopular}
                // className={styles2.wrapperProductsItem}
                className={styles.productsItem}
              >
                <Card productCardData={item} />
              </li>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default SectionBest;
