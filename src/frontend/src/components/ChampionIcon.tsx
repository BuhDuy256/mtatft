import { Star } from "lucide-react";

interface Champion {
  id: number;
  name: string;
  stars: number;
  items: number[];
}

interface ChampionIconProps {
  champion: Champion;
}

// Color palette for champion portraits
const championColors = [
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#ef4444",
  "#14b8a6",
  "#f97316",
  "#84cc16",
  "#06b6d4",
  "#a855f7",
  "#eab308",
  "#22c55e",
  "#f43f5e",
];

// Item colors for overlay
const itemColors = [
  "#fbbf24",
  "#60a5fa",
  "#34d399",
  "#f87171",
  "#a78bfa",
  "#fb923c",
];

export function ChampionIcon({ champion }: ChampionIconProps) {
  const bgColor = championColors[champion.id % championColors.length];

  return (
    <div className="relative">
      {/* Champion Portrait */}
      <div
        className="w-12 h-12 rounded border-2 border-yellow-600 flex items-center justify-center text-white text-xs overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-[10px] text-center px-1">
          {champion.name.slice(0, 3)}
        </span>
      </div>

      {/* Item Overlays */}
      {champion.items.length > 0 && (
        <div className="absolute -bottom-1 -right-1 flex gap-0.5">
          {champion.items.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="w-3 h-3 rounded border border-white"
              style={{ backgroundColor: itemColors[item % itemColors.length] }}
            />
          ))}
        </div>
      )}

      {/* Star Rating */}
      {champion.stars > 1 && (
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-px">
          {Array.from({ length: champion.stars }).map((_, idx) => (
            <Star
              key={idx}
              size={8}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      )}
    </div>
  );
}
