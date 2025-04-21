import apiClient from "./apiClient";
import { AboutPageResponse } from "./types/aboutPageTypes";
import { ContactPageResponse } from "./types/contactPageTypes";
import { GetPropertyByIdResponse } from "./types/GetPropertyByIdResponse";
import { HomepageResponse } from "./types/homepageTypes";
import { GetJobByIdResponse, JobsApiResponse } from "./types/jobListTypes";
import { PropertiesResponse } from "./types/propertiesPageTypes";
import { VirtualTourResponse } from "./types/virtualTourPageTypes";

// Homepage data with type annotation
export const fetchHomePageData = async (): Promise<HomepageResponse> => {
  const response = await apiClient.get("/home-page");
  return response.data;
};

//About Page Data
export const fetchAboutPageData = async (): Promise<AboutPageResponse> => {
  const response = await apiClient.get("/about-page");
  return response.data;
};
//Contact Page Data
export const fetchContactPageData = async (): Promise<ContactPageResponse> => {
  const response = await apiClient.get("/contact-page");
  return response.data;
};
//Virtual tour Page Data
export const fetchVirtualTourPageData =
  async (): Promise<VirtualTourResponse> => {
    const response = await apiClient.get("/virtual-tour");
    return response.data;
  };
//Properties Page Data
export const fetchPropertiesPageData =
  async (): Promise<PropertiesResponse> => {
    const response = await apiClient.get("/properties-page");
    return response.data;
  };
//Get Properties by ID Data
export const getPropertyByID = async (
  id: number | string
): Promise<GetPropertyByIdResponse> => {
  const response = await apiClient.get(`/property/${id}`);
  return response.data;
};
//jobList Page Data
export const fetchJobsPageData = async (): Promise<JobsApiResponse> => {
  const response = await apiClient.get("/jobs-page");
  return response.data;
};
//Get Job by ID Data
export const getJobByID = async (
  id: number | string
): Promise<GetJobByIdResponse> => {
  const response = await apiClient.get(`/job/${id}`);
  return response.data;
};
