import { IReel } from "@/interfaces";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const getReels = async () => {
    try {
        const res = await fetch(`${API_URL}/reels`, {
            next: { revalidate: 60 } // Revalidate every minute
        });
        if (!res.ok) return { success: false, data: [] };
        return await res.json();
    } catch (error) {
        console.error('Error fetching reels:', error);
        return { success: false, data: [] };
    }
};
