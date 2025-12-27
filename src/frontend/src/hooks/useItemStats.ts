import { useState, useEffect } from "react";
import { fetchItemStats } from "../services/stats.service";
import type { ItemStat } from "../types/stats";

/**
 * Custom hook for fetching item statistics data
 * Encapsulates all data fetching logic for Items page
 */
export const useItemStats = () => {
  const [rawItems, setRawItems] = useState<ItemStat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadItemStats() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchItemStats();

        if (response?.itemStats && Array.isArray(response.itemStats)) {
          setRawItems(response.itemStats);
        } else {
          console.warn("Invalid response structure:", response);
          setRawItems([]);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load item stats";
        setError(errorMessage);
        console.error("Error loading item stats:", err);
        setRawItems([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadItemStats();
  }, []);

  return { rawItems, isLoading, error };
};
