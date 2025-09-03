import {Star} from 'lucide-react';
import useAnimateOnScrollOnce from '../hooks/useAnimateOnScrollOnce';
import StandingBottleImage from './StandingBottleImage';

const ProductSection = ({sectionRef, scrollToSection}) => {
    const imageRef = useAnimateOnScrollOnce(0.2);
    const contentRef = useAnimateOnScrollOnce(0.2);

    return (
        <section ref={sectionRef}
            id="product"
            className="py-20 bg-bg-light-theme-alt text-text-light-theme dark:bg-bg-dark-theme dark:text-text-dark-theme">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    <div ref={imageRef}
                        className="md:w-1/2 mb-10 md:mb-0 flex justify-center fade-in-left">
                        <StandingBottleImage className="w-80 h-auto md:w-96 lg:w-[500px]"/>
                    </div>
                    <div ref={contentRef}
                        className="md:w-1/2 md:pl-12 fade-in-right">
                        <h2 className="text-4xl font-bold text-brand-primary dark:text-text-dark-theme mb-6">Meet Maglife</h2>
                        <p className="text-lg text-text-light-theme-muted dark:text-text-dark-theme-muted mb-4">
                            Did you know? 1 in 3 people suffers from magnesium deficiency, which is linked to various health issues. Research shows that adding magnesium to your diet can reduce the risk of heart disease, stroke, and diabetes. Magnesium supports optimal nerve, muscle, and bone function, while also enhancing muscle performance and strength. It also helps reduce anxiety and improves sleep quality.</p>
                        <p className="text-lg text-text-light-theme-muted dark:text-text-dark-theme-muted mb-6">
                            Maglife is not just water; it&apos;s a commitment to your health. Each bottle delivers a refreshing taste and the vital magnesium your body needs. It&apos;s crisp, clean, and crafted for peak performance and recovery.
                        </p>
                        <ul className="space-y-3 text-text-light-theme-muted dark:text-text-dark-theme-muted mb-8">
                            <li className="flex items-center"><Star className="text-yellow-400 dark:text-yellow-300 mr-2"
                                    size={20}/>
                                Crisp Taste</li>
                            <li className="flex items-center"><Star className="text-yellow-400 dark:text-yellow-300 mr-2"
                                    size={20}/>
                                Multi-Step Intensive Filtration Process
                            </li>
                            <li className="flex items-center"><Star className="text-yellow-400 dark:text-yellow-300 mr-2"
                                    size={20}/>
                                Enriched With Magnesium
                            </li>
                            <li className="flex items-center"><Star className="text-yellow-400 dark:text-yellow-300 mr-2"
                                    size={20}/>
                                Supports Overall Well-Being</li>
                        </ul>
                                                 <button 
                             onClick={() => scrollToSection('shop')}
                             className="bg-brand-primary dark:bg-accent-blue-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 transform hover:scale-105"
                         >
                             Get Yours Today
                         </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
