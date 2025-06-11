import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiResponse<T = any> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
};

const apiClient: AxiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  baseURL: "https://adron.microf10.sg-host.com/api/",
  headers: {
    "Content-Type": "application/json",
    // "identifier": process.env.NEXT_PUBLIC_IDENTIFIER || "",
    identifier: "dMNOcdMNOPefFGHIlefFGHIJKLmno",
    // "device_id": process.env.NEXT_PUBLIC_X_DEVICE_ID || "",
    device_id: 1234567,
  },
});

apiClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    return response;
  },
  (error: AxiosError<ApiResponse>) => {
    return Promise.reject(error);
  }
);

export default apiClient;
