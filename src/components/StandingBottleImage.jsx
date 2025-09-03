import Image from 'next/image';
import newBottleImage from '../assets/new-bottle.png';

const StandingBottleImage = ({ className = "w-64 h-auto md:w-80 lg:w-96" }) => (
  <Image src={newBottleImage} alt="Maglife 1L magnesium water bottle with label visible" className={`${className} object-contain`} />
);

export default StandingBottleImage;
