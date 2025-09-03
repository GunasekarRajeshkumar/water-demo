import {useState} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';

const FaqItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 dark:border-border-dark-theme py-6">
            <button onClick={
                    () => setIsOpen(!isOpen)
                }
                className="flex justify-between items-center w-full text-left text-lg font-medium text-brand-primary dark:text-text-dark-theme hover:text-accent-blue dark:hover:text-accent-blue-dark focus:outline-none">
                <span>{question}</span>
                {
                isOpen ? (
                    <ChevronUp size={24}
                        className="text-accent-blue dark:text-accent-blue-dark"/>
                ) : (
                    <ChevronDown size={24}
                        className="text-gray-500 dark:text-gray-400"/>
                )
            } </button>
            {
            isOpen && (
                <div className="mt-4 text-text-light-theme-muted dark:text-text-dark-theme-muted prose max-w-none">
                    <p>{answer}</p>
                </div>
            )
        } </div>
    );
};

export default FaqItem;
