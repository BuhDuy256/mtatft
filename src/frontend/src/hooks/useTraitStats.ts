import { useState, useEffect } from "react";
import { fetchTraitStats } from "../services/stats.service";
import type { TraitStat } from "../types/stats";

/**
 * Custom hook for fetching trait statistics data
 * Encapsulates all data fetching logic for Traits page
 */
export const useTraitStats = () => {
  const [rawTraits, setRawTraits] = useState<TraitStat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTraitStats() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchTraitStats();

        if (response?.traitStats && Array.isArray(response.traitStats)) {
          setRawTraits(response.traitStats);
        } else {
          console.warn("Invalid response structure:", response);
          setRawTraits([]);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load trait stats";
        setError(errorMessage);
        console.error("Error loading trait stats:", err);
        setRawTraits([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadTraitStats();
  }, []);

  return { rawTraits, isLoading, error };
};
