import { NextRequest, NextResponse } from 'next/server';
import { verifyPhonePePayment, base64Decode } from '@/lib/phonepe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('PhonePe webhook received:', body);

    // TODO: Verify the webhook signature/checksum for security
    // const receivedChecksum = request.headers.get('X-VERIFY');
    // if (!verifyWebhookSignature(body, receivedChecksum)) {
    //   return NextResponse.json({ success: false, error: 'Invalid signature' }, { status: 401 });
    // }

    // Extract transaction details from webhook payload
    let transactionData;
    try {
      // PhonePe sends base64 encoded response
      const decodedResponse = base64Decode(body.response);
      transactionData = JSON.parse(decodedResponse);
    } catch (error) {
      console.error('Error decoding PhonePe response:', error);
      return NextResponse.json(
        { success: false, error: 'Invalid response format' },
        { status: 400 }
      );
    }

    const { merchantTransactionId, transactionId, amount, state, responseCode } = transactionData;

    // Verify payment status with PhonePe
    const verificationResponse = await verifyPhonePePayment(merchantTransactionId);

    if (!verificationResponse.success) {
      console.error('Payment verification failed:', verificationResponse);
      return NextResponse.json(
        { success: false, error: 'Payment verification failed' },
        { status: 400 }
      );
    }

    // TODO: Update booking status in database based on payment status
    if (state === 'COMPLETED' && responseCode === 'SUCCESS') {
      console.log('Payment successful for transaction:', merchantTransactionId);
      
      // TODO: Update database
      // await updateBookingStatus(merchantTransactionId, 'PAYMENT_COMPLETED');
      
      // TODO: Send confirmation email to patient
      // await sendPaymentConfirmationEmail(merchantTransactionId);
      
      // TODO: Trigger any other post-payment actions
      
    } else {
      console.log('Payment failed or pending for transaction:', merchantTransactionId);
      
      // TODO: Update database with failed/pending status
      // await updateBookingStatus(merchantTransactionId, 'PAYMENT_FAILED');
    }

    // Respond to PhonePe webhook
    return NextResponse.json({
      success: true,
      message: 'Webhook processed successfully'
    });

  } catch (error) {
    console.error('Error processing PhonePe webhook:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Placeholder function for webhook signature verification
function verifyWebhookSignature(payload: any, receivedChecksum: string | null): boolean {
  // TODO: Implement actual signature verification using PhonePe's algorithm
  console.log('Verifying webhook signature for payload:', payload);
  console.log('Received checksum:', receivedChecksum);
  
  // For development, always return true
  // In production, implement proper signature verification
  return true;
}


