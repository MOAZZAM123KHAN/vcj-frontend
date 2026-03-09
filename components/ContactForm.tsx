'use client';

import { Button } from '@/components/ui/button';

export function ContactForm() {
    return (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full p-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <input type="tel" placeholder="Phone" className="w-full p-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <textarea placeholder="Your Message" rows={4} className="w-full p-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
            <Button type="submit" variant="default" className="w-full bg-slate-900 hover:bg-slate-800 rounded-md">Send Enquiry</Button>
        </form>
    );
}
