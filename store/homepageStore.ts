import { create } from "zustand";
import { HomepageResponse } from "@/data/types/homepageTypes";

type HomepageStore = {
  homepageData: HomepageResponse | null;
  setHomepage: (homepageData: HomepageResponse) => void;
  clearHomepage : () => void;
};

export const HomepageStore = create<HomepageStore>((set) => ({
  homepageData: null,
  setHomepage: (homepageData) => set({ homepageData }), 
  clearHomepage: () => set({ homepageData: null }),
}));
