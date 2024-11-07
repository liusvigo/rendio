import { Button } from '@/components/ui/button';
import Marquee from 'react-fast-marquee';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section
      className={`flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-0 ${className}`}
    >
      <div className="flex-1">
        <h1 className="mb-3 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Effortless <br /> Online Booking <br /> at{' '}
          <span className="text text-orange-400">Rendio</span>
        </h1>
        <p className="mb-8 text-gray-300 sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">
          Capture your moments with ease. <br /> Schedule your session in just a
          few clicks.
        </p>
        <Button
          className="bg-orange-400 text-slate-950 hover:bg-orange-300"
          onClick={() => {
            const el = document.getElementById('day-picker');
            el?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Book Now
        </Button>
      </div>

      <div className="flex-1">
        <Marquee style={{ borderRadius: 8 }}>
          <img
            src="/assets/studio-1.jpg"
            className="h-[300px] pr-4 lg:h-[500px]"
          />
          <img
            src="/assets/studio-2.jpg"
            className="h-[300px] pr-4 lg:h-[500px]"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default HeroSection;
