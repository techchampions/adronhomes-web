import { FAQResponse } from "@/data/types/FAQTypes";
import apiClient from "./apiClient";
import { AboutPageResponse } from "./types/aboutPageTypes";
import { ContactPageResponse } from "./types/contactPageTypes";
import {
  ClientPayload,
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
import { CategoryResponse } from "@/data/types/PropertyCategory";
import { ApiResponse } from "@/data/types/testimonialTypes";
import { SettingsResponse } from "@/data/types/Settingstypes";
import { RealEstatePayload } from "@/data/types/Payload";

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

export interface PropertyFilters {
  state?: string;
  type?: string;
  status?: string;
  bedrooms?: string;
  min?: string | number;
  max?: string | number;
}
export interface EstateFilters {
  state?: string;
}

export const fetchPropertiesPageData = async (
  page: number
): Promise<PropertiesResponse> => {
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
export const getLatestOffers = async (
  page: number
): Promise<PaginatedProperties> => {
  const params = new URLSearchParams({
    page: String(page),
    is_offer: "1",
  });

  const endpoint = `/filter-property?${params.toString()}`;

  const response = await apiClient.get(endpoint);
  return response.data;
};
export const getFeatured = async (
  page: number
): Promise<PaginatedProperties> => {
  const params = new URLSearchParams({
    page: String(page),
    is_featured: "1",
  });

  const endpoint = `/filter-property?${params.toString()}`;

  const response = await apiClient.get(endpoint);
  return response.data;
};
export const getHomeListing = async (
  page: number
): Promise<PaginatedProperties> => {
  const params = new URLSearchParams({
    page: String(page),
    category: "house",
  });

  const endpoint = `/filter-property?${params.toString()}`;

  const response = await apiClient.get(endpoint);
  return response.data;
};

export const getEstates = async (
  page: number,
  filters: EstateFilters = {} // Use the defined type
): Promise<PropertiesResponse> => {
  const params = new URLSearchParams({
    page: String(page),
  });
  if (filters.state) {
    params.append("state", String(filters.state));
  }

  const endpoint = `/property-estate?${params.toString()}`;

  const response = await apiClient.get(endpoint);
  return response.data;
};

//Get Properties by ID Data
export const getPropertyByID = async (
  slug: string
): Promise<GetPropertyByIdResponse> => {
  const response = await apiClient.get(`/property/${slug}`);
  return response.data;
};
//jobList Page Data
export const fetchJobsPageData = async (
  page: number,
  search: string
): Promise<JobsApiResponse> => {
  const response = await apiClient.get(
    `/jobs-page?page=${page}&search=${search}`
  );
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
//Get all Property Locations Data
export const getAllPropertyCategory = async (): Promise<CategoryResponse> => {
  const response = await apiClient.get("/property-category");
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
export const sendPartnershipRequest = async (
  payload: Partial<ClientPayload>
) => {
  const formData = new FormData();
  if (payload.fullname !== undefined)
    formData.append("fullname", payload.fullname.toString());
  if (payload.email !== undefined)
    formData.append("email", payload.email.toString());
  if (payload.phone_number !== undefined)
    formData.append("phone_number", payload.phone_number.toString());
  if (payload.location !== undefined)
    formData.append("location", payload.location.toString());
  if (payload.message !== undefined)
    formData.append("message", payload.message.toString());

  const response = await apiClient.post("/client-request", formData, {
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

// Get Testimonials
export const getTestimonials = async (): Promise<ApiResponse> => {
  const response = await apiClient.get("/testimonials");
  return response.data;
};

export const getSettings = async (type: string): Promise<SettingsResponse> => {
  const response = await apiClient.get(`/settings?type=${type}`);
  return response.data;
};

export interface UserExistsResponse {
  success: boolean;
  message: string;
}

export const getIfUserExists = async (
  email: string
): Promise<UserExistsResponse> => {
  const response = await apiClient.get(`/is-user-exist/${email}`);
  return response.data;
};

export interface VerifyMarketerResponse {
  success: boolean;
  user: {
    first_name: string;
  };
}
export const verifyMarketer = async (
  id: string
): Promise<VerifyMarketerResponse> => {
  const response = await apiClient.get(`/referral-marketer/${id}`);
  return response.data;
};

export const subscribe = async (payload: Partial<RealEstatePayload>) => {
  const response = await apiClient.post("/subscribe", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export interface subscribePayload {
  marketID: string;
  property_id?: number;
  plan_id?: number;
  payment_type?: number;
  monthly_duration?: number;
  repayment_schedule?: string | number;
  start_date?: string;
  end_date?: string;
  paid_amount?: number;
  payment_method?: string;
  marketer_code?: string;
  purpose?: string;
  number_of_unit?: number;
  proof_of_payment?: File;
  bank_name?: string;
  fdf: string;
  // Add contract details fields
  contract_business_type?: string;
  contract_subscriber_name_1?: string;
  contract_subscriber_name_2?: string;
  contract_subscriber_name_3?: string;
  contract_additional_name?: string;
  contract_marital_status?: string;
  contract_gender?: string;
  contract_date_of_birth?: string;
  contract_nationality?: string;
  contract_residential_address?: string;
  contract_town?: string;
  contract_state?: string;
  contract_country?: string;
  contract_email?: string;
  contract_sms?: string;
  contract_employer_address?: string;
  contract_occupation?: string;
  contract_employer?: string;
  contract_next_of_kin_phone?: string;
  contract_next_of_kin_address?: string;
  contract_next_of_kin?: string;
  contract_next_of_kin_relationship?: string;
  contract_profile_picture?: File | null;
  contract_profile_picture_2?: File | null;
  means_of_ids?: File[] | null;
}
