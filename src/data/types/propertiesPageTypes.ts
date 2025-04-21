export interface PropertiesResponse {
  status: string;
  message: string;
  data: {
    properties_header: PropertiesHeader[];
    properties: Property[];
  };
}

export interface PropertiesHeader {
  header: string;
  description: string;
  list_description: string[];
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
  created_at: string | null;
  updated_at: string | null;
}
