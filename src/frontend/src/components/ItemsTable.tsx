import React, { useState } from "react";
import svgPaths from "../imports/svg-m38p7k7v3a";
import imgGargoyleStoneplate from "../assets/833b49bd6153f3889e4bc1d78aa21e06ebd7ec49.png";

type SortField = "name" | "playRate" | "place" | "top4" | "win";
type SortDirection = "asc" | "desc";

interface Item {
  id: string | number;
  name: string;
  icon: string;
  playRate: string;
  place: string;
  top4: string;
  win: string;
  topUsers: Array<{ id: string; name: string; imageUrl: string }>;
}

interface ItemsTableProps {
  items: Item[];
}

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

function ItemRow({ item, index }: { item: Item; index: number }) {
  const itemImage = item.icon || imgGargoyleStoneplate;
  const bgColor = index % 2 === 0 ? "#5F5F5F" : "#555555";

  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full transition-colors hover:bg-white/5"
      style={{ backgroundColor: bgColor }}
      data-name="Container"
    >
      {/* Item Icon & Name */}
      <div
        className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[250px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div
          className="content-stretch flex items-center relative shrink-0"
          data-name="Container"
        >
          <div
            className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0"
            data-name="Container"
          >
            <div className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                <img
                  alt=""
                  className="absolute left-0 max-w-none size-full top-0"
                  src={itemImage}
                />
              </div>
            </div>
          </div>
          <div
            className="box-border content-stretch flex flex-col items-start overflow-clip pl-0 pr-[7.83px] py-0 relative shrink-0"
            data-name="Container"
          >
            <div
              className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
              style={
                { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
              }
            >
              <p className="leading-[22px] whitespace-pre">{item.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Play Rate */}
      <div
        className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[100px]"
        data-name="Vertical Border"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div
          className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}
        >
          <p className="leading-[22px] whitespace-pre">{item.playRate}</p>
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
        <div
          className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}
        >
          <p className="leading-[22px] whitespace-pre">{item.place}</p>
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
        <div
          className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}
        >
          <p className="leading-[22px] whitespace-pre">{item.top4}</p>
        </div>
      </div>

      {/* Win */}
      <div
        className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        <div
          className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}
        >
          <p className="leading-[22px] whitespace-pre">{item.win}</p>
        </div>
      </div>

      {/* Top Users - show max 5 */}
      <div
        className="box-border content-stretch flex h-full items-center gap-[4px] pl-[12px] pr-0 py-0 relative shrink-0 w-[160px]"
        data-name="VerticalBorder"
      >
        {item.topUsers.slice(0, 5).map((user, index) => (
          <div
            key={index}
            className="max-w-[34px] relative rounded-[4px] shrink-0 size-[26px]"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
              <img
                alt={user.name}
                className="absolute left-0 max-w-none size-full top-0"
                src={
                  user.imageUrl ||
                  `https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=40&h=40&fit=crop`
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper to parse numeric value from string (handles % signs)
function parseValue(value: string): number {
  return parseFloat(value.replace("%", "")) || 0;
}

export function ItemsTable({ items }: ItemsTableProps) {
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

  // Sort items based on current sort state
  const sortedItems = [...items].sort((a, b) => {
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
    sortable = true 
  }: { 
    field: SortField; 
    label: string; 
    width: string;
    sortable?: boolean;
  }) => (
    <div
      className={`box-border content-stretch flex h-full items-center gap-[4px] justify-center pl-0 pr-[16px] py-0 relative shrink-0 ${width} ${sortable ? "cursor-pointer hover:bg-[#6e6e6e] transition-colors" : ""}`}
      data-name="VerticalBorder"
      onClick={() => sortable && handleSort(field)}
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
      />
      {sortable && (
        <SortIcon 
          direction={sortField === field ? sortDirection : "asc"} 
          active={sortField === field}
        />
      )}
      <div
        className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" } as React.CSSProperties}
      >
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
        {/* Item Header */}
        <div
          className="box-border content-stretch flex h-full items-center pl-[16px] pr-[16px] py-0 relative shrink-0 w-[250px] cursor-pointer hover:bg-[#6e6e6e] transition-colors"
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
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap ml-1"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Item</p>
          </div>
        </div>

        <HeaderCell field="playRate" label="Play rate" width="w-[100px]" />
        <HeaderCell field="place" label="Place" width="w-[80px]" />
        <HeaderCell field="top4" label="Top 4" width="w-[80px]" />
        <HeaderCell field="win" label="Win" width="w-[80px]" />

        {/* Top Users Header (not sortable) */}
        <div
          className="box-border content-stretch flex h-full items-center pl-[12px] pr-0 py-0 relative shrink-0 w-[150px]"
          data-name="VerticalBorder"
        >
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Top Users</p>
          </div>
        </div>
      </div>

      {/* Table Rows */}
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-name="Container"
      >
        {sortedItems.map((item, index) => (
          <ItemRow key={item.id || index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
