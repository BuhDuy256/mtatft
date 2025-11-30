import type { Metadata } from "../types/metadata";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export async function fetchMetadata(): Promise<Metadata> {
  try {
    const response = await fetch(`${API_BASE_URL}/metadata`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch metadata: ${response.status} ${response.statusText}`
      );
    }

    const data: Metadata = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching metadata: ${error.message}`);
    }
    throw new Error("Unknown error occurred while fetching metadata");
  }
}
