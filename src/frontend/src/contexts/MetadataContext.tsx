import React, { createContext, useContext, useEffect, useState } from "react";
import type { Metadata } from "../types/metadata";
import { fetchMetadata } from "../services/metadata.service";

interface MetadataContextValue {
  data: Metadata | null;
  isLoading: boolean;
  error: string | null;
}

const MetadataContext = createContext<MetadataContextValue | undefined>(
  undefined
);

interface MetadataProviderProps {
  children: React.ReactNode;
}

export function MetadataProvider({ children }: MetadataProviderProps) {
  const [data, setData] = useState<Metadata | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMetadata() {
      try {
        setIsLoading(true);
        setError(null);
        const metadata = await fetchMetadata();
        setData(metadata);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load metadata";
        setError(errorMessage);
        console.error("Error loading metadata:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadMetadata();
  }, []);

  const value: MetadataContextValue = {
    data,
    isLoading,
    error,
  };

  return (
    <MetadataContext.Provider value={value}>
      {children}
    </MetadataContext.Provider>
  );
}

export function useMetadata(): MetadataContextValue {
  const context = useContext(MetadataContext);

  if (context === undefined) {
    throw new Error("useMetadata must be used within a MetadataProvider");
  }

  return context;
}
