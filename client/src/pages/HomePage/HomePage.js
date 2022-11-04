import { NavLink } from 'react-router-dom';
import SectionDelivery from '../../components/SectionDelivery/SectionDelivery';
import SectionFeedback from '../../components/SectionFeedback/SectionFeedback';
import SectionBest from '../../components/SectionBest/SectionBest';
import SectionCarousel from '../../components/SectionCarousel/SectionCarousel';

function HomePage() {
  return (
    <div>
      <SectionCarousel />
      <div>
        <h3 style={{
          fontSize: '24px', textDecoration: 'underline', color: 'blue', margin: '24px',
        }}
        >
          <NavLink to="/496631">Product-Link-Example</NavLink>
        </h3>
      </div>
      <SectionBest />
      <SectionDelivery />
      <SectionFeedback />
    </div>
  );
}

export default HomePage;
