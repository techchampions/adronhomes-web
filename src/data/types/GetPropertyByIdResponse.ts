export interface GetPropertyByIdResponse {
  status: string;
  message: string;
  data: {
    properties: Property[];
  };
}
export interface PropertyDetail {
  id: number;
  name: string;
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
  type: number;
  slug: string;
  features: string[];
  overview: string;
  description: string;
  street_address: string;
  country: string;
  state: string;
  lga: string;
  details: PropertyDetail[];

  created_at: string | null;
  updated_at: string | null;
}
