export interface GetPropertyByIdResponse {
  status: string;
  message: string;
  data: {
    properties: Property;
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
  type: string;
  property_id: number;
  created_at: string;
  updated_at: string;
}

// export interface Property {
//   id: number;
//   name: string;
//   display_image: string;
//   photos: string[];
//   size: string;
//   price: number;
//   type: PropertyType; // changed from number to object
//   slug: string;
//   features: string[];
//   overview: string;
//   description: string;
//   street_address: string;
//   country: string;
//   state: string;
//   lga: string;
//   details: PropertyDetail[];
//   nearby_landmarks: string;
//   created_at: string | null;
//   updated_at: string | null;
// }
export interface Property {
  id: number;
  name: string;
  display_image: string;
  photos: string[];
  size: string;
  price: number;
  initial_deposit: number | null;
  type: PropertyType; // changed from number to object
  slug: string;
  features: string[];
  overview: string;
  description: string;
  street_address: string;
  country: string;
  state: string;
  lga: string;
  created_at: string | null;
  updated_at: string | null;
  total_amount: number | null;
  is_bought: boolean;
  is_saved: boolean;
  is_discount: boolean;
  discount_name: string;
  discount_percentage: number;
  no_of_bedroom: number;
  number_of_bathroom: number;
  year_built: string;
  parking_space: string | number;
  area: string;
  property_map: string | null;
  property_video: string | null;
  virtual_tour: string | null;
  subscriber_form: string;
  status: string;
  category: string;
  property_duration_limit: number;
  payment_schedule: string[];
  payment_type: string;
  is_sold: number;
  is_active: number;
  details: PropertyDetail[];
  // saved_property: SavedProperty | null;
  // bought_property: BoughtProperty | null;
  number_of_unit: number;
  unit_available: number;
  property_agreement: string;
  whatsapp_link: string;
  video_link: string;
  contact_number: string;
  topography: string;
  road_access: string;
  gated_estate: string;
  fencing: string;
  purpose: string[] | null;
  nearby_landmarks: string[] | null;
  title_document_type: string | null;
  property_files: string[];

  land_sizes: LandSize[];

  hasGym: boolean;
  hasLights: boolean;
  isLand: boolean;
}
export interface LandSize {
  id: number;
  size: string; // Could be number as string like "648"
  measurement_unit: "sqm" | "sqft" | "acre" | "hectare" | string;
  durations: Duration[];
}
export interface Duration {
  id: number;
  price: number;
  citta_id: string;
  duration: number; // in months or years
  is_active: boolean;
}
