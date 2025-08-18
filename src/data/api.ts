import { FAQResponse } from "@/data/types/FAQTypes";
import apiClient from "./apiClient";
import { AboutPageResponse } from "./types/aboutPageTypes";
import { ContactPageResponse } from "./types/contactPageTypes";
import {
  EnquirePayload,
  GetPropertyByIdResponse,
} from "./types/GetPropertyByIdResponse";
import { HomepageResponse } from "./types/homepageTypes";
import { GetJobByIdResponse, JobsApiResponse } from "./types/jobListTypes";
import {
  PaginatedProperties,
  PropertiesResponse,
} from "./types/propertiesPageTypes";
import { PropertyLocationResponse } from "./types/PropertyLocationTypes";
import { PropertiesTypeResponse } from "./types/propertyTypes";
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
export const fetchVirtualTourPageData = async (
  page: number
): Promise<VirtualTourResponse> => {
  const response = await apiClient.get(`/virtual-tour?page=${page}`);
  return response.data;
};
//Properties Page Data
// export const fetchPropertiesPageData = async (
//   page: number
// ): Promise<PropertiesResponse> => {
//   const response = await apiClient.get(`/properties-page?page=${page}`);
//   return response.data;
// };

export interface PropertyFilters {
  state?: string;
  type?: string;
  status?: string;
  bedrooms?: string;
  min?: string | number;
  max?: string | number;
}

export const fetchPropertiesPageData = async (
  page: number
  // filters: PropertyFilters = {} // Use the defined type
): Promise<PropertiesResponse> => {
  // const hasFilters = Object.values(filters).some(
  //   (v) => v !== "" && v !== undefined
  // );
  // const params = new URLSearchParams({
  //   page: String(page),
  //   ...(filters.state && { state: filters.state }),
  //   ...(filters.type && { type: filters.type }),
  //   ...(filters.min && { minPrice: String(filters.min) }),
  //   ...(filters.max && { maxPrice: String(filters.max) }),
  // });

  // const endpoint = hasFilters
  //   ? `/filter-property?${params.toString()}`
  //   : `/properties-page?page=${page}`;


  const endpoint = `/properties-page?page=${page}`;
  const response = await apiClient.get(endpoint);
  return response.data;
};
export const filterProperties = async (
  page: number,
  filters: PropertyFilters = {} // Use the defined type
): Promise<PaginatedProperties> => {
  const params = new URLSearchParams({
    page: String(page),
    // state: String(filters.state) || "",
    // type: filters.type || "",
    // maxPrice: String(filters.max) || "",
    // minPrice: String(filters.min) || "",
    // no_of_bedroom: String(filters.bedrooms) || "",
    // status: String(filters.status) || "",
  });
  if (filters.state) {
    params.append("state", String(filters.state));
  }
  if (filters.type) {
    params.append("type", String(filters.type));
  }
  if (filters.status) {
    params.append("status", String(filters.status));
  }
  if (filters.bedrooms) {
    params.append("no_of_bedrooms", String(filters.bedrooms));
  }
  if (filters.max) {
    params.append("maxPrice", String(filters.max));
  }
  if (filters.min) {
    params.append("minPrice", String(filters.min));
  }

  const endpoint = `/filter-property?${params.toString()}`;

  const response = await apiClient.get(endpoint);
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
export const fetchJobsPageData = async (
  page: number
): Promise<JobsApiResponse> => {
  const response = await apiClient.get(`/jobs-page?page=${page}`);
  return response.data;
};
//Get Job by ID Data
export const getJobByID = async (
  id: number | string
): Promise<GetJobByIdResponse> => {
  const response = await apiClient.get(`/job/${id}`);
  return response.data;
};

//Get all Property Locations Data
export const getAllPropertyLocations =
  async (): Promise<PropertyLocationResponse> => {
    const response = await apiClient.get("/property-locations");
    return response.data;
  };
//Get all Property Type Data
export const getAllPropertyType = async (): Promise<PropertiesTypeResponse> => {
  const response = await apiClient.get("/properties-type");
  return response.data;
};

export const makeEnquire = async (payload: Partial<EnquirePayload>) => {
  const formData = new FormData();
  if (payload.name !== undefined)
    formData.append("name", payload.name.toString());
  if (payload.email !== undefined)
    formData.append("email", payload.email.toString());
  if (payload.phone !== undefined)
    formData.append("phone", payload.phone.toString());
  if (payload.interest_option !== undefined)
    formData.append("interest_option", payload.interest_option.toString());
  if (payload.property_id !== undefined)
    formData.append("property_id", payload.property_id.toString());
  if (payload.description !== undefined)
    formData.append("description", payload.description.toString());

  const response = await apiClient.post("/enquiry-request", formData, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const getFAQs = async (): Promise<FAQResponse> => {
  const response = await apiClient.get("/faqs");
  return response.data;
};

export const applyForJob = async (payload: FormData) => {
  const response = await apiClient.post("/career-post", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
