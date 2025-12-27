import { useState, useEffect } from "react";
import { fetchTopComps } from "../services/stats.service";
import type { TopComp } from "../types/stats";

/**
 * Custom hook for fetching top compositions data
 * Encapsulates all data fetching logic for TeamCompositions page
 */
export const useTopComps = () => {
  const [rawComps, setRawComps] = useState<TopComp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTopComps() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchTopComps();

        if (response?.topComps && Array.isArray(response.topComps)) {
          setRawComps(response.topComps);
        } else {
          console.warn("Invalid response structure:", response);
          setRawComps([]);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load top comps";
        setError(errorMessage);
        console.error("Error loading top comps:", err);
        setRawComps([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadTopComps();
  }, []);

  return { rawComps, isLoading, error };
};
