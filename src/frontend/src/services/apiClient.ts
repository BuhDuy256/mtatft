const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/**
 * Centralized API client for HTTP requests
 */
async function get<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  
  const result: ApiResponse<T> = await response.json();
  
  if (!result.success || !result.data) {
    throw new Error(result.message || "Invalid API response");
  }
  
  return result.data;
}

async function post<T>(endpoint: string, data: unknown): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  
  const result: ApiResponse<T> = await response.json();
  
  if (!result.success || !result.data) {
    throw new Error(result.message || "Invalid API response");
  }
  
  return result.data;
}

export default { get, post };
