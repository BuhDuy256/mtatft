import { useDroppable, useDraggable } from '@dnd-kit/core';

interface HexSlotProps {
  row: number;
  col: number;
  unitName?: string | null;
  unitImageUrl?: string | null;
  unitCost?: number | null;
}

// Draggable unit on the board
interface DraggableHexUnitProps {
  unitName: string;
  unitImageUrl: string;
  unitCost: number;
  slotId: string;
}

function DraggableHexUnit({ unitName, unitImageUrl, unitCost, slotId }: DraggableHexUnitProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `board-${slotId}`,
    data: {
      fromBoard: true,
      slotId: slotId,
      unitName: unitName,
    },
  });

  const style = {
    // transform is handled by DragOverlay, so we don't apply it here to avoid double image
    zIndex: isDragging ? 999 : 10,
    opacity: isDragging ? 0 : 1,
  };

  // Get border color based on unit cost
  const tierColors: Record<number, string> = {
    1: '#808080', // Gray
    2: '#4ade80', // Green
    3: '#60a5fa', // Blue
    4: '#a855f7', // Purple
    5: '#fbbf24', // Gold
  };
  const borderColor = tierColors[unitCost] || '#6b5d3f';

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
        {/* Champion image clipped to hexagon */}
        <image
          href={unitImageUrl}
          x="0"
          y="0"
          width="100"
          height="100"
          clipPath={`url(#hex-clip-${slotId})`}
          preserveAspectRatio="xMidYMid slice"
        />
        {/* Hexagon border with cost color */}
        <polygon
          points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5"
          fill="none"
          stroke={borderColor}
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

function HexSlot({ row, col, unitName, unitImageUrl, unitCost }: HexSlotProps) {
  const slotId = `slot-${row}-${col}`;
  const { isOver, setNodeRef } = useDroppable({
    id: slotId,
  });

  // Determine fill color (always black) and border (lights up when over)
  const fillColor = '#000000';
  const strokeColor = isOver ? '#f4f0f0ff' : 'transparent';

  return (
    <div
      ref={setNodeRef}
      className="relative w-full aspect-[1.15/1] flex items-center justify-center group cursor-pointer"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 z-0">
        {/* Hexagon shape */}
        <polygon
          points="50,5 93.3,27.5 93.3,72.5 50,95 6.7,72.5 6.7,27.5"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="2.5"
          className="transition-colors"
        />
      </svg>
      {/* Show draggable unit if slot is occupied */}
      {unitName && unitImageUrl && unitCost && <DraggableHexUnit unitName={unitName} unitImageUrl={unitImageUrl} unitCost={unitCost} slotId={slotId} />}
    </div>
  );
}

interface HexagonalBoardProps {
  boardState: Record<string, string | null>;
  unitImageUrlMap: Record<string, string>;
  unitCostMap: Record<string, number>;
}

export function HexagonalBoard({ boardState, unitImageUrlMap, unitCostMap }: HexagonalBoardProps) {
  // 4 rows x 7 columns
  const rows = 4;
  const cols = 7;

  return (
    <div className="w-full bg-[#555555] p-8 rounded-lg shadow-xl">
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
                const unitCost = unitName ? unitCostMap[unitName] : null;
                
                return (
                  <div key={`${rowIndex}-${colIndex}`} className="w-[13%] shrink-0">
                    <HexSlot row={rowIndex} col={colIndex} unitName={unitName} unitImageUrl={unitImageUrl} unitCost={unitCost} />
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