import axios from "axios";
import type { ApiResponse } from "@prepai/types";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// ─── Request interceptor — attach auth token when present ────────────────────
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ─── Response interceptor — unwrap our ApiResponse envelope ─────────────────
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as ApiResponse<unknown> | undefined) !==
          undefined && !(error.response?.data as ApiResponse<unknown>).success
          ? (
              error.response?.data as {
                success: false;
                error: { message: string };
              }
            ).error.message
          : "An unexpected error occurred";

      return Promise.reject(new Error(message));
    }
    return Promise.reject(error);
  },
);
