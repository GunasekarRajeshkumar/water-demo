const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-bg-light-theme dark:bg-bg-dark-theme-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col">
    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-accent-blue dark:bg-gray-700 dark:text-accent-blue-dark rounded-full mb-4 mx-auto flex-shrink-0">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-brand-primary dark:text-text-dark-theme mb-2 text-center">{title}</h3>
    <p className="text-text-light-theme-muted dark:text-text-dark-theme-muted text-center flex-grow">{description}</p>
  </div>
);

export default BenefitCard;
