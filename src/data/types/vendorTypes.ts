export interface PublicVendor {
  id: number;
  name: string;
  store_slug: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  lga: string;
}

export interface VendorGiftRequest {
  id: number;
  user?: {
    first_name?: string;
    last_name?: string;
    full_name?: string;
    phone_number?: string;
    email?: string;
  } | null;
  gift?: {
    id: number | null;
    name: string | null;
    type: string | null;
  } | null;
  status: string;
  user_note: string;
  pickup_date: string | null;
  collected_at: string | null;
  created_at: string;
}

export interface VendorRequestList {
  current_page: number;
  data: VendorGiftRequest[];
  per_page: number;
  total: number;
  last_page: number;
}

export interface VendorPortalData {
  vendor: PublicVendor;
  is_authorized?: boolean;
  message?: string;
  stats?: {
    total: number;
    pending: number;
    collected: number;
  };
  list?: VendorRequestList;
  pagination?: Omit<VendorRequestList, "data">;
}

export interface VendorPortalResponse {
  success: boolean;
  message?: string;
  data: VendorPortalData | null;
}

export interface VendorPortalParams {
  link: string;
  access?: string;
  from?: string;
  to?: string;
  status?: string;
  search?: string;
  page?: number;
}
