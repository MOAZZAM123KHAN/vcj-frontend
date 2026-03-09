'use client';

import { Button } from '@/components/ui/button';

export function RateBookingForm() {
    return (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input type="text" className="w-full p-2 border border-slate-200 rounded focus:border-yellow-500 outline-none" placeholder="Enter Full Name" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Mobile Number</label>
                <input type="tel" className="w-full p-2 border border-slate-200 rounded focus:border-yellow-500 outline-none" placeholder="Your WhatsApp Number" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Interested Amount (Approx)</label>
                <select className="w-full p-2 border border-slate-200 rounded focus:border-yellow-500 outline-none">
                    <option>₹50,000 - ₹1 Lakh</option>
                    <option>₹1 Lakh - ₹3 Lakh</option>
                    <option>₹3 Lakh - ₹5 Lakh</option>
                    <option>Above ₹5 Lakh</option>
                </select>
            </div>
            <Button className="w-full" variant="premium">Request Call Back</Button>
        </form>
    );
}
