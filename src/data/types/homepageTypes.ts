// Main response interface
export interface HomepageResponse {
  status: string;
  message: string;
  data: HomepageData;
}

// Homepage data interface
export interface HomepageData {
  sliders: Slider[];
  settings: Settings | undefined;
  latestOffer: LatestOffer[];
  about_us: AboutUs[];
  featured_properties: FeaturedPropertiesT;
  locations: Locations;
  testimonials: Testimonials;
}

export interface Slider {
  id: number;
  image: string;
  mobile_image: string;
}

export interface Settings {
  social_link: SocialLink[];
  digital_count: DigitalCount[];
}

export interface SocialLink {
  name: string;
  value: string;
}

export interface DigitalCount {
  name: string;
  value: number;
}

export interface LatestOffer {
  id: number;
  slug: string;
  header: string;
  name: string;
  description: string | null;
  image: string;
  action_link: string;
  list_description: string[];
  created_at: string | null;
  updated_at: string | null;
}

export interface AboutUs {
  name: string;
  header: string;
  description: string;
  action_link: string;
  image: string;
}

export interface FeaturedPropertiesT {
  handpackText: HandpackText[];
  handpackProperty: Property[];
}

export interface HandpackText {
  header: string;
  description: string;
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
  hasGym: boolean;
  hasLights: boolean;
  isLand: boolean;
  is_discount: boolean;
  discount_percentage: number;
  discount_name: string;
  purpose: string[] | null;
  unit_available: number;
}

export interface Locations {
  locationText: LocationText[];
  locationProperty: LocationProperty[];
}

export interface LocationText {
  name: string;
  header: string;
}

export interface LocationProperty {
  id: number;
  state_name: string;
  photo: string;
  total_property: number;
  estate_total_property: number;
}

export interface Testimonials {
  testimonialsText: TestimonialsText[];
  clientsFeedback: ClientFeedback[];
}

export interface TestimonialsText {
  name: string;
  header: string;
}

export interface ClientFeedback {
  id: number;
  client_name: string;
  client_image: string;
  client_comment: string;
  video_link: string;
  created_at: string | null;
  updated_at: string | null;
}
