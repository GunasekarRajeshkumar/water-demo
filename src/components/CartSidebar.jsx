import {X, ShoppingCart, Trash2, CreditCard} from 'lucide-react';
import Image from 'next/image';
import newBottleImage from '../assets/new-bottle.png';

const CartSidebar = ({
    isOpen,
    onClose,
    cartItems,
    removeFromCart,
    updateQuantity,
    onCheckout
}) => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <> {/* Overlay */}
            {
            isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={onClose}/>
            )
        }

            {/* Cart Sidebar */}
            <div className={
                `fixed top-0 right-0 h-full w-full sm:w-96 bg-bg-light-theme dark:bg-bg-dark-theme shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`
            }>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-border-dark-theme">
                    <h2 className="text-2xl font-bold text-brand-primary dark:text-text-dark-theme">
                        Shopping Cart
                    </h2>
                    <button onClick={onClose}
                        className="p-2 rounded-full text-text-light-theme dark:text-text-dark-theme-muted hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-blue-dark transition-colors duration-300">
                        <X size={24}/>
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {
                    cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <ShoppingCart size={64}
                                className="mx-auto text-gray-300 dark:text-gray-600 mb-4"/>
                            <p className="text-text-light-theme-muted dark:text-text-dark-theme-muted text-lg">
                                Your cart is empty
                            </p>
                            <p className="text-text-light-theme-muted dark:text-text-dark-theme-muted text-sm mt-2">
                                Add some products to get started
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {
                            cartItems.map((item, index) => (
                                <div key={index}
                                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <Image src={newBottleImage}
                                        alt={
                                            item.name
                                        }
                                        className="w-16 h-16 object-contain rounded"/>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-brand-primary dark:text-text-dark-theme">
                                            {
                                            item.name
                                        } </h3>
                                        <p className="text-sm text-text-light-theme-muted dark:text-text-dark-theme-muted">
                                            ₹{
                                            item.price
                                        } </p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <button onClick={
                                                    () => updateQuantity(index, Math.max(0, item.quantity - 1))
                                                }
                                                className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center">
                                                -
                                            </button>
                                            <span className="w-8 text-center text-sm font-medium">
                                                {
                                                item.quantity
                                            } </span>
                                            <button onClick={
                                                    () => updateQuantity(index, item.quantity + 1)
                                                }
                                                className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={
                                            () => removeFromCart(index)
                                        }
                                        className="p-2 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200">
                                        <Trash2 size={20}/>
                                    </button>
                                </div>
                            ))
                        } </div>
                    )
                } </div>

                {/* Footer */}
                {
                cartItems.length > 0 && (
                    <div className="border-t border-gray-200 dark:border-border-dark-theme p-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-brand-primary dark:text-text-dark-theme">
                                Total:
                            </span>
                            <span className="text-2xl font-bold text-accent-blue dark:text-accent-blue-dark">
                                ₹{total} </span>
                        </div>
                        <button onClick={onCheckout}
                            className="w-full bg-brand-primary dark:bg-accent-blue-dark text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 flex items-center justify-center">
                            <CreditCard size={20}
                                className="mr-2"/>
                            Proceed to Checkout
                        </button>
                    </div>
                )
            } </div>
        </>
    );
};

export default CartSidebar;
