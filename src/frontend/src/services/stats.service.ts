import type { TopCompsResponse, UnitStatsResponse, ItemStatsResponse, TraitStatsResponse } from "../types/stats";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export async function fetchTopComps(): Promise<TopCompsResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/stats/top-comps`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch top comps: ${response.status} ${response.statusText}`
      );
    }

    const apiResponse: ApiResponse<TopCompsResponse> = await response.json();

    if (!apiResponse.success || !apiResponse.data) {
      throw new Error("Invalid API response structure");
    }

    return apiResponse.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching top comps: ${error.message}`);
    }
    throw new Error("Unknown error occurred while fetching top comps");
  }
}

export async function fetchUnitStats(): Promise<UnitStatsResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/stats/units`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch unit stats: ${response.status} ${response.statusText}`
      );
    }

    const apiResponse: ApiResponse<UnitStatsResponse> = await response.json();

    if (!apiResponse.success || !apiResponse.data) {
      throw new Error("Invalid API response structure");
    }

    return apiResponse.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching unit stats: ${error.message}`);
    }
    throw new Error("Unknown error occurred while fetching unit stats");
  }
}

export async function fetchItemStats(): Promise<ItemStatsResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/stats/items`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch item stats: ${response.status} ${response.statusText}`
      );
    }

    const apiResponse: ApiResponse<ItemStatsResponse> = await response.json();

    if (!apiResponse.success || !apiResponse.data) {
      throw new Error("Invalid API response structure");
    }

    return apiResponse.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching item stats: ${error.message}`);
    }
    throw new Error("Unknown error occurred while fetching item stats");
  }
}

export async function fetchTraitStats(): Promise<TraitStatsResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/stats/traits`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch trait stats: ${response.status} ${response.statusText}`
      );
    }

    const apiResponse: ApiResponse<TraitStatsResponse> = await response.json();

    if (!apiResponse.success || !apiResponse.data) {
      throw new Error("Invalid API response structure");
    }

    return apiResponse.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching trait stats: ${error.message}`);
    }
    throw new Error("Unknown error occurred while fetching trait stats");
  }
}
