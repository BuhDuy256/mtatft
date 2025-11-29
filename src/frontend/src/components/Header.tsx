import svgPaths from "../imports/svg-ukz8cm9dfo";

export function Header() {
  return (
    <header className="text-white">
      {/* Top Navigation - Figma Design */}
      <div className="bg-[#555555] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between h-[48px] px-4">
          {/* Left Navigation */}
          <nav className="flex items-center">
            <a
              href="#"
              className="flex items-center justify-center h-[48px] px-[20px] font-['Montserrat',sans-serif] text-[#eaf6ff] text-[15px] tracking-[0.07px] uppercase hover:bg-white/10 transition-colors"
            >
              Home
            </a>
            <div className="relative group">
              <a
                href="#"
                className="flex items-center justify-center h-[48px] px-[20px] font-['Montserrat',sans-serif] text-[#eaf6ff] text-[15px] uppercase hover:bg-white/10 transition-colors"
              >
                Stats
              </a>
            </div>
            <a
              href="#"
              className="flex items-center justify-center h-[48px] px-[20px] font-['Montserrat',sans-serif] text-[#eaf6ff] text-[15px] tracking-[0.07px] uppercase hover:bg-white/10 transition-colors"
            >
              Players
            </a>
            <a
              href="#"
              className="flex items-center justify-center h-[48px] px-[20px] font-['Montserrat',sans-serif] text-[#eaf6ff] text-[15px] tracking-[0.07px] uppercase hover:bg-white/10 transition-colors"
            >
              Team Builder
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="w-[24px] h-[24px] hover:opacity-80 transition-opacity">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p1898c200} fill="#EAF6FF" />
              </svg>
            </button>
            <button className="w-[24px] h-[24px] hover:opacity-80 transition-opacity">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p18ab9080} fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation - Figma Design */}
      <div className="bg-[#555555] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex items-start">
            {/* Top Comps - Active with underline */}
            <a
              href="#"
              className="box-border flex h-[44px] items-center justify-center min-w-[80px] px-[16px] py-0 relative hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col items-start relative">
                <div className="absolute bottom-[-4px] h-[2px] left-[-5px] w-[98.56px] bg-white" />
                <p className="font-['Montserrat',sans-serif] leading-[16px] text-[14px] text-[rgba(255,255,255,0.87)] uppercase whitespace-pre">
                  Top Comps
                </p>
              </div>
            </a>

            {/* Units */}
            <a
              href="#"
              className="box-border flex h-[44px] items-center justify-center min-w-[80px] px-[18px] py-0 hover:bg-white/10 transition-colors"
            >
              <p className="font-['Montserrat',sans-serif] leading-[16px] text-[14px] text-[rgba(255,255,255,0.87)] tracking-[0.06px] uppercase whitespace-pre">
                Units
              </p>
            </a>

            {/* Items */}
            <a
              href="#"
              className="box-border flex h-[44px] items-center justify-center min-w-[80px] pl-[17.85px] pr-[17.84px] py-0 hover:bg-white/10 transition-colors"
            >
              <p className="font-['Montserrat',sans-serif] leading-[16px] text-[14px] text-[rgba(255,255,255,0.87)] tracking-[0.06px] uppercase whitespace-pre">
                Items
              </p>
            </a>

            {/* Traits */}
            <a
              href="#"
              className="box-border flex h-[44px] items-center justify-center min-w-[80px] px-[16px] py-0 hover:bg-white/10 transition-colors"
            >
              <p className="font-['Montserrat',sans-serif] leading-[16px] text-[14px] text-[rgba(255,255,255,0.87)] tracking-[0.06px] uppercase whitespace-pre">
                Traits
              </p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
