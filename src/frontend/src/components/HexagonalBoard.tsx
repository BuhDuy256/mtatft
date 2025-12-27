interface HexSlotProps {
  row: number;
  col: number;
}

function HexSlot({ row, col }: HexSlotProps) {
  return (
    <div className="relative w-full aspect-[1.15/1] flex items-center justify-center group cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Hexagon shape */}
        <polygon
          points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5"
          fill="#3d3526"
          stroke="#6b5d3f"
          strokeWidth="2.5"
          className="group-hover:fill-[#4a4030] transition-colors"
        />
      </svg>
    </div>
  );
}

export function HexagonalBoard() {
  // 4 rows x 7 columns
  const rows = 4;
  const cols = 7;

  return (
    <div className="w-full bg-gradient-to-b from-[#a89560] via-[#9d8a55] to-[#8b7d4f] p-8 rounded-lg shadow-xl">
      <div className="max-w-[700px] mx-auto">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          // Even rows (0-indexed: rows 1 and 3) are offset
          const isOffsetRow = rowIndex % 2 === 1;
          
          return (
            <div
              key={rowIndex}
              className="flex justify-center items-center gap-1"
              style={{
                marginLeft: isOffsetRow ? '8.5%' : '0',
                marginTop: rowIndex === 0 ? '0' : '-5%'
              }}
            >
              {Array.from({ length: cols }).map((_, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="w-[13%]">
                  <HexSlot row={rowIndex} col={colIndex} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}