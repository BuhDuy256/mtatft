import svgPaths from "../imports/svg-4kd7dedy2x";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Sort Icon (up arrow)
function SortIcon() {
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

interface TraitRowProps {
  name: string;
  icon: string;
  playRate: string;
  place: string;
  top4: string;
  win: string;
}

function TraitRow({
  name,
  icon,
  playRate,
  place,
  top4,
  win,
}: TraitRowProps) {
  return (
    <div
      className="content-stretch flex h-[46px] items-start relative shrink-0 w-full"
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

export function TraitsTable({ traits }: TraitsTableProps) {
  return (
    <div className="bg-[#a89968] relative w-full" data-name="Container">
      {/* Table Header */}
      <div
        className="bg-[#7f886a] content-stretch flex h-[46px] items-start relative shrink-0 w-full"
        data-name="Container"
      >
        {/* Trait Header */}
        <div
          className="box-border content-stretch flex h-full items-center pl-[16px] pr-[16px] py-0 relative shrink-0 w-[200px]"
          data-name="VerticalBorder"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_2px_0px_0px] border-[rgba(0,149,255,0.08)] border-solid inset-0 pointer-events-none"
          />
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
            <p className="leading-[22px] whitespace-pre">Trait</p>
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
          <SortIcon />
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
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
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
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
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
            <p className="leading-[22px] whitespace-pre">Top 4</p>
          </div>
        </div>

        {/* Win Header */}
        <div className="box-border content-stretch flex h-full items-center justify-center pl-0 pr-[16px] py-0 relative shrink-0 w-[80px]">
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-nowrap">
            <p className="leading-[22px] whitespace-pre">Win</p>
          </div>
        </div>
      </div>

      {/* Table Rows */}
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-name="Container"
      >
        {traits.map((trait, index) => (
          <TraitRow
            key={trait.id || index}
            name={trait.name}
            icon={trait.icon}
            playRate={trait.playRate}
            place={trait.place}
            top4={trait.top4}
            win={trait.win}
          />
        ))}
      </div>
    </div>
  );
}
