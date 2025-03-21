'use client';

import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mt-20 p-10">Contact Me</h1>
      <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md w-full">
        <p className="mb-4">You can reach me at:</p>
        <p className="mb-2"><strong>Email:</strong> mcanthonyotuonye@gmail.com</p>
        <p className="mb-2"><strong>LinkedIn:</strong> https://www.linkedin.com/in/mcanthony-otuonye/</p>
        <p className="mb-6"><strong>GitHub:</strong> github.com/mac455</p>
        <Link href="/">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
} 