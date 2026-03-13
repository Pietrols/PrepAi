import { apiClient } from "./client";
import type { ApiSuccess } from "@prepai/types";

interface HealthData {
  status: string;
  environment: string;
  timestamp: string;
  version: string;
}

export async function fetchHealth(): Promise<HealthData> {
  const response = await apiClient.get<ApiSuccess<HealthData>>("/health");
  return response.data.data;
}
