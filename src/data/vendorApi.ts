import apiClient from "@/data/apiClient";
import {
  VendorPortalParams,
  VendorPortalResponse,
} from "@/data/types/vendorTypes";

export async function getVendorPortal(
  params: VendorPortalParams,
): Promise<VendorPortalResponse> {
  const response = await apiClient.get<VendorPortalResponse>("vendor", {
    params: {
      ...params,
      from: params.access && params.from ? params.from : undefined,
      to: params.access && params.to ? params.to : undefined,
      status:
        params.access && params.status !== "all" ? params.status : undefined,
      search: params.access && params.search ? params.search : undefined,
    },
  });
  if (!response.data.success) {
    throw new Error(response.data.message || "Unable to load vendor portal.");
  }
  return response.data;
}

export async function collectVendorGift(payload: {
  request_id: number;
  vendor_id: number;
}): Promise<{ success: boolean; message?: string }> {
  const response = await apiClient.post("vendor/collect", payload);
  return response.data;
}
