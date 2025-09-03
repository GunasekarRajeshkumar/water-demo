import {useState, useEffect, useMemo} from 'react';
import {ShoppingCart} from 'lucide-react';
import Image from 'next/image';
import useAnimateOnScrollOnce from '../hooks/useAnimateOnScrollOnce';
import StandingBottleImage from './StandingBottleImage';
import LoadingSpinner from './LoadingSpinner';
import {fetchGoogleSheetsData, formatPrice} from '../utils/sheetsData';

const ShopSection = ({sectionRef, scrollToSection, addToCart}) => {
    const headerRef = useAnimateOnScrollOnce(0.2);
    const productsRef = useAnimateOnScrollOnce(0.15);
    const contactLinkRef = useAnimateOnScrollOnce(0.1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fallback sample data if Google Sheets fails
    const fallbackProducts = useMemo(() => [
        {
            id: 1,
            name: "Maglife Single Bottle",
            price: 40,
            description: "Perfect for trying out or on-the-go hydration. Premium magnesium-enriched water for daily wellness.",
            volume: "1L",
            magnesiumContent: "18-24mg/L",
            imageURL: "/new-bottle.png"
        }, {
            id: 2,
            name: "Maglife Pack of 6",
            price: 220,
            description: "Great value pack for families or regular consumption. Stay hydrated with premium magnesium water.",
            volume: "6L (6 x 1L)",
            magnesiumContent: "18-24mg/L",
            imageURL: "/new-bottle.png"
        }, {
            id: 3,
            name: "Maglife Pack of 12",
            price: 420,
            description: "Best value for bulk orders and regular customers. Premium hydration for the whole family.",
            volume: "12L (12 x 1L)",
            magnesiumContent: "18-24mg/L",
            imageURL: "/new-bottle.png"
        }
    ], []);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);

                const data = await fetchGoogleSheetsData();

                // Use Google Sheets data if available and valid, otherwise use fallback
                if (data && Array.isArray(data) && data.length > 0) {
                    setProducts(data);
                } else {
                    setProducts(fallbackProducts);
                }

                setLoading(false);
            } catch (err) {
                console.error('❌ Error loading products:', err);
                setProducts(fallbackProducts);
                setLoading(false);
            }
        };

        loadProducts();
    }, [fallbackProducts]);

    const handleAddToCart = (product) => {
        addToCart({name: product.name, price: product.price, quantity: 1, image: product.imageURL});
    };

    const handleRefresh = async () => {
        setError(null);
        setLoading(true);
        try {
            const data = await fetchGoogleSheetsData();
            if (data && Array.isArray(data) && data.length > 0) {
                setProducts(data);
            } else {
                setProducts(fallbackProducts);
            }
            setLoading(false);
        } catch (err) {
            console.error('Error refreshing products:', err);
            setProducts(fallbackProducts);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section ref={sectionRef}
                id="shop"
                className="py-20 bg-bg-light-theme text-text-light-theme dark:bg-bg-dark-theme dark:text-text-dark-theme">
                <div className="container mx-auto px-6 text-center">
                    <div ref={headerRef}
                        className="fade-in-up">
                        <h2 className="text-4xl font-bold text-brand-primary dark:text-text-dark-theme mb-6">Shop Maglife Now!</h2>
                        <p className="text-lg text-text-light-theme-muted dark:text-text-dark-theme-muted mb-10 max-w-xl mx-auto">
                            Loading our premium products...
                        </p>
                        <LoadingSpinner/>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section ref={sectionRef}
                id="shop"
                className="py-20 bg-bg-light-theme text-text-light-theme dark:bg-bg-dark-theme dark:text-text-dark-theme">
                <div className="container mx-auto px-6 text-center">
                    <div ref={headerRef}
                        className="fade-in-up">
                        <h2 className="text-4xl font-bold text-brand-primary dark:text-text-dark-theme mb-6">Shop Maglife Now!</h2>
                        <p className="text-lg text-text-light-theme-muted dark:text-text-dark-theme-muted mb-10 max-w-xl mx-auto">
                            {error} </p>
                        <div className="space-x-4">
                            <button onClick={handleRefresh}
                                className="bg-brand-primary dark:bg-accent-blue-dark text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300">
                                Try Again
                            </button>
                            <button onClick={
                                    () => window.location.reload()
                                }
                                className="bg-gray-500 dark:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-600 dark:hover:bg-gray-700 transition duration-300">
                                Reload Page
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={sectionRef}
            id="shop"
            className="py-20 bg-bg-light-theme text-text-light-theme dark:bg-bg-dark-theme dark:text-text-dark-theme">
            <div className="container mx-auto px-6 text-center">
                <div ref={headerRef}
                    className="fade-in-up mb-16">
                    <h2 className="text-4xl font-bold text-brand-primary dark:text-text-dark-theme mb-6">Shop Maglife Now!</h2>
                    <p className="text-lg text-text-light-theme-muted dark:text-text-light-theme-muted mb-10 max-w-xl mx-auto">
                        Ready to experience the Maglife difference? Order online for convenient delivery.
                    </p>
                </div>

                {/* Products Grid Container */}
                <div className="flex justify-center items-center">
                    <div ref={productsRef}
                        className="flex flex-wrap justify-center items-start gap-8 max-w-7xl w-full px-4">
                        {
                        products.length === 0 ? (
                            <div className="flex justify-center items-center w-full py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-blue dark:border-accent-blue-dark"></div>
                            </div>
                        ) : (products.map((product, index) => (
                            <div key={
                                    product.id
                                }
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 w-full sm:w-80 lg:w-96 flex-shrink-0 text-center"
                                style={
                                    {minHeight: '450px'}
                            }>
                                <h3 className="text-2xl font-semibold text-brand-primary dark:text-text-dark-theme mb-4 capitalize">
                                    {
                                    product.name
                                } </h3>
                                <p className="text-text-light-theme-muted dark:text-gray-400 mb-4">
                                    {
                                    product.description
                                } </p>

                                {/* Product Image */}
                                <div className="mb-6 flex justify-center">
                                    {
                                    product.imageURL && product.imageURL.startsWith('http') ? (
                                        <Image src={
                                                product.imageURL
                                            }
                                            alt={
                                                product.name
                                            }
                                            width={160}
                                            height={160}
                                            className="w-40 h-40 object-cover rounded-lg shadow-md"
                                            onError={
                                                (e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'block';
                                                }
                                            }
                                            onLoad={
                                                (e) => {
                                                    e.target.nextSibling.style.display = 'none';
                                                }
                                            }
                                            placeholder="blur"
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="/>
                                    ) : null
                                }
                                    <StandingBottleImage className={
                                        `w-40 h-auto ${
                                            product.imageURL && product.imageURL.startsWith('http') ? 'hidden' : ''
                                        }`
                                    }/>
                                </div>

                                {/* Product Details */}
                                <div className="text-left mb-4 space-y-2">
                                    <p className="text-sm text-text-light-theme-muted dark:text-text-light-theme-muted">
                                        <span className="font-semibold text-text-light-theme dark:text-text-dark-theme">Volume:</span>
                                        {
                                        product.volume
                                    } </p>
                                    <p className="text-sm text-text-light-theme-muted dark:text-text-light-theme-muted">
                                        <span className="font-semibold text-text-light-theme dark:text-text-dark-theme">Magnesium Content:</span>
                                        {
                                        product.magnesiumContent
                                    } </p>
                                </div>

                                {/* Price */}
                                <p className="text-3xl font-bold text-accent-blue dark:text-accent-blue-dark mb-6">
                                    {
                                    formatPrice(product.price)
                                }</p>

                                {/* Add to Cart Button */}
                                <button onClick={
                                        () => handleAddToCart(product)
                                    }
                                    className="w-full bg-brand-primary dark:bg-accent-blue-dark text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 flex items-center justify-center">
                                    <ShoppingCart size={20}
                                        className="mr-2"/>
                                    Add to Cart
                                </button>
                            </div>
                        )))
                    } </div>
                </div>

                {/* Emergency Fallback - Always show something */}
                {
                products.length === 0 && (
                    <div className="mt-8 text-center">
                        <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">⚠️ Emergency Fallback Products</h3>
                            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 w-full sm:w-80 lg:w-96 flex-shrink-0 shadow-lg">
                                    <h4 className="font-bold text-lg mb-2">Single Bottle</h4>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">₹40 - 1L</p>
                                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 w-full sm:w-80 lg:w-96 flex-shrink-0 shadow-lg">
                                    <h4 className="font-bold text-lg mb-2">Pack of 6</h4>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">₹220 - 6L</p>
                                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 w-full sm:w-80 lg:w-96 flex-shrink-0 shadow-lg">
                                    <h4 className="font-bold text-lg mb-2">Pack of 12</h4>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">₹420 - 12L</p>
                                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

                <p ref={contactLinkRef}
                    className="mt-12 text-text-light-theme-muted dark:text-gray-400 fade-in-up stagger-5">
                    For bulk orders or subscriptions, please{' '}
                    <a href="#contact"
                        onClick={
                            (e) => {
                                e.preventDefault();
                                scrollToSection('contact');
                            }
                        }
                        className="text-accent-blue dark:text-accent-blue-dark hover:underline font-medium">contact us</a>.
                </p>
            </div>
        </section>
    );
};

export default ShopSection;
