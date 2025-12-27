import { useDroppable, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface HexSlotProps {
  row: number;
  col: number;
  unitName?: string | null;
  unitImageUrl?: string | null;
}

// Draggable unit on the board
interface DraggableHexUnitProps {
  unitName: string;
  unitImageUrl: string;
  slotId: string;
}

function DraggableHexUnit({ unitName, unitImageUrl, slotId }: DraggableHexUnitProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `board-${slotId}`,
    data: {
      fromBoard: true,
      slotId: slotId,
      unitName: unitName,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 999 : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="absolute inset-0 cursor-move"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <clipPath id={`hex-clip-${slotId}`}>
            <polygon points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5" />
          </clipPath>
        </defs>
        <image
          href={unitImageUrl}
          x="0"
          y="0"
          width="100"
          height="100"
          clipPath={`url(#hex-clip-${slotId})`}
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
}

function HexSlot({ row, col, unitName, unitImageUrl }: HexSlotProps) {
  const slotId = `slot-${row}-${col}`;
  const { isOver, setNodeRef } = useDroppable({
    id: slotId,
  });

  // Determine fill color based on state
  const fillColor = isOver ? '#5a4f3a' : '#3d3526';

  return (
    <div
      ref={setNodeRef}
      className="relative w-full aspect-[1.15/1] flex items-center justify-center group cursor-pointer"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Hexagon shape */}
        <polygon
          points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5"
          fill={fillColor}
          stroke="#6b5d3f"
          strokeWidth="2.5"
          className="transition-colors"
        />
      </svg>
      {/* Show draggable unit if slot is occupied */}
      {unitName && unitImageUrl && <DraggableHexUnit unitName={unitName} unitImageUrl={unitImageUrl} slotId={slotId} />}
    </div>
  );
}

interface HexagonalBoardProps {
  boardState: Record<string, string | null>;
  unitImageUrlMap: Record<string, string>;
}

export function HexagonalBoard({ boardState, unitImageUrlMap }: HexagonalBoardProps) {
  // 4 rows x 7 columns
  const rows = 4;
  const cols = 7;

  return (
    <div className="w-full bg-gradient-to-b from-[#a89560] via-[#9d8a55] to-[#8b7d4f] p-8 rounded-lg shadow-xl">
      <div className="max-w-[700px] mx-auto">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          // Odd rows (index 1 and 3) are offset
          const isOffsetRow = rowIndex % 2 === 1;
          // Calculate z-index: higher rows should be on top
          const zIndex = rows - rowIndex;
          
          return (
            <div
              key={rowIndex}
              className="flex justify-center items-center gap-1"
              style={{
                transform: isOffsetRow ? 'translateX(7%)' : 'none',
                marginTop: rowIndex === 0 ? '0' : '-2%',
                zIndex: zIndex,
                position: 'relative'
              }}
            >
              {Array.from({ length: cols }).map((_, colIndex) => {
                const slotId = `slot-${rowIndex}-${colIndex}`;
                const unitName = boardState[slotId];
                const unitImageUrl = unitName ? unitImageUrlMap[unitName] : null;
                
                return (
                  <div key={`${rowIndex}-${colIndex}`} className="w-[13%] shrink-0">
                    <HexSlot row={rowIndex} col={colIndex} unitName={unitName} unitImageUrl={unitImageUrl} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}