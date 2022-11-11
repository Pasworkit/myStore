import Slider from 'react-slick';
import PropTypes from 'prop-types';
import CartSliderItem from '../CartSliderItem/CartSliderItem';
import styles from './CartSlider.module.scss';

function CartSlider({ productsSlider }) {
  const settings = {
    draggable: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className={styles.title}> With these products also buy </h2>
      <Slider className={styles.slider} {...settings}>
        {productsSlider.map((product) => (
          <CartSliderItem key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
}
CartSlider.propTypes = {
  productsSlider: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default CartSlider;
