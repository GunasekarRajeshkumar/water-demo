import {ChevronUp} from 'lucide-react';

const ScrollToTopButton = ({showScrollTop}) => (
    showScrollTop && (
        <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="fixed bottom-6 right-6 bg-brand-primary dark:bg-accent-blue-dark hover:bg-blue-700 dark:hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-accent-blue-dark focus:ring-opacity-50"
            aria-label="Scroll to top"
        >
            <ChevronUp size={24}/>
        </button>
    )
);

export default ScrollToTopButton;
