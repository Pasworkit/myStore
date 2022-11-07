import { memo } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import './Slider.scss';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

function CardsSlider({
  quantity, dots, children, ...restSettings
}) {
  let settings = {
    className: 'center',
    dots,
    infinite: true,
    speed: 500,
    slidesToShow: quantity,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '-10px',
    draggable: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true,
          slideToShow: 3,
        },
      },
      {
        breakpoint: 360,
        settings: {
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  if (quantity > 1) {
    settings.dots = false;
    settings = {
      ...settings,
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />,
    };
  } else {
    settings.dots = true;
    settings = {
      ...settings,
      autoplay: true,
      nextArrow: null,
      prevArrow: null,
      ...restSettings,
    };
  }

  return (
    <div className="slider__wrapper">
      <div className="slider__container">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
}

CardsSlider.propTypes = {
  quantity: PropTypes.number.isRequired,
  dots: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};

export default memo(CardsSlider);
