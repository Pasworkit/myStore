import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SectionCarousel.module.scss';
import { fetchSlides } from '../../store/slices/slidesSlice';

function SectionCarousel() {
  const dispatch = useDispatch();
  const slides = useSelector((store) => store.slides.data);

  useEffect(() => {
    dispatch(fetchSlides());
  }, []);

  const renderCustomThumbs = () => slides.map((item) => {
    const { imageUrl, customId } = item;
    return (
      <img src={imageUrl} alt={customId} key={customId} />
    );
  });

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
        {
                    slides.map((item) => {
                      const { imageUrl, customId } = item;
                      return (
                        <Link to={`/${customId}`} key={customId}>
                          <div>
                            <img src={imageUrl} alt={customId} />
                          </div>
                        </Link>
                      );
                    })
                }
      </Carousel>
    </div>
  );
}

export default SectionCarousel;
