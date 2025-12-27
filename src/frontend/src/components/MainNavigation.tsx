import { Link, useLocation } from "react-router-dom";

function DropdownArrow() {
  return (
    <div className="relative w-6 h-6">
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 5"
        >
          <path d="M0 0L5 5L10 0H0Z" fill="#EAF6FF" />
        </svg>
      </div>
    </div>
  );
}

export function MainNavigation({
  onStatsClick,
  isStatsOpen,
}: {
  onStatsClick: () => void;
  isStatsOpen: boolean;
}) {
  const location = useLocation();

  const isHome = location.pathname === "/home";
  const isStats =
    location.pathname === "/" ||
    location.pathname.startsWith("/units") ||
    location.pathname.startsWith("/items") ||
    location.pathname.startsWith("/traits");
  const isTeamBuilder = location.pathname === "/team-builder";

  return (
    <nav className="bg-[#555555] shadow-md">
      <div className="w-full max-w-[1024px] mx-auto px-4">
        <div className="content-stretch flex gap-[199.17px] items-center justify-between relative h-[48px]">
          {/* Left side - Nav Links */}
          <div className="flex flex-row items-center">
            <div className="h-full relative shrink-0 flex items-center">
              {/* Home Link */}
              <Link to="/home">
                <div
                  className={`box-border content-stretch flex h-[48px] items-center justify-center min-w-[52px] pb-[16.5px] pt-[15.5px] px-[20px] relative shrink-0 cursor-pointer transition-colors ${
                    isHome ? "bg-[#6e6e6e]" : "hover:bg-[rgba(255,255,255,0.1)]"
                  }`}
                >
                  <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap tracking-[0.07px] uppercase">
                    <p className="leading-[16px] whitespace-pre">Home</p>
                  </div>
                </div>
              </Link>

              {/* Stats Link */}
              <div
                className={`box-border content-stretch flex h-[48px] items-center justify-center min-w-[52px] pl-[12px] pr-[20px] py-0 relative shrink-0 cursor-pointer transition-colors ${
                  isStats ? "bg-[#6e6e6e]" : "hover:bg-[rgba(255,255,255,0.1)]"
                }`}
                onClick={onStatsClick}
              >
                <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap uppercase">
                  <p className="leading-[16px] whitespace-pre">Stats</p>
                </div>
                {isStats && (
                  <div className="h-[24px] relative shrink-0 w-[8px] ml-2">
                    <div
                      className={`absolute content-stretch flex flex-col items-center justify-center left-[-1px] overflow-clip size-[24px] top-0 transition-transform ${
                        isStatsOpen ? "rotate-180" : ""
                      }`}
                    >
                      <DropdownArrow />
                    </div>
                  </div>
                )}
              </div>

              {/* Team Builder Link */}
              <Link to="/team-builder">
                <div
                  className={`box-border content-stretch flex h-[48px] items-center justify-center min-w-[52px] pb-[16.5px] pt-[15.5px] px-[20px] relative shrink-0 cursor-pointer transition-colors ${
                    isTeamBuilder
                      ? "bg-[#6e6e6e]"
                      : "hover:bg-[rgba(255,255,255,0.1)]"
                  }`}
                >
                  <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[15px] text-center text-nowrap tracking-[0.07px] uppercase">
                    <p className="leading-[16px] whitespace-pre">
                      Team Builder
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
