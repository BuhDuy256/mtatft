import { useState, useEffect } from "react";
import { fetchUnitStats } from "../services/stats.service";
import type { UnitStat } from "../types/stats";

/**
 * Custom hook for fetching unit statistics data
 * Encapsulates all data fetching logic for Units page
 */
export const useUnitStats = () => {
  const [rawUnits, setRawUnits] = useState<UnitStat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUnitStats() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchUnitStats();

        if (response?.unitStats && Array.isArray(response.unitStats)) {
          setRawUnits(response.unitStats);
        } else {
          console.warn("Invalid response structure:", response);
          setRawUnits([]);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load unit stats";
        setError(errorMessage);
        console.error("Error loading unit stats:", err);
        setRawUnits([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadUnitStats();
  }, []);

  return { rawUnits, isLoading, error };
};
