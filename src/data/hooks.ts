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
  getAllPropertyCategory,
  getAllPropertyLocations,
  getAllPropertyType,
  getEstates,
  getFAQs,
  getFeatured,
  getHomeListing,
  getIfUserExists,
  getJobByID,
  getLatestOffers,
  getPropertyByID,
  getSettings,
  getTestimonials,
  makeEnquire,
  PropertyFilters,
  sendPartnershipRequest,
  UserExistsResponse,
  verifyMarketer,
  VerifyMarketerResponse,
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
import { CategoryResponse } from "@/data/types/PropertyCategory";
import { ApiResponse } from "@/data/types/testimonialTypes";
import { SettingsResponse } from "@/data/types/Settingstypes";

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
export const useGetLatestOffers = (page: number) => {
  return useQuery<PaginatedProperties>({
    queryKey: ["latest-offers", page],
    queryFn: () => getLatestOffers(page),
  });
};
export const useGetFeatured = (page: number) => {
  return useQuery<PaginatedProperties>({
    queryKey: ["featured-properties", page],
    queryFn: () => getFeatured(page),
  });
};
export const useGetHomeListing = (page: number) => {
  return useQuery<PaginatedProperties>({
    queryKey: ["home-listings", page],
    queryFn: () => getHomeListing(page),
  });
};

export const useGetEstates = (page: number, filters?: EstateFilters) => {
  return useQuery<PropertiesResponse>({
    queryKey: ["estates", page, filters],
    queryFn: () => getEstates(page, filters),
  });
};

// Query hook for properties page data with
export const useGetPropertyByID = (slug: string) => {
  return useQuery<GetPropertyByIdResponse>({
    queryKey: ["property", slug], // include id in the key to avoid collisions
    queryFn: () => getPropertyByID(slug),
    enabled: !!slug, // prevents the query from running if id is undefined/null
  });
};
// Query hook for properties page data with
export const useJobListPage = (page: number, search: string) => {
  return useQuery<JobsApiResponse>({
    queryKey: ["jobs-page", page, search],
    queryFn: () => fetchJobsPageData(page, search),
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
// Query hook for properties Category data with
export const useGetAllPropertyCategory = () => {
  return useQuery<CategoryResponse>({
    queryKey: ["property-categories"],
    queryFn: () => getAllPropertyCategory(),
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
export const useClientPartnership = () => {
  return useMutation({
    mutationFn: sendPartnershipRequest,
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

// Query hook for Getting Testimonials
export const useGetTestimonials = () => {
  return useQuery<ApiResponse>({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });
};

export const useGetDigits = () => {
  return useQuery<SettingsResponse>({
    queryKey: ["settings", "digits"],
    queryFn: () => getSettings("digits"),
  });
};
export const useGetEquiryInfo = () => {
  return useQuery<SettingsResponse>({
    queryKey: ["settings", "enquiry"],
    queryFn: () => getSettings("enquiry"),
  });
};
export const useGetComplainsContact = () => {
  return useQuery<SettingsResponse>({
    queryKey: ["settings", "complain"],
    queryFn: () => getSettings("complain"),
  });
};
export const useGetClientsContact = () => {
  return useQuery<SettingsResponse>({
    queryKey: ["settings", "client"],
    queryFn: () => getSettings("client"),
  });
};
export const useGetMainAddress = () => {
  return useQuery<SettingsResponse>({
    queryKey: ["settings", "mainaddress"],
    queryFn: () => getSettings("mainaddress"),
  });
};
export const useGetCallContact = () => {
  return useQuery<SettingsResponse>({
    queryKey: ["settings", "call"],
    queryFn: () => getSettings("call"),
  });
};
export const useIsUserExist = (email: string) => {
  return useQuery<UserExistsResponse>({
    queryKey: ["is_user_exist", email],
    queryFn: () => getIfUserExists(email),
    enabled: !!email,
  });
};
export const useVerifyMarkerter = (id: string) => {
  return useQuery<VerifyMarketerResponse>({
    queryKey: ["verify-marketer", id],
    queryFn: () => verifyMarketer(id),
    enabled: !!id,
  });
};
