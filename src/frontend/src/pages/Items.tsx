import { useEffect, useMemo, useState } from "react";
import { useMetadata } from "../contexts/MetadataContext";
import { ItemsFilter } from "../components/ItemsFilter";
import { ItemsTable } from "../components/ItemsTable";
import MainLayout from "../layouts/MainLayout";
import { fetchItemStats } from "../services/stats.service";
import type { ItemStat } from "../types/stats";

export default function Items() {
  const { data: metadata } = useMetadata();
  const [rawItems, setRawItems] = useState<ItemStat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadItemStats() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchItemStats();

        console.log("Item Stats API Response:", response);

        if (
          response &&
          response.itemStats &&
          Array.isArray(response.itemStats)
        ) {
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

  const enrichedItems = useMemo(() => {
    if (!metadata || !rawItems || rawItems.length === 0) return [];

    return rawItems.map((item) => {
      const itemDetail = metadata.items.find(
        (m) => m.id.toLowerCase() === item.id.toLowerCase()
      );

      // Enrich top users with unit metadata (only image_url)
      const enrichedTopUsers = (item.topUsers || []).map((user) => {
        const userDetail = metadata.units.find(
          (m) => m.id.toLowerCase() === user.id.toLowerCase()
        );
        return {
          id: user.id,
          name: userDetail?.name || user.name,
          imageUrl: userDetail?.image_url || "",
        };
      });

      return {
        id: item.id,
        name: itemDetail?.name || item.name,
        icon: itemDetail?.image_url || item.icon,
        playRate: item.stats?.play_rate?.toFixed(2) || "0.00",
        place: item.stats?.avg_place?.toFixed(2) || "0.00",
        top4: `${(item.stats?.top4_rate || 0).toFixed(1)}%`,
        win: `${(item.stats?.win_rate || 0).toFixed(1)}%`,
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
