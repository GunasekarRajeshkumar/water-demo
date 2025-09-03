import {
    Send,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram
} from 'lucide-react';
import useAnimateOnScrollOnce from '../hooks/useAnimateOnScrollOnce';

const ContactSection = ({sectionRef}) => {
    const headerRef = useAnimateOnScrollOnce(0.2);
    const contactCardRef = useAnimateOnScrollOnce(0.1);

    return (
        <section ref={sectionRef}
            id="contact"
            className="py-20 bg-bg-light-theme text-text-light-theme dark:bg-bg-dark-theme dark:text-text-dark-theme">
            <div className="container mx-auto px-6">
                <div ref={headerRef}
                    className="text-center mb-16 fade-in-up">
                    <Send size={48}
                        className="mx-auto text-accent-blue dark:text-accent-blue-dark mb-4"/>
                    <h2 className="text-4xl font-bold text-brand-primary dark:text-text-dark-theme mb-4">Get In Touch</h2>
                    <p className="text-lg text-text-light-theme-muted dark:text-text-dark-theme-muted max-w-2xl mx-auto">
                        We&apos;d love to hear from you! Whether you have a question, feedback, or a partnership inquiry, here&apos;s how to reach us.
                    </p>
                </div>
                <div ref={contactCardRef}
                    className={`max-w-lg mx-auto bg-bg-light-theme-alt dark:bg-bg-dark-theme-card p-8 rounded-xl shadow-lg fade-in-up stagger-1`}>
                    <h3 className="text-2xl font-semibold text-brand-primary dark:text-text-dark-theme mb-6 text-center md:text-left">Contact Information</h3>
                    <div className="space-y-6 text-text-light-theme-muted dark:text-text-dark-theme-muted">
                        <div className="flex items-start">
                            <Mail size={24}
                                className="text-accent-blue dark:text-accent-blue-dark mr-4 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-semibold text-brand-primary dark:text-text-dark-theme">Email</h4>
                                <a href="mailto:maglife2024@gmail.com" className="hover:text-accent-blue dark:hover:text-accent-blue-dark transition-colors">maglife2024@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Phone size={24}
                                className="text-accent-blue dark:text-accent-blue-dark mr-4 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-semibold text-brand-primary dark:text-text-dark-theme">Phone</h4>
                                <a href="tel:+918125355904" className="hover:text-accent-blue dark:hover:text-accent-blue-dark transition-colors">+918125355904</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin size={24}
                                className="text-accent-blue dark:text-accent-blue-dark mr-4 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-semibold text-brand-primary dark:text-text-dark-theme">Address</h4>
                                <p>8-2-289/8/1/B, Hyderabad, Telangana, India.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-border-dark-theme">
                        <h4 className="text-lg font-semibold text-brand-primary dark:text-text-dark-theme mb-4 text-center md:text-left">Follow Us</h4>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" aria-label="Facebook" className="text-gray-500 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-blue-dark transition-colors">
                                <Facebook size={28}/>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-blue-dark transition-colors">
                                <Twitter size={28}/>
                            </a>
                            <a href="https://www.instagram.com/maglifewater/" aria-label="Instagram" className="text-gray-500 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-blue-dark transition-colors">
                                <Instagram size={28}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
