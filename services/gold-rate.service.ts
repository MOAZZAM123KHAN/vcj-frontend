const API_URL =
    process.env.NEXT_PUBLIC_API_URL || 'https://vcj-backend.vercel.app/api';

export interface IGoldRate {
    gold24k: number;
    gold22k: number;
    gold18k: number;
    updatedAt: string;
}

export const getGoldRate = async () => {
    try {
        const res = await fetch(`${API_URL}/gold-rate/latest`, {
            next: { revalidate: 60 }, // 1 minute cache for faster updates
        });

        if (!res.ok) {
            return {
                success: false,
                data: null,
            };
        }

        return await res.json();
    } catch (error) {
        console.error('Error fetching gold rate:', error);

        return {
            success: false,
            data: null,
        };
    }
};