import { NextRequest, NextResponse } from 'next/server';
import { initiatePhonePePayment, DoctorBookingData } from '@/lib/phonepe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['doctorId', 'doctorName', 'consultationFee', 'patientName', 'patientEmail', 'patientPhone', 'patientAge'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields', 
          missingFields 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.patientEmail)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Validate phone number format (Indian mobile numbers)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(body.patientPhone.replace(/\s+/g, ''))) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid phone number format' 
        },
        { status: 400 }
      );
    }

    // Validate age
    const age = parseInt(body.patientAge);
    if (isNaN(age) || age < 1 || age > 120) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid age' 
        },
        { status: 400 }
      );
    }

    // Validate consultation fee
    const consultationFee = parseFloat(body.consultationFee);
    if (isNaN(consultationFee) || consultationFee <= 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid consultation fee' 
        },
        { status: 400 }
      );
    }

    const bookingData: DoctorBookingData = {
      doctorId: body.doctorId,
      doctorName: body.doctorName,
      consultationFee: consultationFee,
      patientName: body.patientName,
      patientEmail: body.patientEmail,
      patientPhone: body.patientPhone.replace(/\s+/g, ''),
      patientAge: body.patientAge
    };

    // TODO: Store booking data in database with PENDING status
    console.log('Storing booking data:', bookingData);

    // Initiate PhonePe payment
    const paymentResponse = await initiatePhonePePayment(bookingData);

    if (!paymentResponse.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to initiate payment',
          details: paymentResponse.message
        },
        { status: 500 }
      );
    }

    // Return payment initiation response
    return NextResponse.json({
      success: true,
      message: 'Payment initiated successfully',
      data: {
        merchantTransactionId: paymentResponse.data?.merchantTransactionId,
        transactionId: paymentResponse.data?.transactionId,
        amount: paymentResponse.data?.amount,
        // In production, return the actual payment URL from PhonePe
        paymentUrl: `https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay/${paymentResponse.data?.merchantTransactionId}`,
        redirectUrl: process.env.NEXT_PUBLIC_BASE_URL + '/telemedicine/payment-success'
      }
    });

  } catch (error) {
    console.error('Error initiating payment:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}


