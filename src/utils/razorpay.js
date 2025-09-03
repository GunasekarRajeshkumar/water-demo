// Razorpay utility functions
export const loadRazorpayScript = () => {
    return new Promise((resolve) => {
        if (window.Razorpay) {
            resolve(window.Razorpay);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(window.Razorpay);
        script.onerror = () => {
            throw new Error('Razorpay SDK failed to load');
        };
        document.body.appendChild(script);
    });
};

export const createOrder = async (orderData) => {
    try {
        const response = await fetch('/api/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        if (! response.ok) {
            throw new Error('Failed to create order');
        }

        const order = await response.json();
        return order;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export const processPayment = async (paymentData) => {
    try {
        const response = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentData)
        });

        if (! response.ok) {
            throw new Error('Payment verification failed');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
};

export const formatAmount = (amount) => { // Convert to paise (Razorpay expects amount in paise)
    return Math.round(amount * 100);
};

export const getRazorpayOptions = (order, userInfo, onSuccess, onFailure) => {
    return {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: formatAmount(order.amount),
        currency: 'INR',
        name: process.env.NEXT_PUBLIC_APP_NAME || 'Maglife',
        description: `Order for ${
            order.items.map(item => item.name).join(', ')
        }`,
        order_id: order.id,
        prefill: {
            name: userInfo.name,
            email: userInfo.email,
            contact: userInfo.phone
        },
        notes: {
            address: userInfo.address,
            order_id: order.id
        },
        theme: {
            color: '#3B82F6'
        },
        handler: onSuccess,
        modal: {
            ondismiss: onFailure
        }
    };
};
