import { useEffect, useMemo, useState } from "react";
import { useMetadata } from "../contexts/MetadataContext";
import { TraitsTable } from "../components/TraitsTable";
import MainLayout from "../layouts/MainLayout";
import { fetchTraitStats } from "../services/stats.service";
import type { TraitStat } from "../types/stats";

export default function Traits() {
  const { data: metadata } = useMetadata();
  const [rawTraits, setRawTraits] = useState<TraitStat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTraitStats() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchTraitStats();

        console.log("Trait Stats API Response:", response);

        if (
          response &&
          response.traitStats &&
          Array.isArray(response.traitStats)
        ) {
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

  const enrichedTraits = useMemo(() => {
    if (!metadata || !rawTraits || rawTraits.length === 0) return [];

    return rawTraits.map((trait) => {
      const traitDetail = metadata.traits.find(
        (m) => m.id.toLowerCase() === trait.id.toLowerCase()
      );

      return {
        id: trait.id,
        name: traitDetail?.name || trait.name,
        icon: traitDetail?.imageUrl || trait.icon,
        playRate: trait.stats?.playRate?.toFixed(2) || "0.00",
        place: trait.stats?.avgPlace?.toFixed(2) || "0.00",
        top4: `${(trait.stats?.top4Rate || 0).toFixed(1)}%`,
        win: `${(trait.stats?.winRate || 0).toFixed(1)}%`,
      };
    });
  }, [rawTraits, metadata]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex-1 flex items-center justify-center w-full px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-400">Loading trait statistics...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex-1 flex items-center justify-center w-full px-4 py-8">
          <div className="text-center max-w-md p-8 bg-slate-800/50 rounded-lg">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center w-full px-4 py-8">
        <div className="rounded-lg overflow-hidden max-w-[660px] w-full">
          <TraitsTable traits={enrichedTraits} />
        </div>
      </div>
    </MainLayout>
  );
}
