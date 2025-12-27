import { useMemo } from "react";
import { useMetadata } from "../contexts/MetadataContext";
import { useTopComps } from "../hooks/useTopComps";
import { FilterSection } from "../components/FilterSection";
import { TeamCompCard } from "../components/TeamCompCard";
import MainLayout from "../layouts/MainLayout";

const getCostBorderColor = (cost: number): string => {
  const colors: Record<number, string> = {
    1: "rgba(128,128,128,0.88)",
    2: "rgba(84,195,255,0.88)",
    3: "rgba(84,195,255,0.88)",
    4: "rgba(222,14,189,0.88)",
    5: "rgba(255,196,48,0.88)",
  };
  return colors[cost] || "rgba(128,128,128,0.88)";
};

export default function TeamCompositions() {
  const { data: metadata } = useMetadata();
  const { rawComps, isLoading, error } = useTopComps();

  const enrichedComps = useMemo(() => {
    if (!metadata || !rawComps || rawComps.length === 0) return [];

    return rawComps.map((comp) => ({
      id: comp.id,
      name: comp.name,
      tier: comp.tier,
      coreChampions: (comp.coreUnit || []).map((u) => {
        const detail = metadata.units.find(
          (m) => m.id.toLowerCase() === u.id.toLowerCase()
        );
        return {
          id: parseInt(u.id) || 0,
          name: detail?.name || u.name,
          stars: 2,
          items: [],
          imageUrl: detail?.imageUrl || "",
          borderColor: getCostBorderColor(detail?.cost || 0),
        };
      }),
      flexChampions: (comp.flexUnit || []).map((u) => {
        const detail = metadata.units.find(
          (m) => m.id.toLowerCase() === u.id.toLowerCase()
        );
        return {
          id: parseInt(u.id) || 0,
          name: detail?.name || u.name,
          stars: 2,
          items: [],
          imageUrl: detail?.imageUrl || "",
          borderColor: getCostBorderColor(detail?.cost || 0),
        };
      }),
      stats: {
        playRate: comp.stats?.playRate?.toFixed(1) || "0.0",
        avgPlace: comp.stats?.avgPlace?.toFixed(2) || "0.00",
        top4: comp.stats?.top4Rate?.toFixed(1) || "0.0",
        winRate: comp.stats?.winRate?.toFixed(1) || "0.0",
      },
    }));
  }, [rawComps, metadata]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="main-content flex-1 w-full max-w-[1200px] mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
              <p className="text-slate-400">Loading team compositions...</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="main-content flex-1 w-full max-w-[1200px] mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
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
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="main-content flex-1 w-full max-w-[1200px] mx-auto px-4 py-8">
        <FilterSection />

        <div className="mt-6 flex flex-col items-center gap-4">
          {enrichedComps.map((comp) => (
            <TeamCompCard key={comp.id} comp={comp} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
