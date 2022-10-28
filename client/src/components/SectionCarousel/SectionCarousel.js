import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ST from '../../img/Carousel/Banner.svg';
import styles from './SectionCarousel.module.scss';

function SectionCarousel() {
  return (
    <div className={styles.wrapper}>
      <Carousel>
        <div>
          <img className={styles.wrapper} src={ST} alt="slide 1" />
          <p className={styles.title}>GO to PRODUCT</p>
        </div>

        <div>
          <img className={styles.wrapper} src={ST} alt="slide 2" />
          <p className={styles.title}>GO to PRODUCT</p>
        </div>

        <div>
          <img className={styles.wrapper} src={ST} alt="slide 2" />
          <p className={styles.title}>GO to PRODUCT</p>
        </div>
      </Carousel>
    </div>
  );
}

export default SectionCarousel;
