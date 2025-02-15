'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setMessage('Thank you for subscribing! You will be notified when we launch.');
      setEmail('');
    } else {
      setMessage(`❌ ${data.error || 'Something went wrong.'}`);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 rounded-xl w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white font-poppins mb-2">Stay Updated!</h2>
      <p className="text-white font-regular text-center mb-4 font-poppins">Sign up to get notified when we launch our app.</p>
      
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border border-gray-300 font-poppins tracking-wider rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black "
        />
        <motion.button
          type="submit"
          className="p-3 bg-white bg-opacity-70 text-black font-poppins rounded-lg font-medium transition-all hover:bg-blue-600 hover:text-white"
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Notify Me'}
        </motion.button>
      </form>

      {message && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-sm text-white text-center mt-4 font-medium font-poppins"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}
