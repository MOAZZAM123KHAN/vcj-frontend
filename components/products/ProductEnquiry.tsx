'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProductEnquiryProps {
    productName: string;
}

export function ProductEnquiry({ productName }: ProductEnquiryProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = '+916390901876';
        const text = `Hello, my name is ${name}.
I am interested in this product: ${productName}

Message: ${message}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
        setIsModalOpen(false);
        setName('');
        setMessage('');
    };

    return (
        <>
            <Button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 h-16 bg-slate-950 text-white rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-yellow-700 transition-all shadow-2xl"
            >
                Inquire with Specialist
            </Button>

            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-black p-8 shadow-2xl border border-yellow-500/20"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-6 text-center">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                                    WhatsApp Product Enquiry
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    Send us an enquiry about {productName}.
                                </p>
                            </div>

                            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-yellow-500 font-bold ml-1">
                                        Full Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-yellow-500 font-bold ml-1">
                                        Enquiry Message
                                    </label>
                                    <textarea
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-yellow-500/50 transition-colors resize-none"
                                        placeholder="Ask about price, availability or customization..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold uppercase tracking-widest transition-all mt-4"
                                >
                                    Continue to WhatsApp
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
