'use client';

import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
    Header,
    HomeSection,
    BenefitsSection,
    ProductSection,
    ShopSection,
    FaqSection,
    ContactSection,
    Footer,
    CartSidebar,
    ScrollToTopButton
} from '../components';
import CheckoutModal from '../components/CheckoutModal';

// Main Page Component
export default function HomePage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const sections = {
        home: useRef(null),
        benefits: useRef(null),
        product: useRef(null),
        shop: useRef(null),
        faq: useRef(null),
        contact: useRef(null)
    };

    const scrollToSection = useCallback((sectionId) => {
        if (sections[sectionId] && sections[sectionId].current) {
            sections[sectionId].current.scrollIntoView({behavior: 'smooth'});
        }
        setIsMobileMenuOpen(false);
    }, []);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(cartItem => cartItem.name === item.name);

            if (existingItemIndex >= 0) {
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += item.quantity;
                return newItems;
            } else {
                return [
                    ...prevItems,
                    item
                ];
            }
        });

        setIsCartOpen(true);
    };

    const removeFromCart = (index) => {
        setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    const updateQuantity = (index, newQuantity) => {
        if (newQuantity === 0) {
            removeFromCart(index);
        } else {
            setCartItems(prevItems => prevItems.map((item, i) => i === index ? {
                ...item,
                quantity: newQuantity
            } : item));
        }
    };

    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const openCheckout = () => {
        setIsCheckoutOpen(true);
        setIsCartOpen(false);
    };

    const closeCheckout = () => {
        setIsCheckoutOpen(false);
    };

    const handleOrderComplete = (orderData) => { // Handle successful order completion
        console.log('Order completed:', orderData);
        setCartItems([]); // Clear cart
        alert(`Order completed successfully! Order ID: ${
            orderData.orderId
        }`);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: "-80px 0px -50% 0px",
            threshold: 0
        });

        Object.values(sections).forEach(sectionRef => {
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
        });

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        const currentHash = window.location.hash.replace('#', '');
        if (currentHash && sections[currentHash]) {
            setActiveSection(currentHash);
            setTimeout(() => {
                scrollToSection(currentHash);
            }, 100);
        }

        return() => {
            Object.values(sections).forEach(sectionRef => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections, scrollToSection]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={
            darkMode ? "dark" : ""
        }>
            <div className="font-sans antialiased bg-bg-light-theme text-text-light-theme dark:bg-bg-dark-theme dark:text-text-dark-theme transition-colors duration-300">
                <Header isDarkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    sections={sections}
                    scrollToSection={scrollToSection}
                    activeSection={activeSection}
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    cartItems={cartItems}
                    openCart={openCart}/>
                <main className="pt-20">
                    <HomeSection sectionRef={
                            sections.home
                        }
                        scrollToSection={scrollToSection}/>
                    <BenefitsSection sectionRef={
                        sections.benefits
                    }/>
                    <ProductSection sectionRef={
                            sections.product
                        }
                        scrollToSection={scrollToSection}/>
                    <ShopSection sectionRef={
                            sections.shop
                        }
                        scrollToSection={scrollToSection}
                        addToCart={addToCart}/>
                    <FaqSection sectionRef={
                        sections.faq
                    }/>
                    <ContactSection sectionRef={
                        sections.contact
                    }/>
                </main>
                <Footer sections={sections}
                    scrollToSection={scrollToSection}/>
                <ScrollToTopButton showScrollTop={showScrollTop}/> {/* Cart Sidebar */}
                <CartSidebar isOpen={isCartOpen}
                    onClose={closeCart}
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                    onCheckout={openCheckout}/> {/* Checkout Modal */}
                <CheckoutModal isOpen={isCheckoutOpen}
                    onClose={closeCheckout}
                    cartItems={cartItems}
                    onOrderComplete={handleOrderComplete}/>
            </div>
        </div>
    );
}
