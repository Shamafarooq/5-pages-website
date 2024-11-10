"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <div 
      className="h-screen flex flex-col justify-between" 
      style={{ 
        backgroundImage: "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=600&quality=80')", 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover'
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-lg">
          <h1 className="text-4xl font-bold text-pink-600 mb-4 text-center">Contact Us</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded"
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded"
              required 
            />
            <textarea 
              placeholder="Your Message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border p-2 rounded"
              rows={4}
              required 
            />
            <button 
              type="submit" 
              className="bg-blue-700 px-4 py-2 rounded-xl hover:bg-blue-500 text-white hover:text-green-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-slate-300 w-full h-[60px] flex justify-center items-center">
        <p className="text-lg font-semibold text-red-500">© 2024 Ayesha Farooq</p>
      </footer>
    </div>
  );
};

export default Contact;