import styles from './SectionBest.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SectionBest() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>The best offers of the month</h2>
    </div>
  );
}

export default SectionBest;
