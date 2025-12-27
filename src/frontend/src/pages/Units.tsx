import { useMemo } from "react";
import { useMetadata } from "../contexts/MetadataContext";
import { useUnitStats } from "../hooks/useUnitStats";
import { TierSection } from "../components/TierSection";
import MainLayout from "../layouts/MainLayout";

const getTierBackgroundColor = (cost: number): string => {
  const colors: Record<number, string> = {
    1: "#2a2f45",
    2: "#103037",
    3: "#1a2e4b",
    4: "#2c1541",
    5: "#302d2e",
  };
  return colors[cost] || "#8B7355";
};

export default function Units() {
  const { data: metadata } = useMetadata();
  const { rawUnits, isLoading, error } = useUnitStats();

  const tierData = useMemo(() => {
    if (!metadata || !rawUnits || rawUnits.length === 0) return [];

    // Enrich units with metadata
    const enrichedUnits = rawUnits.map((unit) => {
      const unitDetail = metadata.units.find(
        (m) => m.id.toLowerCase() === unit.id.toLowerCase()
      );

      return {
        id: unit.id,
        name: unitDetail?.name || unit.name,
        cost: unitDetail?.cost || 1,
        imageUrl: unitDetail?.imageUrl || unit.icon,
        avgPlace: unit.stats?.avgPlace || 0,
        playRate: unit.stats?.playRate || 0,
      };
    });

    // Group by cost (tier)
    const groupedByCost: Record<number, typeof enrichedUnits> = {};
    enrichedUnits.forEach((unit) => {
      if (!groupedByCost[unit.cost]) {
        groupedByCost[unit.cost] = [];
      }
      groupedByCost[unit.cost].push(unit);
    });

    // Convert to tier sections format
    return Object.entries(groupedByCost)
      .map(([cost, units]) => ({
        tier: parseInt(cost),
        name: `Tier ${cost}`,
        backgroundColor: getTierBackgroundColor(parseInt(cost)),
        units: units.sort((a, b) => a.avgPlace - b.avgPlace),
      }))
      .sort((a, b) => a.tier - b.tier);
  }, [rawUnits, metadata]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex-1 w-full max-w-[1000px] mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
              <p className="text-slate-400">Loading unit statistics...</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex-1 w-full max-w-[1000px] mx-auto px-4 py-8">
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
      <div className="flex-1 w-full max-w-[1000px] mx-auto px-4 py-8">
        <div className="space-y-6">
          {tierData.map((tier) => (
            <TierSection key={tier.tier} tier={tier} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
