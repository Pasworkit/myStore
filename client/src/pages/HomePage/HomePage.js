import SectionDelivery from '../../components/SectionDelivery/SectionDelivery';
import SectionFeedback from '../../components/SectionFeedback/SectionFeedback';
import SectionBest from '../../components/SectionBest/SectionBest';
import SectionCarousel from '../../components/SectionCarousel/SectionCarousel';
import SectionMap from '../../components/SectionMap/SectionMap';
import SectionPromo from '../../components/SectionPromo/SectionPromo';
// import ApiTest from '../../API/ApiTest';

function HomePage() {
  return (
    <div>
      {/* <ApiTest /> */}
      <SectionCarousel />
      <SectionPromo />
      <SectionBest />
      <SectionDelivery />
      <SectionFeedback />
      <SectionMap />
    </div>
  );
}

export default HomePage;
