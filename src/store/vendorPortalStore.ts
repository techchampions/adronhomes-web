import { create } from "zustand";

export type VendorFilters = {
  from: string;
  to: string;
  status: string;
  search: string;
  page: number;
};

const initialFilters: VendorFilters = {
  from: "",
  to: "",
  status: "all",
  search: "",
  page: 1,
};

type VendorPortalState = {
  accessCode: string;
  authorizedAccessCode: string;
  draftFilters: VendorFilters;
  appliedFilters: VendorFilters;
  setAccessCode: (accessCode: string) => void;
  authorize: (accessCode: string) => void;
  setDraftFilter: <K extends keyof VendorFilters>(
    key: K,
    value: VendorFilters[K],
  ) => void;
  applyFilters: () => void;
  resetFilters: () => void;
  setPage: (page: number) => void;
  reset: () => void;
};

export const useVendorPortalStore = create<VendorPortalState>((set) => ({
  accessCode: "",
  authorizedAccessCode: "",
  draftFilters: initialFilters,
  appliedFilters: initialFilters,
  setAccessCode: (accessCode) => set({ accessCode }),
  authorize: (authorizedAccessCode) =>
    set({
      authorizedAccessCode,
      appliedFilters: { ...initialFilters },
      draftFilters: { ...initialFilters },
    }),
  setDraftFilter: (key, value) =>
    set((state) => ({
      draftFilters: { ...state.draftFilters, [key]: value },
    })),
  applyFilters: () =>
    set((state) => ({
      appliedFilters: { ...state.draftFilters, page: 1 },
      draftFilters: { ...state.draftFilters, page: 1 },
    })),
  resetFilters: () =>
    set({
      draftFilters: { ...initialFilters },
      appliedFilters: { ...initialFilters },
    }),
  setPage: (page) =>
    set((state) => ({
      appliedFilters: { ...state.appliedFilters, page },
      draftFilters: { ...state.draftFilters, page },
    })),
  reset: () =>
    set({
      accessCode: "",
      authorizedAccessCode: "",
      draftFilters: { ...initialFilters },
      appliedFilters: { ...initialFilters },
    }),
}));
