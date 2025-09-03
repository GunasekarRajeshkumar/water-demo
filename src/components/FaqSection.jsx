import {HelpCircle} from 'lucide-react';
import useAnimateOnScrollOnce from '../hooks/useAnimateOnScrollOnce';
import FaqItem from './FaqItem';

const FaqSection = ({sectionRef}) => {
    const headerRef = useAnimateOnScrollOnce(0.2);
    const faqListRef = useAnimateOnScrollOnce(0.1);

    return (
        <section ref={sectionRef}
            id="faq"
            className="py-20 bg-bg-light-theme-alt text-text-light-theme dark:bg-bg-dark-theme dark:text-text-dark-theme">
            <div className="container mx-auto px-6">
                <div ref={headerRef}
                    className="text-center mb-16 fade-in-up">
                    <HelpCircle size={48}
                        className="mx-auto text-accent-blue dark:text-accent-blue-dark mb-4"/>
                    <h2 className="text-4xl font-bold text-brand-primary dark:text-text-dark-theme mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-text-light-theme-muted dark:text-text-dark-theme-muted max-w-2xl mx-auto">
                        Got questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, feel free to reach out.
                    </p>
                </div>
                <div ref={faqListRef}
                    className="max-w-3xl mx-auto fade-in-up stagger-1">
                    <FaqItem question="What is Maglife?" answer="Maglife is a premium magnesium-infused water designed to hydrate and support your overall well-being. Magnesium is an essential mineral that plays a key role in muscle function, stress reduction, and nerve health, making Maglife the perfect drink to support your active lifestyle."/>
                    <FaqItem question="What are the benefits of drinking magnesium water?" answer="Magnesium is vital for maintaining proper muscle function, reducing stress, improving sleep quality, and supporting the nervous system. By drinking Maglife, you can help replenish magnesium levels that may be low in your diet, supporting relaxation, reducing muscle cramps, and promoting better mental clarity."/>
                    <FaqItem question="Is magnesium water safe to drink daily?" answer="Yes! Magnesium water is safe for daily consumption, especially for individuals who need to support their magnesium levels."/>
                    <FaqItem question="When is the best time to drink Maglife?" answer="Maglife is great for any time you need hydration with an extra wellness boost. It&apos;s especially beneficial during or after workouts, as magnesium helps with muscle recovery and relaxation. It&apos;s also ideal for helping manage stress, so you can enjoy it throughout your day—whether at work, after exercise, or before bed for better sleep."/>
                    <FaqItem question="Does Maglife contain sugar or artificial ingredients?" answer="No, Maglife is completely free of sugars, artificial sweeteners, and preservatives. We prioritize clean, natural ingredients, so you can enjoy a refreshing, pure beverage with no unnecessary additives."/>
                    <FaqItem question="Where can I buy Maglife?" answer="You can purchase Maglife directly from our website, or at retail locations near you. We&apos;re continuously expanding our availability, so stay tuned for new store listings!"/>
                                         <FaqItem question="Where we ship"
                         answer={
                             <>
                         Currently we only ship within India via retailers. Contact us at{' '}
                         <a href="mailto:maglife2024@gmail.com" className="text-accent-blue dark:text-accent-blue-dark hover:underline font-medium">maglife2024@gmail.com</a> for more information.
                         </>
                         }/>
                    <FaqItem question="How do I return or exchange a purchase?" answer="We want you to love Maglife! If you&apos;re not completely satisfied with your purchase, please contact our customer service team, and we&apos;ll be happy to assist you with returns or exchanges. Your satisfaction is our priority."/>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
