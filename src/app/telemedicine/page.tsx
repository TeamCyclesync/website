"use client";

import React, { useState } from 'react';
import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/landing/Footer';
import type { Doctor } from '@/types/doctor';
import BookingFormModal from '@/components/BookingFormModal'

import { TestimonialSection, Testimonial } from "@/components/testimonial";

import { Button } from '@/components/ui/button-1';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

import { DoctorBookingData } from '@/lib/phonepe';
import { doctorsData } from '@/data/doctors';
import { AnimatedFeatureCard } from '@/components/ui/animated-feature-card';
import { HowItWorks } from '@/components/ui/how-it-works';
import GlassDoctorCard from '@/components/GlassDoctorCard';
import { AnimatedCard, CardBody, CardDescription, CardTitle, CardVisual, } from '@/components/ui/analytics-card';
import { Visual1 } from "@/components/ui/analytics-card"
import { AnimatedCard2, CardBody2, CardDescription2, CardTitle2, CardVisual2, } from '@/components/ui/analytics-card2';
import { Visual2 } from "@/components/ui/analytics-card2"
import { WordPullUp } from "@/components/ui/word-pullup"
import { SplitText } from '@/components/ui/text-split';
import { easings } from '@react-spring/web';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  age: string;
}

const testimonialsData: Testimonial[] = [
  {
    type: "user",
    quote:
      "I was hesitant about online consultations at first, but my experience with CycleSync completely changed my view. The gynecologist patiently listened and gave me clear guidance for my PCOS management. Truly a stress-free experience!",
    name: "Neha Singh",
    avatarSrc: "/assets/shravya.jpg",
    avatarFallback: "NV",
  },
  {
    type: "quote",
    quote:
      "CycleSync made consulting a specialist so easy. I could book a slot that fit my routine and talk to a doctor from home. The privacy and comfort made all the difference for me.",
    name: "Riya Sharma",
  },
  {
    type: "user",
    quote:
      "I used CycleSync for my irregular periods, and the doctor helped me understand my cycle better with lifestyle changes and treatment options. I now feel more in control of my health.",
    name: "Sanjana Verma ",
    avatarSrc: "/assets/lokasya.jpg",
    avatarFallback: "PI",
  },
];

const TelemedicinePage: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleScheduleCall = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleProceedToPayment = async (formData: BookingFormData, doctor: Doctor) => {
    setIsProcessingPayment(true);

    try {
      const bookingData: DoctorBookingData = {
        doctorId: doctor.id,
        doctorName: doctor.name,
        consultationFee: doctor.consultationFee,
        patientName: formData.name,
        patientEmail: formData.email,
        patientPhone: formData.phone,
        patientAge: formData.age
      };

      const response = await fetch('/api/initiate-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      });

      const result = await response.json();

      if (result.success) {
        handleCloseModal();
        alert(`Payment initiated successfully! Transaction ID: ${result.data.merchantTransactionId}\n\nIn production, you would be redirected to PhonePe payment page. For demo purposes, redirecting to Calendly...`);
        setTimeout(() => {
          window.open(doctor.calendlyUrl, '_blank');
        }, 2000);
      } else {
        alert(`Payment initiation failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('An error occurred while initiating payment. Please try again.');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const features = [
    {
      index: '001',
      tag: 'EXPERTS',
      title: (
        <span className="font-poppins text-sm md:text-base">Expert doctors with years of gynecology experience</span>
      ),
      imageSrc: '/assets/telemedicine/doctor3.png',
      color: 'orange' as const,
    },
    {
      index: '002',
      tag: 'SECURE',
      title: (
        <span className="font-poppins text-sm md:text-base">Secure, private consultations with encrypted sessions</span>
      ),
      imageSrc: '/assets/telemedicine/shield.png',
      color: 'purple' as const,
    },
    {
      index: '003',
      tag: 'FLEXIBLE',
      title: (
        <span className="font-poppins text-sm md:text-base">Flexible scheduling that fits into your everyday routine</span>
      ),
      imageSrc: '/assets/telemedicine/time.png',
      color: 'blue' as const,
    },
  ];

  return (
    <div className="gradient-bg-3 min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 pt-32 pb-16">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <WordPullUp className='text-white font-anton text-2xl md:text-7xl mb-4 tracking-wide' words='Telemedicine Consulatancy' />
          <SplitText
            text={`Connect with experienced gynecologists from the comfort of your home.\nGet professional medical advice, treatment plans, and ongoing support for your women's health needs.`}
            className="text-sm md:text-xl text-white/90 max-w-3xl mx-auto font-poppins text-center"
            delay={15}
            animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
            easing={easings.easeOutCubic}
            threshold={0.3}
            rootMargin="-100px"
          />

        </div>

        {/* Features Section using AnimatedFeatureCard */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10 md:mx-8">
            {features.slice(0, 2).map((f) => (
              <AnimatedFeatureCard
                key={f.index}
                index={f.index}
                tag={f.tag}
                title={f.title}
                imageSrc={f.imageSrc}
                color={f.color}
                className="col-span-1"
              />
            ))}
            <AnimatedFeatureCard
              key={features[2].index}
              index={features[2].index}
              tag={features[2].tag}
              title={features[2].title}
              imageSrc={features[2].imageSrc}
              color={features[2].color}
              className="col-span-1 md:col-span-1"
            />
          </div>
        </div>

        {/* analytic cards */}
        <div className='md:flex hidden items-center justify-center gap-2 md:gap-40 mt-20 mb-20'>
          <div className='scale-[0.9] md:scale-[1.18] origin-top-left'>
            <AnimatedCard>
              <CardVisual>
                <Visual1 mainColor="#ff727e" secondaryColor="#f3cb74" />
              </CardVisual>
              <CardBody>
                <CardTitle className='font-poppins text-base font-semibold'>Know your body better</CardTitle>
                <CardDescription className='font-poppins'>
                  Early consults, better outcomes
                </CardDescription>
              </CardBody>
            </AnimatedCard>
          </div>
          <div className='scale-[0.9] md:scale-[1.18] origin-top-left'>
            <AnimatedCard2>
              <CardVisual2>
                <Visual2 mainColor="#ff6900" secondaryColor="#f54900" />
              </CardVisual2>
              <CardBody2>
                <CardTitle2 className='font-poppins text-base font-semibold'>Most women delay check-ups</CardTitle2>
                <CardDescription2 className='font-poppins'>
                  Stay proactive about your health
                </CardDescription2>
              </CardBody2>
            </AnimatedCard2>
          </div>
        </div>

        {/* How it works */}
        <HowItWorks className="mb-12 md:mb-12" />

        {/* Doctors Section */}
        <div>
          <h2 className="text-3xl md:text-6xl font-bold text-white text-center mb-8 md:mb-12 font-cat tracking-wider">
            Our Expert Doctors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-6 ">
            {doctorsData.map((doctor) => (
              <GlassDoctorCard
                key={doctor.id}
                doctor={doctor}
              // onScheduleCall={handleScheduleCall}
              />
            ))}
          </div>
        </div>

        <div className="w-full bg-transparent">
          <TestimonialSection
            className='text-white'
            title="Empowering more Women"
            testimonials={testimonialsData}
          />
        </div>

        {/* Disclaimer */}
        <div className="my-8 mx-8 md:flex justify-center hidden">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="h-8 rounded-xl px-4 font-poppins">
                  <Info className="h-4 w-4" />
                  Important Note
                </Button>
              </TooltipTrigger>
              <TooltipContent className="font-poppins">
                <p>Telemedicine consultations are suitable for non-emergency medical advice, follow-up consultations, and general health guidance.</p>
                <p>For emergency situations or conditions requiring physical examination, please visit a healthcare facility immediately.
                </p> <p>Our doctors will advise if an in-person visit is necessary.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </main>

      <Footer />

      <BookingFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        doctor={selectedDoctor}
        onProceedToPayment={handleProceedToPayment}
      />

      {isProcessingPayment && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white font-poppins">Processing payment...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelemedicinePage;
