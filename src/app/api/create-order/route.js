import Razorpay from 'razorpay';

const razorpay = new Razorpay({key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET});

export async function POST(request) {
    try {
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
