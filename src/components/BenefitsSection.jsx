import { Zap, ThumbsUp, Heart, Brain, Bone, Droplet } from 'lucide-react';
import useAnimateOnScrollOnce from '../hooks/useAnimateOnScrollOnce';
import BenefitCard from './BenefitCard';

const BenefitsSection = ({ sectionRef }) => {
  const headerRef = useAnimateOnScrollOnce(0.2);
  const cardsRef = useAnimateOnScrollOnce(0.1);

  return (
    <section ref={sectionRef} id="benefits" className="py-20 bg-bg-light-theme text-text-light-theme dark:bg-bg-dark-theme dark:text-text-dark-theme">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className="text-center mb-16 fade-in-up"
        >
          <h2 className="text-4xl font-bold text-brand-primary dark:text-text-dark-theme mb-4">The Magnesium Difference</h2>
          <p className="text-lg text-text-light-theme-muted dark:text-text-dark-theme-muted max-w-2xl mx-auto">
            Maglife&apos;s unique formulation offers a range of health benefits, essential for your daily vitality and well-being.
          </p>
        </div>
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="fade-in-up stagger-1">
            <BenefitCard icon={<Zap size={32} />} title="Enhanced Energy Levels" description="Magnesium plays a key role in energy production, helping you stay active and alert." />
          </div>
          <div className="fade-in-up stagger-2">
            <BenefitCard icon={<ThumbsUp size={32} />} title="Improved Muscle Function" description="Supports muscle relaxation and contraction, reducing cramps and soreness." />
          </div>
          <div className="fade-in-up stagger-3">
            <BenefitCard icon={<Heart size={32} />} title="Better Heart Health" description="Contributes to maintaining a healthy heart rhythm and blood pressure levels." />
          </div>
          <div className="fade-in-up stagger-4">
            <BenefitCard icon={<Brain size={32} />} title="Stress Reduction & Sleep" description="Known for its calming effects, magnesium can help reduce stress and improve sleep quality." />
          </div>
          <div className="fade-in-up stagger-5">
            <BenefitCard icon={<Bone size={32} />} title="Stronger Bones" description="Works with calcium to build and maintain strong, healthy bones." />
          </div>
          <div className="fade-in-up stagger-6">
            <BenefitCard icon={<Droplet size={32} />} title="Optimal Hydration" description="Electrolytes like magnesium help your body absorb and retain water more effectively." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
