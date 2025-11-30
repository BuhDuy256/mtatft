import React from "react";
import svgPaths from "../imports/svg-m38p7k7v3a";
import imgGargoyleStoneplate from "../assets/833b49bd6153f3889e4bc1d78aa21e06ebd7ec49.png";

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

function UpArrowIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 15"
      >
        <path d={svgPaths.p1e33b200} fill="#0095FF" />
      </svg>
    </div>
  );
}

function ItemRow({ item }: { item: Item }) {
  const itemImage = item.icon || imgGargoyleStoneplate;

  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      {/* Item Icon & Name */}
      <div
        className="box-border content-stretch flex h-full items-center pl-[14px] pr-[16px] py-0 relative shrink-0 w-[175px]"
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

      {/* Top Users */}
      <div
        className="box-border content-stretch flex h-full items-center gap-[6px] pl-[16px] pr-0 py-0 relative shrink-0 flex-1"
        data-name="VerticalBorder"
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
        />
        {item.topUsers.map((user, index) => (
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

export function ItemsTable({ items }: ItemsTableProps) {
  return (
    <div className="bg-[#a89968] relative w-full" data-name="Container">
      {/* Table Header */}
      <div
        className="bg-[#7f886a] content-stretch flex h-[46px] items-start relative shrink-0 w-full"
        data-name="Container"
      >
        {/* Item Header */}
        <div
          className="box-border content-stretch flex h-full items-center pl-[16px] pr-[16px] py-0 relative shrink-0 w-[175px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Item</p>
          </div>
        </div>

        {/* Play rate Header */}
        <div
          className="box-border content-stretch flex h-full items-center gap-[4px] justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[100px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <UpArrowIcon />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Play rate</p>
          </div>
        </div>

        {/* Place Header */}
        <div
          className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Place</p>
          </div>
        </div>

        {/* Top 4 Header */}
        <div
          className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Top 4</p>
          </div>
        </div>

        {/* Win Header */}
        <div
          className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div
            className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap"
            style={
              { fontVariationSettings: "'wdth' 100" } as React.CSSProperties
            }
          >
            <p className="leading-[22px] whitespace-pre">Win</p>
          </div>
        </div>

        {/* Top Users Header */}
        <div
          className="box-border content-stretch flex h-full items-center pl-[16px] pr-0 py-0 relative shrink-0 flex-1"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
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
        {items.map((item, index) => (
          <ItemRow key={item.id || index} item={item} />
        ))}
      </div>
    </div>
  );
}
