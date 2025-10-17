import { NextRequest, NextResponse } from 'next/server';

interface CalendlyWebhookPayload {
  event: string;
  time: string;
  payload: {
    event_type: {
      uuid: string;
      name: string;
      slug: string;
    };
    event: {
      uuid: string;
      assigned_to: string[];
      extended_assigned_to: Array<{
        name: string;
        email: string;
        primary: boolean;
      }>;
      start_time: string;
      end_time: string;
      event_type: string;
      location: {
        type: string;
        location?: string;
        join_url?: string;
      };
      invitees_counter: {
        total: number;
        active: number;
        limit: number;
      };
      created_at: string;
      updated_at: string;
      event_memberships: Array<{
        user: string;
        user_email: string;
        user_name: string;
      }>;
      event_guests: Array<{
        email: string;
        created_at: string;
        updated_at: string;
      }>;
      uri: string;
      name: string;
      status: string;
      booking_method: string;
      invitee_start_time: string;
      invitee_end_time: string;
      invitee_start_time_pretty: string;
      invitee_end_time_pretty: string;
      invitee_timezone: string;
      invitee_email: string;
      invitee_name: string;
      invitee_first_name: string;
      invitee_last_name: string;
      cancel_url: string;
      reschedule_url: string;
      invitee_uuid: string;
      payment?: {
        external_id: string;
        provider: string;
        amount: number;
        currency: string;
        terms: string;
        successful: boolean;
      };
      questions_and_answers: Array<{
        question: string;
        answer: string;
        position: number;
      }>;
      tracking: {
        utm_campaign?: string;
        utm_source?: string;
        utm_medium?: string;
        utm_content?: string;
        utm_term?: string;
        salesforce_uuid?: string;
      };
      text_reminder_number?: string;
      rescheduled?: boolean;
      old_event?: {
        uuid: string;
        start_time: string;
        end_time: string;
      };
      new_event?: {
        uuid: string;
        start_time: string;
        end_time: string;
      };
      cancellation?: {
        canceled_by: string;
        reason: string;
        canceler_type: string;
      };
    };
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: CalendlyWebhookPayload = await request.json();
    
    console.log('Calendly webhook received:', body.event, body.time);

    // TODO: Verify webhook signature for security
    // const signature = request.headers.get('calendly-webhook-signature');
    // if (!verifyCalendlySignature(body, signature)) {
    //   return NextResponse.json({ success: false, error: 'Invalid signature' }, { status: 401 });
    // }

    const { event, payload } = body;
    const eventData = payload.event;

    switch (event) {
      case 'invitee.created':
        await handleAppointmentBooked(eventData);
        break;
      
      case 'invitee.canceled':
        await handleAppointmentCanceled(eventData);
        break;
      
      case 'invitee.rescheduled':
        await handleAppointmentRescheduled(eventData);
        break;
      
      default:
        console.log('Unhandled Calendly event:', event);
    }

    return NextResponse.json({
      success: true,
      message: 'Webhook processed successfully'
    });

  } catch (error) {
    console.error('Error processing Calendly webhook:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleAppointmentBooked(eventData: CalendlyWebhookPayload['payload']['event']) {
  console.log('Processing appointment booking:', eventData.uuid);
  
  const inviteeEmail = eventData.invitee_email;
  const appointmentTime = eventData.start_time;
  const doctorEmail = eventData.event_memberships[0]?.user_email;
  
  // TODO: Verify that the invitee email matches the email used during payment
  // This is the email match validation mentioned in the requirements
  const paymentRecord = await findPaymentRecordByEmail(inviteeEmail);
  
  if (!paymentRecord) {
    console.error('No payment record found for email:', inviteeEmail);
    // TODO: Handle case where no payment record is found
    // This could be a security issue or a legitimate edge case
    return;
  }

  if (paymentRecord.status !== 'PAYMENT_COMPLETED') {
    console.error('Payment not completed for email:', inviteeEmail);
    // TODO: Handle case where payment is not completed
    // Cancel the appointment or notify relevant parties
    return;
  }

  // TODO: Update booking status in database
  // await updateBookingStatus(paymentRecord.merchantTransactionId, 'APPOINTMENT_BOOKED', {
  //   calendlyEventId: eventData.uuid,
  //   appointmentTime: appointmentTime,
  //   meetingLink: eventData.location?.join_url
  // });

  // TODO: Send confirmation email to patient with appointment details
  // await sendAppointmentConfirmationEmail({
  //   patientEmail: inviteeEmail,
  //   patientName: eventData.invitee_name,
  //   doctorName: paymentRecord.doctorName,
  //   appointmentTime: appointmentTime,
  //   meetingLink: eventData.location?.join_url,
  //   cancelUrl: eventData.cancel_url,
  //   rescheduleUrl: eventData.reschedule_url
  // });

  // TODO: Send notification to doctor
  // await sendDoctorNotificationEmail({
  //   doctorEmail: doctorEmail,
  //   patientName: eventData.invitee_name,
  //   appointmentTime: appointmentTime,
  //   patientAge: paymentRecord.patientAge,
  //   patientPhone: paymentRecord.patientPhone
  // });

  console.log('Appointment booking processed successfully for:', inviteeEmail);
}

async function handleAppointmentCanceled(eventData: CalendlyWebhookPayload['payload']['event']) {
  console.log('Processing appointment cancellation:', eventData.uuid);
  
  const inviteeEmail = eventData.invitee_email;
  const cancellationReason = eventData.cancellation?.reason;
  
  // TODO: Update booking status in database
  // await updateBookingStatus(eventData.uuid, 'APPOINTMENT_CANCELED', {
  //   cancellationReason: cancellationReason,
  //   canceledBy: eventData.cancellation?.canceled_by,
  //   canceledAt: new Date().toISOString()
  // });

  // TODO: Send cancellation confirmation email
  // await sendCancellationConfirmationEmail({
  //   patientEmail: inviteeEmail,
  //   patientName: eventData.invitee_name,
  //   cancellationReason: cancellationReason
  // });

  // TODO: Handle refund logic if applicable
  // await processRefundIfEligible(eventData.uuid);

  console.log('Appointment cancellation processed for:', inviteeEmail);
}

async function handleAppointmentRescheduled(eventData: CalendlyWebhookPayload['payload']['event']) {
  console.log('Processing appointment reschedule:', eventData.uuid);
  
  const inviteeEmail = eventData.invitee_email;
  const newAppointmentTime = eventData.start_time;
  const oldEventId = eventData.old_event?.uuid;
  
  // TODO: Update booking status in database
  // await updateBookingStatus(oldEventId, 'APPOINTMENT_RESCHEDULED', {
  //   newCalendlyEventId: eventData.uuid,
  //   newAppointmentTime: newAppointmentTime,
  //   oldAppointmentTime: eventData.old_event?.start_time,
  //   rescheduledAt: new Date().toISOString()
  // });

  // TODO: Send reschedule confirmation email
  // await sendRescheduleConfirmationEmail({
  //   patientEmail: inviteeEmail,
  //   patientName: eventData.invitee_name,
  //   newAppointmentTime: newAppointmentTime,
  //   oldAppointmentTime: eventData.old_event?.start_time,
  //   meetingLink: eventData.location?.join_url
  // });

  console.log('Appointment reschedule processed for:', inviteeEmail);
}

// Placeholder function to find payment record by email
async function findPaymentRecordByEmail(email: string) {
  // TODO: Implement database query to find payment record
  console.log('Finding payment record for email:', email);
  
  // For development, return a mock payment record
  return {
    merchantTransactionId: 'TXN_MOCK_123',
    status: 'PAYMENT_COMPLETED',
    doctorName: 'Dr. Mock Doctor',
    patientAge: '25',
    patientPhone: '9876543210'
  };
}

// Placeholder function for webhook signature verification
function verifyCalendlySignature(payload: any, signature: string | null): boolean {
  // TODO: Implement actual signature verification using Calendly's algorithm
  console.log('Verifying Calendly webhook signature');
  console.log('Received signature:', signature);
  
  // For development, always return true
  // In production, implement proper signature verification
  return true;
}


