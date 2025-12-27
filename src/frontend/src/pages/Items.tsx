import { useMemo } from "react";
import { useMetadata } from "../contexts/MetadataContext";
import { useItemStats } from "../hooks/useItemStats";
import { ItemsFilter } from "../components/ItemsFilter";
import { ItemsTable } from "../components/ItemsTable";
import MainLayout from "../layouts/MainLayout";

export default function Items() {
  const { data: metadata } = useMetadata();
  const { rawItems, isLoading, error } = useItemStats();

  const enrichedItems = useMemo(() => {
    if (!metadata || !rawItems || rawItems.length === 0) return [];

    return rawItems.map((item) => {
      const itemDetail = metadata.items.find(
        (m) => m.id.toLowerCase() === item.id.toLowerCase()
      );

      // Enrich top users with unit metadata (only imageUrl)
      const enrichedTopUsers = (item.topUsers || []).map((user) => {
        const userDetail = metadata.units.find(
          (m) => m.id.toLowerCase() === user.id.toLowerCase()
        );
        return {
          id: user.id,
          name: userDetail?.name || user.name,
          imageUrl: userDetail?.imageUrl || "",
        };
      });

      return {
        id: item.id,
        name: itemDetail?.name || item.name,
        icon: itemDetail?.imageUrl || item.icon,
        playRate: item.stats?.playRate?.toFixed(2) || "0.00",
        place: item.stats?.avgPlace?.toFixed(2) || "0.00",
        top4: `${(item.stats?.top4Rate || 0).toFixed(1)}%`,
        win: `${(item.stats?.winRate || 0).toFixed(1)}%`,
        topUsers: enrichedTopUsers,
      };
    });
  }, [rawItems, metadata]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex-1 w-full max-w-[1024px] mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
              <p className="text-slate-400">Loading item statistics...</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex-1 w-full max-w-[1024px] mx-auto px-4 py-8">
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
      <div className="flex-1 w-full max-w-[1024px] mx-auto px-4 py-8">
        <div className="rounded-lg overflow-hidden">
          <ItemsFilter />
          <ItemsTable items={enrichedItems} />
        </div>
      </div>
    </MainLayout>
  );
}
