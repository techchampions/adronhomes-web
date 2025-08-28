export interface GetPropertyByIdResponse {
  status: string;
  message: string;
  data: {
    properties: Property[];
  };
}
export interface PropertyType {
  id: number;
  name: string;
  created_at: string | null;
  updated_at: string | null;
}
export interface EnquirePayload {
  name: string;
  email: string;
  phone: string | number;
  interest_option: string;
  property_id: string | number;
  description: string;
}
export interface ClientPayload {
  fullname: string;
  email: string;
  phone_number: string | number;
  location: string;
  message: string;
}

export interface PropertyDetail {
  id: number;
  name: string;
  purpose: string;
  value: number;
  property_id: number;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: number;
  name: string;
  display_image: string;
  photos: string[];
  size: string;
  price: number;
  type: PropertyType; // changed from number to object
  slug: string;
  features: string[];
  overview: string;
  description: string;
  street_address: string;
  country: string;
  state: string;
  lga: string;
  details: PropertyDetail[];
  nearby_landmarks: string;
  created_at: string | null;
  updated_at: string | null;
}
