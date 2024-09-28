import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify'; // Import toast from react-toastify

const ContactFormSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#374151" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#1f2937" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)" />
    <motion.path
      d="M0,50 Q25,30 50,50 T100,50"
      fill="none"
      stroke="#374151"
      strokeWidth="0.2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.2 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.circle
      cx="80"
      cy="20"
      r="2"
      fill="#4a5568"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.2 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.rect
      x="10"
      y="70"
      width="4"
      height="4"
      fill="#1f2937"
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: 180, opacity: 0.2 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
);

export const ContactForm = () => {
  const inputClasses = "w-full bg-gray-900 bg-opacity-40 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300";

  // Create refs for form inputs
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      toast.success('Your message has been sent successfully!');

      // Clear the input fields
      nameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form');
    }
  };

  return (
    <div className="relative bg-gray-800 rounded-xl p-10 shadow-xl overflow-hidden max-w-3xl mx-auto">
      <ContactFormSVG />
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef} // Attach ref
            required
            className={inputClasses}
            placeholder="Your Shubh name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef} // Attach ref
            required
            className={inputClasses}
            placeholder="your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            ref={messageRef} // Attach ref
            rows="5"
            required
            className={inputClasses}
            placeholder="Your message here..."
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:from-blue-700 hover:to-blue-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
