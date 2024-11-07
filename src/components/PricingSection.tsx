import PricingBox from './PricingBox';
import PricingBoxItem from './PricingBoxItem';

import ScrollAnimation from 'react-animate-on-scroll';

interface PricingSectionProps {
  className?: string;
}

const PricingSection = ({ className }: PricingSectionProps) => {
  return (
    <section className={`${className}`}>
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="mb-32 text-center text-2xl font-semibold sm:mb-44 sm:text-4xl">
          Affordable Rates for Your <br /> Creative Journey
        </h2>
      </ScrollAnimation>

      <div className="flex flex-col items-center gap-10 xl:flex-row xl:justify-center xl:gap-28">
        <ScrollAnimation animateIn="fadeInUp">
          <PricingBox title="Basic Package" price={49} className="flex-1">
            <PricingBoxItem>1 Hour Studio time</PricingBoxItem>
            <PricingBoxItem>Basic Lighting Setup</PricingBoxItem>
            <PricingBoxItem>Online Booking and Scheduling</PricingBoxItem>
            <PricingBoxItem strikeThrough={true}>
              Edited High Resolution Photos
            </PricingBoxItem>
            <PricingBoxItem strikeThrough={true}>
              Access to All Props and Backdrops
            </PricingBoxItem>
          </PricingBox>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <PricingBox
            title="Premium Package"
            price={129}
            glow={true}
            className="flex-1"
          >
            <PricingBoxItem>1 Hour Studio time</PricingBoxItem>
            <PricingBoxItem>
              <span className="font-semibold">Customized</span> Lighting Setup
            </PricingBoxItem>
            <PricingBoxItem>Online Booking and Scheduling</PricingBoxItem>
            <PricingBoxItem>
              <span className="font-semibold">20</span> Edited High Resolution
              Photos
            </PricingBoxItem>
            <PricingBoxItem>
              Access to <span className="font-semibold">All</span> Props and
              Backdrops
            </PricingBoxItem>
          </PricingBox>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInUp' delay={200}>
          <PricingBox title="Basic Package" price={49} className="flex-1">
            <PricingBoxItem>1 Hour Studio time</PricingBoxItem>
            <PricingBoxItem>Basic Lighting Setup</PricingBoxItem>
            <PricingBoxItem>Online Booking and Scheduling</PricingBoxItem>
            <PricingBoxItem>10 Edited High Resolution Photos</PricingBoxItem>
            <PricingBoxItem strikeThrough={true}>
              Access to All Props and Backdrops
            </PricingBoxItem>
          </PricingBox>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PricingSection;
