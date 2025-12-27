import { ImageWithFallback } from './figma/ImageWithFallback';
import { useMetadata } from '../contexts/MetadataContext';
import { useDraggable } from '@dnd-kit/core';

interface Unit {
  id: string;
  name: string;
  cost: number;
  imageUrl: string;
}

interface UnitIconProps {
  unit: Unit;
  borderColor: string;
}

function UnitIcon({ unit, borderColor }: UnitIconProps) {
  return (
    <div
      className="relative w-14 h-14 rounded overflow-hidden cursor-pointer hover:scale-110 transition-transform shadow-md"
      style={{ 
        border: `3px solid ${borderColor}`,
        boxShadow: `0 0 8px ${borderColor}40`
      }}
    >
      <ImageWithFallback
        src={unit.imageUrl}
        alt={unit.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

interface DraggableUnitProps {
  unit: Unit;
  borderColor: string;
}

function DraggableUnit({ unit, borderColor }: DraggableUnitProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: unit.name,
    data: {
      fromBoard: false,
      unitName: unit.name,
    },
  });

  const style = {
    // transform is handled by DragOverlay, so we don't apply it here to avoid double image
    zIndex: isDragging ? 999 : undefined,
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <UnitIcon unit={unit} borderColor={borderColor} />
    </div>
  );
}

interface CostTierProps {
  cost: number;
  units: Unit[];
  borderColor: string;
  backgroundColor: string;
}

function CostTier({ cost, units, borderColor, backgroundColor }: CostTierProps) {
  return (
    <div className="w-full py-4 px-6 border-b border-black/10 last:border-b-0" style={{ backgroundColor }}>
      <div className="flex flex-wrap gap-3">
        {units.map((unit) => (
          <DraggableUnit key={unit.id} unit={unit} borderColor={borderColor} />
        ))}
      </div>
    </div>
  );
}

export function UnitList() {
  const { data: metadata, isLoading, error } = useMetadata();

  // Define colors for each tier
  const tierStyles = {
    1: { border: '#808080', bg: '#2a2f45' }, // Gray
    2: { border: '#4ade80', bg: '#103037' }, // Green
    3: { border: '#60a5fa', bg: '#1a2e4b' }, // Blue
    4: { border: '#a855f7', bg: '#2c1541' }, // Purple
    5: { border: '#fbbf24', bg: '#302d2e' }, // Gold
  };

  if (isLoading) {
    return (
      <div className="w-full bg-[#8b7d5f] rounded-lg overflow-hidden shadow-lg p-8 flex items-center justify-center">
        <p className="text-white text-lg">Loading units...</p>
      </div>
    );
  }

  if (error || !metadata) {
    return (
      <div className="w-full bg-[#8b7d5f] rounded-lg overflow-hidden shadow-lg p-8 flex items-center justify-center">
        <p className="text-red-300 text-lg">{error || 'Failed to load units'}</p>
      </div>
    );
  }

  // Group units by cost from metadata
  const unitsByCost = {
    1: metadata.units.filter(u => u.cost === 1),
    2: metadata.units.filter(u => u.cost === 2),
    3: metadata.units.filter(u => u.cost === 3),
    4: metadata.units.filter(u => u.cost === 4),
    5: metadata.units.filter(u => u.cost === 5),
  };

  return (
    <div className="w-full bg-[#8b7d5f] rounded-lg overflow-hidden shadow-lg">
      {Object.entries(unitsByCost).map(([cost, tierUnits]) => (
        <CostTier
          key={cost}
          cost={Number(cost)}
          units={tierUnits}
          borderColor={tierStyles[Number(cost) as keyof typeof tierStyles].border}
          backgroundColor={tierStyles[Number(cost) as keyof typeof tierStyles].bg}
        />
      ))}
    </div>
  );
}