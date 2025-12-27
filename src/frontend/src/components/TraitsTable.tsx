import { useState } from "react";
import svgPaths from "../imports/svg-4kd7dedy2x";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type SortField = "name" | "playRate" | "place" | "top4" | "win";
type SortDirection = "asc" | "desc";

// Sort Icon with direction
function SortIcon({ direction, active }: { direction: SortDirection; active: boolean }) {
  const rotation = direction === "desc" ? "rotate-180" : "";
  const color = active ? "#0095FF" : "#8a9a8a";
  
  return (
    <div className={`relative shrink-0 size-[18px] transition-transform ${rotation}`} data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 15"
      >
        <path d={svgPaths.p1e33b200} fill={color} />
      </svg>
    </div>
  );
}

interface TraitRowProps {
  name: string;
  icon: string;
  playRate: string;
  place: string;
  top4: string;
  win: string;
  index: number;
}

function TraitRow({
  name,
  icon,
  playRate,
  place,
  top4,
  win,
  index,
}: TraitRowProps) {
  const bgColor = index % 2 === 0 ? "#5F5F5F" : "#555555";

  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full transition-colors hover:bg-white/5"
      style={{ backgroundColor: bgColor }}
      data-name="Container"
    >
      {/* Trait Column */}
      <div
        className="box-border content-stretch flex h-full items-center pl-[8px] pr-[16px] py-0 relative shrink-0 w-[200px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div
          className="content-stretch flex h-full items-center gap-[6px] relative shrink-0"
          data-name="Container"
        >
          {/* Trait Icon */}
          <div className="relative shrink-0 size-[28px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
              <ImageWithFallback
                src={
                  icon ||
                  `https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=28&h=28&fit=crop`
                }
                alt={name}
                className="absolute left-0 max-w-none size-full top-0"
              />
            </div>
          </div>

          {/* Trait Name */}
          <div
            className="box-border content-stretch flex flex-col items-start overflow-clip pl-0 pr-0 py-0 relative shrink-0"
            data-name="Container"
          >
            <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
              <p className="leading-[22px] whitespace-pre">
               {name}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Play rate */}
      <div
        className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[100px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap">
          <p className="leading-[22px] whitespace-pre">{playRate}</p>
        </div>
      </div>

      {/* Place */}
      <div
        className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap">
          <p className="leading-[22px] whitespace-pre">{place}</p>
        </div>
      </div>

      {/* Top 4 */}
      <div
        className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap">
          <p className="leading-[22px] whitespace-pre">{top4}</p>
        </div>
      </div>

      {/* Win */}
      <div className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]">
        <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap">
          <p className="leading-[22px] whitespace-pre">{win}</p>
        </div>
      </div>
    </div>
  );
}

interface Trait {
  id: string | number;
  name: string;
  icon: string;
  playRate: string;
  place: string;
  top4: string;
  win: string;
}

interface TraitsTableProps {
  traits: Trait[];
}

// Helper to parse numeric value from string (handles % signs)
function parseValue(value: string): number {
  return parseFloat(value.replace("%", "")) || 0;
}

export function TraitsTable({ traits }: TraitsTableProps) {
  const [sortField, setSortField] = useState<SortField>("playRate");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // New field, default to descending
      setSortField(field);
      setSortDirection("desc");
    }
  };

  // Sort traits based on current sort state
  const sortedTraits = [...traits].sort((a, b) => {
    let aVal: number | string;
    let bVal: number | string;

    if (sortField === "name") {
      aVal = a.name.toLowerCase();
      bVal = b.name.toLowerCase();
      return sortDirection === "asc" 
        ? aVal.localeCompare(bVal as string)
        : (bVal as string).localeCompare(aVal as string);
    } else {
      aVal = parseValue(a[sortField]);
      bVal = parseValue(b[sortField]);
      return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
    }
  });

  const HeaderCell = ({ 
    field, 
    label, 
    width,
    sortable = true,
    hasBorder = true
  }: { 
    field: SortField; 
    label: string; 
    width: string;
    sortable?: boolean;
    hasBorder?: boolean;
  }) => (
    <div
      className={`box-border content-stretch flex h-full items-center gap-[4px] justify-center pl-0 pr-[16px] py-0 relative shrink-0 ${width} ${sortable ? "cursor-pointer hover:bg-[#6e6e6e] transition-colors" : ""}`}
      data-name="VerticalBorder"
      onClick={() => sortable && handleSort(field)}
    >
      {hasBorder && (
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
      )}
      {sortable && (
        <SortIcon 
          direction={sortField === field ? sortDirection : "asc"} 
          active={sortField === field}
        />
      )}
      <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">{label}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#555555] relative w-fit rounded-lg overflow-hidden shrink-0" data-name="Container">
      {/* Table Header */}
      <div
        className="bg-[#555555] content-stretch flex h-[46px] items-start relative shrink-0 w-full"
        data-name="Container"
      >
        {/* Trait Header */}
        <div
          className="box-border content-stretch flex h-full items-center pl-[16px] pr-[16px] py-0 relative shrink-0 w-[200px] cursor-pointer hover:bg-[#6e6e6e] transition-colors"
          data-name="VerticalBorder"
          onClick={() => handleSort("name")}
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <SortIcon 
            direction={sortField === "name" ? sortDirection : "asc"} 
            active={sortField === "name"}
          />
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap ml-1">
            <p className="leading-[22px] whitespace-pre">Trait</p>
          </div>
        </div>

        <HeaderCell field="playRate" label="Play rate" width="w-[100px]" />
        <HeaderCell field="place" label="Place" width="w-[80px]" />
        <HeaderCell field="top4" label="Top 4" width="w-[80px]" />
        <HeaderCell field="win" label="Win" width="w-[80px]" hasBorder={false} />
      </div>

      {/* Table Rows */}
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-name="Container"
      >
        {sortedTraits.map((trait, index) => (
          <TraitRow
            key={trait.id || index}
            name={trait.name}
            icon={trait.icon}
            playRate={trait.playRate}
            place={trait.place}
            top4={trait.top4}
            win={trait.win}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
