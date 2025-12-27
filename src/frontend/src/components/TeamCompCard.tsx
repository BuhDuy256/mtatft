import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Champion {
  id: number;
  name: string;
  stars: number;
  items: number[];
  imageUrl?: string;
  borderColor: string;
}

interface TeamComp {
  id: number;
  name: string;
  tier: string;
  coreChampions: Champion[];
  flexChampions: Champion[];
  stats: {
    playRate: string;
    avgPlace: string;
    top4: string;
    winRate: string;
  };
}

interface TeamCompCardProps {
  comp: TeamComp;
}

function ChampionPortrait({ champion }: { champion: Champion }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[5px] py-[5px] relative self-stretch shrink-0">
      <div className="content-stretch flex flex-col h-[47px] items-center relative shrink-0">
        <div className="max-w-[47px] pointer-events-none relative rounded-[4px] shrink-0 size-[47px]">
          <div className="absolute inset-0 overflow-hidden rounded-[4px]">
            <ImageWithFallback
              src={
                champion.imageUrl ||
                `https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=100&h=100&fit=crop`
              }
              alt={champion.name}
              className="absolute left-0 max-w-none size-full top-0 object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-solid inset-0 rounded-[4px]"
            style={{ borderColor: champion.borderColor }}
          />
        </div>
      </div>
    </div>
  );
}

export function TeamCompCard({ comp }: TeamCompCardProps) {
  return (
    <div className="relative w-fit bg-gradient-to-br from-[#b8965e] to-[#a67c4c] rounded-[4px] shadow-lg min-w-[700px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative size-full">
          {/* Left Section - Team Info and Champions */}
          <div className="flex flex-row items-center self-stretch">
            <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-[6px] py-[16px] relative shrink-0">
              {/* Header with Team Name */}
              <div className="content-stretch flex gap-[89.53px] items-end relative shrink-0 w-[448px]">
                <div className="content-stretch flex h-[30px] items-center relative shrink-0">
                  <div className="content-stretch flex items-center relative shrink-0">
                    {/* Team Name */}
                    <div className="box-border content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-nowrap">
                        <p className="leading-[28px] whitespace-pre">
                          {comp.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Icons */}
                <div className="flex flex-row items-end self-stretch">
                  <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0">
                    <div className="content-stretch flex h-[32px] items-center relative shrink-0">
                      {/* Copy Icon */}
                      {/* <div className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0">
                        <div className="relative shrink-0 size-[20px]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 20 20"
                          >
                            <path d={svgPaths.p3f88aa80} fill="#52A9FF" />
                          </svg>
                        </div>
                      </div> */}

                      {/* Info Icon */}
                      {/* <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="box-border content-stretch flex items-center justify-center p-[6px] relative rounded-[16px] shrink-0">
                          <div className="relative shrink-0 size-[20px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 20 20"
                            >
                              <path d={svgPaths.p1b8fa9d0} fill="#52A9FF" />
                            </svg>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Core/Flex Dividers */}
              <div className="box-border content-stretch flex items-start pb-0 pt-[4px] px-0 relative shrink-0 w-full">
                {/* Core Divider - width based on core champions count */}
                {comp.coreChampions.length > 0 && (
                  <div 
                    className="content-stretch flex items-center relative self-stretch shrink-0"
                    style={{ width: `${comp.coreChampions.length * 57}px` }}
                  >
                    <div className="basis-0 bg-white grow h-px min-h-px min-w-px shrink-0" />
                    <div className="box-border content-stretch flex flex-col items-start px-[5px] py-0 relative shrink-0">
                      <div
                        className="flex flex-col font-['Roboto',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[14px] text-nowrap"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="leading-[16px] whitespace-pre">Core</p>
                      </div>
                    </div>
                    <div className="basis-0 bg-white grow h-px min-h-px min-w-px shrink-0" />
                  </div>
                )}

                {/* Flex Divider - width based on flex champions count */}
                {comp.flexChampions.length > 0 && (
                  <div 
                    className="box-border content-stretch flex flex-col items-start justify-center pl-[12px] pr-0 py-0 relative self-stretch shrink-0"
                    style={{ width: `${comp.flexChampions.length * 57 + 12}px` }}
                  >
                    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full">
                      <div className="basis-0 bg-white grow h-px min-h-px min-w-px shrink-0" />
                      <div className="box-border content-stretch flex flex-col items-start px-[5px] py-0 relative shrink-0">
                        <div
                          className="flex flex-col font-['Roboto',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[14px] text-nowrap"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          <p className="leading-[16px] whitespace-pre">Flex</p>
                        </div>
                      </div>
                      <div className="basis-0 bg-white grow h-px min-h-px min-w-px shrink-0" />
                    </div>
                  </div>
                )}
              </div>

              {/* Champions */}
              <div className="box-border content-stretch flex items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                {/* Core Champions */}
                <div className="content-stretch flex items-start relative shrink-0">
                  {comp.coreChampions.map((champion) => (
                    <ChampionPortrait key={champion.id} champion={champion} />
                  ))}
                </div>

                {/* Flex Champions */}
                <div className="content-stretch flex items-start relative shrink-0">
                  {comp.flexChampions.map((champion) => (
                    <ChampionPortrait key={champion.id} champion={champion} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Stats */}
          <div className="flex flex-row items-center self-stretch">
            <div className="box-border content-stretch flex h-full items-start pl-[12px] pr-0 py-[16px] relative shrink-0">
              <div className="content-stretch flex h-full items-center justify-center relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]">
                  <div className="h-[92px] relative shrink-0 w-full">
                    {/* Play Rate */}
                    <div className="absolute content-stretch flex flex-col items-start left-0 right-[69.55px] top-0">
                      <div className="box-border content-stretch flex flex-col items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full">
                        <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(234,246,255,0.7)] text-center w-full">
                          <p className="leading-[18px]">Play Rate</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-center w-full">
                          <p className="leading-[18px]">
                            {comp.stats.playRate}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Place */}
                    <div className="absolute content-stretch flex flex-col items-start left-[94.45px] right-0 top-0">
                      <div className="box-border content-stretch flex flex-col items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full">
                        <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(234,246,255,0.7)] text-center w-full">
                          <p className="leading-[18px]">Place</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-center w-full">
                          <p className="leading-[18px]">
                            {comp.stats.avgPlace}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Top 4% */}
                    <div className="absolute content-stretch flex flex-col items-start left-0 right-[69.55px] top-[52px]">
                      <div className="box-border content-stretch flex flex-col items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full">
                        <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(234,246,255,0.7)] text-center w-full">
                          <p className="leading-[18px]">Top 4 %</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-center w-full">
                          <p className="leading-[18px]">{comp.stats.top4}</p>
                        </div>
                      </div>
                    </div>

                    {/* Win % */}
                    <div className="absolute content-stretch flex flex-col items-start left-[94.45px] right-0 top-[52px]">
                      <div className="box-border content-stretch flex flex-col items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full">
                        <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(234,246,255,0.7)] text-center w-full">
                          <p className="leading-[18px]">Win %</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eaf6ff] text-[18px] text-center w-full">
                          <p className="leading-[18px]">{comp.stats.winRate}</p>
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
    </div>
  );
}
