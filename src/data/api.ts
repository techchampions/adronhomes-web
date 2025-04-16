import apiClient from "./apiClient";
import { HomepageResponse } from "./types/homepageTypes";

// Homepage data with type annotation
export const fetchHomePageData = async (): Promise<HomepageResponse> => {
    const response = await apiClient.get("/home-page");
    return response.data;
}