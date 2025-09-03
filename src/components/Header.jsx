import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import logoImage from '../assets/logo.png';
import NavLink from './NavLink';

const Header = ({ isDarkMode, toggleDarkMode, sections, scrollToSection, activeSection, isMobileMenuOpen, setIsMobileMenuOpen, cartItems, openCart }) => (
  <nav className="bg-bg-light-theme dark:bg-bg-dark-theme shadow-md dark:shadow-none dark:border-b dark:border-border-dark-theme fixed w-full z-50 top-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex-shrink-0 flex items-center">
            <Image src={logoImage} alt="Maglife Logo" className="h-10 w-auto mr-3" />
            <h1 className="text-3xl font-bold text-brand-primary dark:text-text-dark-theme">
              Maglife
            </h1>
          </a>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {Object.keys(sections).map((sectionId) => (
              <NavLink
                key={sectionId}
                href={`#${sectionId}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(sectionId); }}
                isActive={activeSection === sectionId}
              >
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* Cart Icon */}
          <button
            onClick={openCart}
            className="relative p-2 rounded-full text-text-light-theme dark:text-text-dark-theme-muted hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-bg-dark-theme focus:ring-accent-blue dark:focus:ring-accent-blue-dark transition-colors duration-300"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-text-light-theme dark:text-text-dark-theme-muted hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-bg-dark-theme focus:ring-accent-blue dark:focus:ring-accent-blue-dark transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-gray-100 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-brand-primary dark:text-accent-blue-dark hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-700 focus:ring-brand-primary dark:focus:ring-accent-blue-dark transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </div>
    {isMobileMenuOpen && (
      <div className="md:hidden bg-bg-light-theme dark:bg-bg-dark-theme shadow-lg" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Object.keys(sections).map((sectionId) => (
            <a
              key={sectionId}
              href={`#${sectionId}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(sectionId); setIsMobileMenuOpen(false); }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${activeSection === sectionId
                ? 'bg-blue-50 dark:bg-opacity-20 dark:bg-white text-blue-700 dark:text-accent-blue-dark font-semibold'
                : 'text-text-light-theme dark:text-text-dark-theme-muted hover:bg-gray-100 dark:hover:bg-opacity-10 dark:hover:bg-white hover:text-accent-blue dark:hover:text-accent-blue-dark'
                }`}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </a>
          ))}
        </div>
      </div>
    )}
  </nav>
);

export default Header;
