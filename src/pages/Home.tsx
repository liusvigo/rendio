import PricingSection from '@/components/PricingSection';
import HeroSection from '../components/HeroSection';
import BookingSection from '@/components/BookingSection';

const Home = () => {
  return (
    <div className="container">
      <HeroSection className="mb-72 mt-16 lg:mb-96 lg:mt-32" />
      <PricingSection className="mb-60 lg:mb-96" />
      <BookingSection className="mb-60 lg:mb-96" />
    </div>
  );
};

export default Home;
