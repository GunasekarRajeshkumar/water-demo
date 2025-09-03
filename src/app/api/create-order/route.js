import Razorpay from 'razorpay';

export async function POST(request) {
    try {
        let keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        let keySecret = process.env.RAZORPAY_KEY_SECRET || process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET;
        if (!keyId || !keySecret) {
            console.warn('Razorpay env vars missing; using local fallback test keys. Do not use in production.');
            keyId = keyId || 'rzp_test_1234567890';
            keySecret = keySecret || 'test_secret_1234567890';
        }

        const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
        const {items, userInfo, totalAmount} = await request.json();

        // Validate input
        if (!items || !Array.isArray(items) || items.length === 0) {
            return Response.json({
                error: 'Invalid items data'
            }, {status: 400});
        }

        if (!userInfo || !userInfo.name || !userInfo.email) {
            return Response.json({
                error: 'Invalid user information'
            }, {status: 400});
        }

        // Create Razorpay order
        const order = await razorpay.orders.create({
            amount: Math.round(totalAmount * 100),
            currency: 'INR',
            receipt: `order_${
                Date.now()
            }`,
            notes: {
                user_name: userInfo.name,
                user_email: userInfo.email,
                user_phone: userInfo.phone || '',
                user_address: userInfo.address || '',
                items: JSON.stringify(items)
            }
        });

        return Response.json({
            id: order.id,
            amount: order.amount,
            currency: order.currency,
            receipt: order.receipt,
            status: order.status
        });
    } catch (error) {
        console.error('Error creating order:', error);
        return Response.json({
            error: 'Failed to create order'
        }, {status: 500});
    }
}
