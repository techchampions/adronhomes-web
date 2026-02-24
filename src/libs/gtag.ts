/* eslint-disable @typescript-eslint/no-explicit-any */
export const GA_TRACKING_ID = "G-VZ4Z26L5L0";

export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
