import useAnimateOnScrollOnce from '../hooks/useAnimateOnScrollOnce';
import BottleImage from './BottleImage';

const HomeSection = ({ sectionRef, scrollToSection }) => {
  const heroRef = useAnimateOnScrollOnce(0.2);
  const imageRef = useAnimateOnScrollOnce(0.2);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center bg-bg-light-theme-alt text-text-light-theme dark:bg-bg-dark-theme dark:text-text-dark-theme relative pb-20"
    >
      <div className="container mx-auto px-6 py-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            ref={heroRef}
            className="md:w-1/2 mb-8 md:mb-0 fade-in-left"
          >
            <h2 className="text-sm font-semibold uppercase text-brand-primary dark:text-text-dark-theme tracking-wider">Magnesium Magic In Every Sip</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 leading-tight text-brand-primary dark:text-text-dark-theme">
              India&apos;s <i>First</i> Magnesium Enriched Water
            </h1>
            <p className="text-lg md:text-xl text-text-light-theme-muted dark:text-text-dark-theme-muted mb-8 max-w-xl">
              Experience water reimagined – pure, minimal, and enriched with essential magnesium. Curated for those who appreciate the finest hydration experience.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('shop')}
                className="w-full sm:w-auto bg-brand-primary dark:bg-accent-blue-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 transform hover:scale-105"
              >
                Shop Now
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="w-full sm:w-auto bg-transparent border-2 border-brand-primary dark:border-accent-blue-dark text-brand-primary dark:text-accent-blue-dark font-semibold py-3 px-8 rounded-lg shadow-sm hover:bg-blue-50 dark:hover:bg-opacity-20 dark:hover:bg-white hover:text-blue-700 dark:hover:text-blue-300 transition duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
          <div
            ref={imageRef}
            className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 mb-8 md:mb-0 fade-in-right"
          >
            <BottleImage className="w-72 h-auto md:w-80 lg:w-[450px]" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-brand-primary dark:bg-black overflow-hidden flex items-center py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="uppercase text-red-500 text-2xl font-bold mx-8 tracking-wide">PREMIUM MAGNESIUM WATER</span>
          <span className="uppercase text-red-500 text-2xl font-bold mx-8 tracking-wide">HYDRATION REDEFINED</span>
          <span className="uppercase text-red-500 text-2xl font-bold mx-8 tracking-wide">ESSENTIAL MINERALS</span>
          <span className="uppercase text-red-500 text-2xl font-bold mx-8 tracking-wide">PURE REFRESHMENT</span>
          <span className="uppercase text-red-500 text-2xl font-bold mx-8 tracking-wide">PREMIUM MAGNESIUM WATER</span>
          <span className="uppercase text-red-500 text-2xl font-bold mx-8 tracking-wide">HYDRATION REDEFINED</span>
          <span className="uppercase text-red-500 text-2xl font-bold mx-8 tracking-wide">ESSENTIAL MINERALS</span>
          <span className="uppercase text-red-500 text-2xl font-bold mx-8 tracking-wide">PURE REFRESHMENT</span>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
