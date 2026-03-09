import http from "./http.service";
import { IBlog } from "@/interfaces";

export const getBlogs = async () => {
    const response = await http.get<{ success: boolean; data: IBlog[] }>("/blogs");
    return response.data;
};

export const getBlogBySlug = async (slug: string) => {
    const response = await http.get<{ success: boolean; data: IBlog }>(`/blogs/slug/${slug}`);
    return response.data;
};
