import { useQuery } from "@tanstack/react-query";
import { fetchHomePageData } from "./api";
import { HomepageResponse } from "./types/homepageTypes"; 

// Query hook for homepage data with 
export const useHomepage = () => {
    return useQuery<HomepageResponse>({
        queryKey: ["home-page"],
        queryFn: fetchHomePageData,
    });
}