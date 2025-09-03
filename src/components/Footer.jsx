const Footer = ({sections, scrollToSection}) => (
    <footer className="bg-gray-100 text-text-light-theme dark:bg-bg-dark-theme-card dark:text-text-dark-theme-muted py-12 border-t border-gray-200 dark:border-border-dark-theme">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-brand-primary dark:text-text-dark-theme">Maglife</h3>
            <p className="mb-4 text-text-light-theme-muted dark:text-gray-400">Magnesium Magic In Every Sip.</p>
                         <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
                 {Object.keys(sections).map(sectionId => (
                     <a 
                         key={sectionId}
                         href={`#${sectionId}`}
                         onClick={(e) => {
                             e.preventDefault();
                             scrollToSection(sectionId);
                         }}
                         className="hover:text-accent-blue dark:hover:text-accent-blue-dark transition-colors"
                     >
                         {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                     </a>
                 ))}
             </div>
             <p className="text-sm text-gray-500 dark:text-gray-500">
                 © {new Date().getFullYear()} Maglife. All Rights Reserved. Crafted with care.
             </p>
        </div>
    </footer>
);

export default Footer;
