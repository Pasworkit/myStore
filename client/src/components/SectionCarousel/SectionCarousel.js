import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import ST from '../../img/Carousel/Banner.svg';
import styles from './SectionCarousel.module.scss';

function SectionCarousel() {
  const renderCustomThumbs = () => [
    <img src={ST} alt="slide1" key="1" />,
    <img src={ST} alt="slide2" key="2" />,
    <img src={ST} alt="slide3" key="3" />,
  ];

  return (
    <div>
      <Carousel
        className={styles.thumbsCenter}
        autoPlay
        infiniteLoop
        interval="5000"
        renderThumbs={renderCustomThumbs}
        useKeyboardArrows
        swipeable
        showArrows
      >
        <Link to="/hanging">
          <div>
            <img src={ST} alt="slide1" />
          </div>
        </Link>

        <Link to="/flowering">
          <div>
            <img src={ST} alt="slide2" />
          </div>
        </Link>

        <Link to="ferns-and-palms">
          <div>
            <img src={ST} alt="slide3" />
          </div>
        </Link>

      </Carousel>
    </div>
  );
}

export default SectionCarousel;
