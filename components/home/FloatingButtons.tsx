'use client';

import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function FloatingButtons() {
  const phoneNumber = '6390901876';
  const whatsappUrl = `https://wa.me/91${phoneNumber}`;
  const callUrl = `tel:+91${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <Link
        href={callUrl}
        className="w-14 h-14 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Call Us"
      >
        <span className="absolute inset-0 rounded-full bg-yellow-600 animate-ping opacity-20"></span>
        <Phone className="w-6 h-6 z-10" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          Call Us
        </span>
      </Link>

      {/* WhatsApp Button */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <MessageCircle className="w-7 h-7 z-10" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </Link>
    </div>
  );
}
