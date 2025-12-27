import { useMemo } from "react";
import { useMetadata } from "../contexts/MetadataContext";
import { useTraitStats } from "../hooks/useTraitStats";
import { TraitsTable } from "../components/TraitsTable";
import MainLayout from "../layouts/MainLayout";
import { formatNumber, formatPercent } from "../utils/format";

export default function Traits() {
  const { data: metadata } = useMetadata();
  const { rawTraits, isLoading, error } = useTraitStats();

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
        playRate: formatNumber(trait.stats?.playRate),
        place: formatNumber(trait.stats?.avgPlace),
        top4: formatPercent(trait.stats?.top4Rate),
        win: formatPercent(trait.stats?.winRate),
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
