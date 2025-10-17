"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/landing/Footer';
import { CheckCircle, Calendar, Clock, User } from 'lucide-react';

const PaymentSuccessPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [transactionDetails, setTransactionDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extract transaction details from URL parameters
    const merchantTransactionId = searchParams.get('merchantTransactionId');
    const transactionId = searchParams.get('transactionId');
    const amount = searchParams.get('amount');
    const status = searchParams.get('status');

    if (merchantTransactionId) {
      setTransactionDetails({
        merchantTransactionId,
        transactionId,
        amount: amount ? parseInt(amount) / 100 : null, // Convert from paise to rupees
        status
      });
    }

    setIsLoading(false);
  }, [searchParams]);

  const handleBookAppointment = () => {
    // In a real implementation, this would redirect to the specific doctor's Calendly page
    // For now, we'll show a placeholder message
    alert('Redirecting to doctor\'s booking page...\n\nIn production, this would open the doctor\'s Calendly page where you can select your preferred appointment slot.');
  };

  if (isLoading) {
    return (
      <div className="gradient-bg min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="gradient-bg min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 font-anton">
              Payment Successful!
            </h1>
            <p className="text-xl text-white/90 font-poppins">
              Your consultation fee has been paid successfully. You can now book your appointment.
            </p>
          </div>

          {/* Transaction Details */}
          {transactionDetails && (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 font-anton">
                Transaction Details
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/70 font-poppins">Transaction ID:</span>
                  <span className="text-white font-poppins font-semibold">
                    {transactionDetails.transactionId || transactionDetails.merchantTransactionId}
                  </span>
                </div>
                {transactionDetails.amount && (
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-white/70 font-poppins">Amount Paid:</span>
                    <span className="text-green-400 font-poppins font-bold text-lg">
                      ₹{transactionDetails.amount}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-white/70 font-poppins">Status:</span>
                  <span className="text-green-400 font-poppins font-semibold">
                    {transactionDetails.status || 'Completed'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/70 font-poppins">Date & Time:</span>
                  <span className="text-white font-poppins">
                    {new Date().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-anton">
              Next Steps
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 font-poppins">Book Your Appointment</h3>
                  <p className="text-white/80 text-sm font-poppins">
                    Click the button below to access the doctor's calendar and select your preferred appointment slot.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 font-poppins">Receive Confirmation</h3>
                  <p className="text-white/80 text-sm font-poppins">
                    You'll receive an email confirmation with your appointment details and meeting link.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 font-poppins">Join Your Consultation</h3>
                  <p className="text-white/80 text-sm font-poppins">
                    Use the meeting link provided in your confirmation email to join the video consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookAppointment}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg font-poppins flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment Now
            </button>
            
            <button
              onClick={() => window.location.href = '/telemedicine'}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 font-poppins"
            >
              Back to Doctors
            </button>
          </div>

          {/* Support Information */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2 font-anton">Need Help?</h3>
            <p className="text-white/80 text-sm font-poppins mb-4">
              If you face any issues with booking your appointment or have questions about your consultation, 
              please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="flex items-center justify-center gap-2 text-white/70">
                <User className="w-4 h-4" />
                <span className="font-poppins">support@cyclesync.in</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/70">
                <Clock className="w-4 h-4" />
                <span className="font-poppins">Mon-Fri, 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccessPage;


