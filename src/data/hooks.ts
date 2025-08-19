import { useMutation, useQuery } from "@tanstack/react-query";
import {
  applyForJob,
  EstateFilters,
  fetchAboutPageData,
  fetchContactPageData,
  fetchHomePageData,
  fetchJobsPageData,
  fetchPropertiesPageData,
  fetchVirtualTourPageData,
  filterProperties,
  getAllPropertyLocations,
  getAllPropertyType,
  getEstates,
  getFAQs,
  getJobByID,
  getPropertyByID,
  makeEnquire,
  PropertyFilters,
} from "./api";
import { HomepageResponse } from "./types/homepageTypes";
import { AboutPageResponse } from "./types/aboutPageTypes";
import { ContactPageResponse } from "./types/contactPageTypes";
import { VirtualTourResponse } from "./types/virtualTourPageTypes";
import {
  PaginatedProperties,
  PropertiesResponse,
} from "./types/propertiesPageTypes";
import { GetPropertyByIdResponse } from "./types/GetPropertyByIdResponse";
import { GetJobByIdResponse, JobsApiResponse } from "./types/jobListTypes";
import { PropertyLocationResponse } from "./types/PropertyLocationTypes";
import { PropertiesTypeResponse } from "./types/propertyTypes";
import { FAQResponse } from "@/data/types/FAQTypes";

// Query hook for homepage data with
export const useHomepage = () => {
  return useQuery<HomepageResponse>({
    queryKey: ["home-page"],
    queryFn: fetchHomePageData,
  });
};

// Query hook for aboutpage data with
export const useAboutpage = () => {
  return useQuery<AboutPageResponse>({
    queryKey: ["about-page"],
    queryFn: fetchAboutPageData,
  });
};
// Query hook for contactpage data with
export const useContactpage = () => {
  return useQuery<ContactPageResponse>({
    queryKey: ["contact-page"],
    queryFn: fetchContactPageData,
  });
};
// Query hook for virtual-tour page data with
export const useVirtualTourpage = (page: number) => {
  return useQuery<VirtualTourResponse>({
    queryKey: ["virtual-tour-page", page],
    queryFn: () => fetchVirtualTourPageData(page),
  });
};
// Query hook for properties page data with
// export const usePropertiespage = (page: number) => {
//   return useQuery<PropertiesResponse>({
//     queryKey: ["properties-page", page],
//     queryFn: () => fetchPropertiesPageData(page),
//   });
// };
export const usePropertiespage = (
  // filters?: Record<string, any>
  page: number
  // filters?: PropertyFilters
) => {
  return useQuery<PropertiesResponse>({
    queryKey: ["properties-page", page],
    queryFn: () => fetchPropertiesPageData(page),
  });
};
export const useFilterProperties = (
  page: number,
  filters?: PropertyFilters
) => {
  return useQuery<PaginatedProperties>({
    queryKey: ["properties", page, filters],
    queryFn: () => filterProperties(page, filters),
  });
};
export const useGetEstates = (page: number, filters?: EstateFilters) => {
  return useQuery<PropertiesResponse>({
    queryKey: ["estates", page, filters],
    queryFn: () => getEstates(page, filters),
  });
};

// Query hook for properties page data with
export const useGetPropertyByID = (id: number | string) => {
  return useQuery<GetPropertyByIdResponse>({
    queryKey: ["property", id], // include id in the key to avoid collisions
    queryFn: () => getPropertyByID(id),
    enabled: !!id, // prevents the query from running if id is undefined/null
  });
};
// Query hook for properties page data with
export const useJobListPage = (page: number) => {
  return useQuery<JobsApiResponse>({
    queryKey: ["jobs-page", page],
    queryFn: () => fetchJobsPageData(page),
  });
};
// Query hook for Jobs by ID data with
export const useGetJobByID = (id: number | string) => {
  return useQuery<GetJobByIdResponse>({
    queryKey: ["job", id], // include id in the key to avoid collisions
    queryFn: () => getJobByID(id),
    enabled: !!id, // prevents the query from running if id is undefined/null
  });
};
// Query hook for properties Locations data with
export const useGetAllPropertyLocations = () => {
  return useQuery<PropertyLocationResponse>({
    queryKey: ["property-locations"],
    queryFn: () => getAllPropertyLocations(),
  });
};
// Query hook for properties types data with
export const useGetAllPropertyTypes = () => {
  return useQuery<PropertiesTypeResponse>({
    queryKey: ["property-types"],
    queryFn: getAllPropertyType,
  });
};

export const useEnquireProperty = () => {
  return useMutation({
    mutationFn: makeEnquire,
  });
};

export const useGetFAQs = () => {
  return useQuery<FAQResponse>({
    queryKey: ["FAQs"],
    queryFn: getFAQs,
  });
};

export const useApplyForJob = () => {
  return useMutation({
    mutationFn: applyForJob,
  });
};
