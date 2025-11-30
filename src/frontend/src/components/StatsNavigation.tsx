import { Link, useLocation } from "react-router-dom";

function TopCompsTab() {
  const location = useLocation();
  const isActive = location.pathname === "/";

  return (
    <Link to="/">
      <div
        className={`box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] px-[16px] py-0 relative shrink-0 cursor-pointer transition-colors ${
          isActive ? "bg-[#443592]" : "hover:bg-[rgba(255,255,255,0.1)]"
        }`}
        data-name="Component 4"
      >
        <div
          className="content-stretch flex flex-col items-start relative shrink-0"
          data-name="Container"
        >
          {isActive && (
            <div
              className="absolute bg-[#9e8cfc] bottom-[-4px] h-[2px] left-[-5px] w-[60.86px]"
              data-name="Horizontal Divider"
            />
          )}
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap tracking-[0.06px] uppercase">
            <p className="leading-[16px] text-[14px] whitespace-pre">
              Top Comps
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function UnitsTab() {
  const location = useLocation();
  const isActive = location.pathname === "/units";

  return (
    <Link to="/units">
      <div
        className={`box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] px-[18px] py-0 relative shrink-0 cursor-pointer transition-colors ${
          isActive ? "bg-[#443592]" : "hover:bg-[rgba(255,255,255,0.1)]"
        }`}
        data-name="Component 4"
      >
        <div
          className="content-stretch flex flex-col items-start relative shrink-0"
          data-name="Container"
        >
          {isActive && (
            <div
              className="absolute bg-[#9e8cfc] bottom-[-4px] h-[2px] left-[-5px] w-[60.86px]"
              data-name="Horizontal Divider"
            />
          )}
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap tracking-[0.06px] uppercase">
            <p className="leading-[16px] text-[14px] whitespace-pre">Units</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ItemsTab() {
  const location = useLocation();
  const isActive = location.pathname === "/items";

  return (
    <Link to="/items">
      <div
        className={`box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] pl-[17.85px] pr-[17.84px] py-0 relative shrink-0 cursor-pointer transition-colors ${
          isActive ? "bg-[#443592]" : "hover:bg-[rgba(255,255,255,0.1)]"
        }`}
        data-name="Component 4"
      >
        <div
          className="content-stretch flex flex-col items-start relative shrink-0"
          data-name="Container"
        >
          {isActive && (
            <div
              className="absolute bg-[#9e8cfc] bottom-[-4px] h-[2px] left-[-5px] w-[60.86px]"
              data-name="Horizontal Divider"
            />
          )}
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap tracking-[0.06px] uppercase">
            <p className="leading-[16px] text-[14px] whitespace-pre">Items</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function TraitsTab() {
  const location = useLocation();
  const isActive = location.pathname === "/traits";

  return (
    <Link to="/traits">
      <div
        className={`box-border content-stretch flex h-[44px] items-center justify-center min-w-[80px] px-[16px] py-0 relative shrink-0 cursor-pointer transition-colors ${
          isActive ? "bg-[#443592]" : "hover:bg-[rgba(255,255,255,0.1)]"
        }`}
        data-name="Component 6"
      >
        <div
          className="content-stretch flex flex-col items-start relative shrink-0"
          data-name="Container"
        >
          {isActive && (
            <div
              className="absolute bg-[#9e8cfc] bottom-[-4px] h-[2px] left-[-5px] w-[60.86px]"
              data-name="Horizontal Divider"
            />
          )}
          <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.87)] text-nowrap uppercase">
            <p className="leading-[16px] text-[14px] whitespace-pre">Traits</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function StatsNavigation() {
  return (
    <div
      className="bg-[#392c72] content-stretch flex flex-col items-center relative w-full"
      data-name="Background"
    >
      <div
        className="content-stretch flex items-start relative shrink-0 w-full max-w-[1024px]"
        data-name="Nav"
      >
        <div
          className="content-stretch flex items-start relative self-stretch shrink-0"
          data-name="Container"
        >
          <TopCompsTab />
          <UnitsTab />
          <ItemsTab />
          <TraitsTab />
        </div>
      </div>
    </div>
  );
}
