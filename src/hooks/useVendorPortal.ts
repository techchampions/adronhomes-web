"use client";

import { collectVendorGift, getVendorPortal } from "@/data/vendorApi";
import { VendorPortalParams } from "@/data/types/vendorTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useVendorPortal(params: VendorPortalParams) {
  return useQuery({
    queryKey: ["vendor-portal", params],
    queryFn: () => getVendorPortal(params),
    enabled: Boolean(params.link),
    retry: false,
    placeholderData: (previousData) =>
      previousData?.data?.vendor?.store_slug === params.link
        ? previousData
        : undefined,
  });
}

export function useCollectVendorGift(link: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: collectVendorGift,
    onSuccess: () =>
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === "vendor-portal" &&
          (query.queryKey[1] as VendorPortalParams | undefined)?.link === link,
      }),
  });
}
