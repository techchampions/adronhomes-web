import { create } from "zustand";
import { persist } from "zustand/middleware";

type CookieState = {
  acceptCookies: boolean;
  setAcceptCookies: (accept: boolean) => void;
};

export const useCookieState = create<CookieState>()(
  persist(
    (set) => ({
      acceptCookies: false,
      setAcceptCookies: (accept) => set({ acceptCookies: accept }),
    }),
    {
      name: "cookies-state",
    }
  )
);
