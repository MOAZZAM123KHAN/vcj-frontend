const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const getTestimonials = async () => {
    try {
        const res = await fetch(`${API_URL}/ratings`, {
            next: { revalidate: 60, tags: ['testimonials'] }
        });
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        return res.json();
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return { success: false, data: [] };
    }
};

export const getTestimonialById = async (id: string) => {
    try {
        const res = await fetch(`${API_URL}/ratings/${id}`, {
            next: { revalidate: 60, tags: ['testimonials', `testimonial-${id}`] }
        });
        if (!res.ok) throw new Error('Failed to fetch testimonial');
        return res.json();
    } catch (error) {
        console.error("Error fetching testimonial:", error);
        return { success: false, data: null };
    }
};
