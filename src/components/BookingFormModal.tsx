"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Doctor } from './DoctorCard';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  age: string;
}

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  onProceedToPayment: (formData: BookingFormData, doctor: Doctor) => void;
}

const BookingFormModal: React.FC<BookingFormModalProps> = ({
  isOpen,
  onClose,
  doctor,
  onProceedToPayment,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    age: '',
  });

  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 1 || Number(formData.age) > 120) {
      newErrors.age = 'Please enter a valid age';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !doctor) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      onProceedToPayment(formData, doctor);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
    });
    setErrors({});
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2 font-anton">
            Book Consultation
          </h2>
          <p className="text-purple-200 font-poppins">
            with Dr. {doctor.name}
          </p>
          <div className="mt-2 p-3 bg-white/10 rounded-lg">
            <p className="text-white/90 text-sm font-poppins">
              Consultation Fee: <span className="text-green-400 font-bold">₹{doctor.consultationFee}</span>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-white font-poppins mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-poppins"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1 font-poppins">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-white font-poppins mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-poppins"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1 font-poppins">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-white font-poppins mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-poppins"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1 font-poppins">{errors.phone}</p>
            )}
          </div>

          {/* Age Field */}
          <div>
            <label htmlFor="age" className="block text-white font-poppins mb-2">
              Age *
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-poppins"
              placeholder="Enter your age"
              min="1"
              max="120"
            />
            {errors.age && (
              <p className="text-red-400 text-sm mt-1 font-poppins">{errors.age}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:scale-100 disabled:shadow-none font-poppins"
            >
              {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
        </form>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-white/70 text-xs font-poppins">
            By proceeding, you agree to our terms of service and privacy policy. 
            After successful payment, you'll be redirected to the doctor's booking page 
            to schedule your appointment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;


