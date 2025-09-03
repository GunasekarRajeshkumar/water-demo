import crypto from 'crypto';

export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

    // Validate input
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return Response.json(
        { error: 'Missing payment verification data' },
        { status: 400 }
      );
    }

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    let keySecret = process.env.RAZORPAY_KEY_SECRET || process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      console.warn('Razorpay secret missing; using local fallback test secret. Do not use in production.');
      keySecret = 'test_secret_1234567890';
    }
    const signature = crypto
      .createHmac('sha256', keySecret)
      .update(text)
      .digest('hex');

    if (signature !== razorpay_signature) {
      return Response.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      );
    }

    // Payment is verified
    return Response.json({
      verified: true,
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      message: 'Payment verified successfully',
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return Response.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
