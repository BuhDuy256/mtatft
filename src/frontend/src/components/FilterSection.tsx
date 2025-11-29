import svgPaths from "../imports/svg-u0jb3sa6q4";

export function FilterSection() {
  return (
    <div className="bg-[#7f886a] relative rounded-[4px] size-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
          {/* Team Compositions Header */}
          <div className="box-border content-stretch flex h-[48px] items-center justify-center pb-[16px] pt-[4px] px-0 relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="flex flex-col font-['Roboto',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[20px] text-nowrap">
                <p className="leading-[28px] whitespace-pre">
                  Team Compositions
                </p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start pl-[4px] pr-0 py-0 relative shrink-0">
              <div className="relative shrink-0 size-[20px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 20"
                >
                  <path d={svgPaths.p29ef6f00} fill="#EAF6FF" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sort and Filter Row */}
          <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
            {/* Sort by Dropdown */}
            <div className="box-border content-stretch flex gap-[8px] items-center pr-[8px] py-0 relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-nowrap">
                  <p className="leading-[28px] whitespace-pre">Sort by:</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]">
                <div className="basis-0 grow min-h-[32px] min-w-[40px] relative shrink-0">
                  <div className="min-h-inherit min-w-inherit overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex flex-col items-start min-h-inherit min-w-inherit pb-[5px] pl-0 pr-[24px] pt-[4px] relative w-full">
                      <div className="flex flex-col font-['Roboto',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
                        <p className="leading-[23px] whitespace-pre">
                          Avg. Place
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[24px] left-0 top-[8px] w-[100px]">
                  <div
                    aria-hidden="true"
                    className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none"
                  />
                </div>
                <div className="absolute right-0 size-[24px] top-[4px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10L12 15L17 10H7Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filters Dropdown */}
            <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-0 relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-nowrap">
                  <p className="leading-[28px] whitespace-pre">Filters:</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-center flex flex-wrap gap-0 items-center justify-center pb-px pl-0 pr-[30px] pt-0 relative w-full">
                      <div className="basis-0 grow h-[31px] min-h-px min-w-[34px] relative shrink-0">
                        <div className="min-w-inherit overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex flex-col h-[31px] items-start min-w-inherit pl-0 pr-[4px] py-[6px] relative w-full">
                            <div className="content-stretch flex flex-col items-start opacity-50 overflow-clip relative shrink-0 w-full">
                              <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.15px] w-full">
                                <p className="leading-[normal]">Add Filter</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute h-[24px] left-0 top-[8px] w-[200px]">
                        <div
                          aria-hidden="true"
                          className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none"
                        />
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start right-[-2px] top-[2px]">
                        <div className="box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[14px] shrink-0">
                          <div className="relative shrink-0 size-[24px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 24 24"
                            >
                              <path d="M7 10L12 15L17 10H7Z" fill="white" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Switches Row */}
          <div className="h-[40px] relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex flex-wrap gap-[20px] h-[40px] items-center justify-center pb-0 pl-[6px] pr-0 pt-[16px] relative w-full">
                {/* Show low play rate compositions */}
                <div className="h-full relative shrink-0 w-[283.73px]">
                  <div className="absolute bottom-0 content-stretch flex isolate items-center left-[-11px] top-0">
                    <div className="box-border content-stretch flex h-[24px] items-start justify-center overflow-clip p-[7px] relative shrink-0 w-[40px] z-[2]">
                      <div className="basis-0 bg-white grow h-full min-h-px min-w-px opacity-30 rounded-[7px] shrink-0" />
                      <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[4px] rounded-[12px] top-0">
                        <div className="bg-[#e0e0e0] rounded-[8px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] shrink-0 size-[16px]" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]">
                      <div className="flex flex-col font-['Roboto',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[16px] text-nowrap tracking-[0.15px]">
                        <p className="leading-[24px] whitespace-pre">
                          Show low play rate compositions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand all subcomps */}
                <div className="h-full relative shrink-0 w-[199.69px]">
                  <div className="absolute bottom-0 content-stretch flex isolate items-center left-[-11px] top-0">
                    <div className="box-border content-stretch flex h-[24px] items-start justify-center overflow-clip p-[7px] relative shrink-0 w-[40px] z-[2]">
                      <div className="basis-0 bg-white grow h-full min-h-px min-w-px opacity-30 rounded-[7px] shrink-0" />
                      <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[4px] rounded-[12px] top-0">
                        <div className="bg-[#e0e0e0] rounded-[8px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] shrink-0 size-[16px]" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]">
                      <div className="flex flex-col font-['Roboto',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[16px] text-nowrap tracking-[0.15px]">
                        <p className="leading-[24px] whitespace-pre">
                          Expand all subcomps
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
