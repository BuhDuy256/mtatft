import { ImageWithFallback } from './figma/ImageWithFallback';

interface Unit {
  id: string;
  name: string;
  cost: number;
  imageUrl: string;
}

// Mock unit data - 5 tiers based on cost
const units: Unit[] = [
  // 1-cost units (Gray)
  { id: '1-1', name: 'Champion 1', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '1-2', name: 'Champion 2', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '1-3', name: 'Champion 3', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '1-4', name: 'Champion 4', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '1-5', name: 'Champion 5', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '1-6', name: 'Champion 6', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '1-7', name: 'Champion 7', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '1-8', name: 'Champion 8', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '1-9', name: 'Champion 9', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '1-10', name: 'Champion 10', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '1-11', name: 'Champion 11', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '1-12', name: 'Champion 12', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '1-13', name: 'Champion 13', cost: 1, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  
  // 2-cost units (Green)
  { id: '2-1', name: 'Champion 14', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '2-2', name: 'Champion 15', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '2-3', name: 'Champion 16', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '2-4', name: 'Champion 17', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '2-5', name: 'Champion 18', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '2-6', name: 'Champion 19', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '2-7', name: 'Champion 20', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '2-8', name: 'Champion 21', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '2-9', name: 'Champion 22', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '2-10', name: 'Champion 23', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '2-11', name: 'Champion 24', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '2-12', name: 'Champion 25', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '2-13', name: 'Champion 26', cost: 2, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  
  // 3-cost units (Blue)
  { id: '3-1', name: 'Champion 27', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '3-2', name: 'Champion 28', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '3-3', name: 'Champion 29', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '3-4', name: 'Champion 30', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '3-5', name: 'Champion 31', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '3-6', name: 'Champion 32', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '3-7', name: 'Champion 33', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '3-8', name: 'Champion 34', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '3-9', name: 'Champion 35', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '3-10', name: 'Champion 36', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '3-11', name: 'Champion 37', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '3-12', name: 'Champion 38', cost: 3, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  
  // 4-cost units (Purple)
  { id: '4-1', name: 'Champion 39', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '4-2', name: 'Champion 40', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '4-3', name: 'Champion 41', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '4-4', name: 'Champion 42', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '4-5', name: 'Champion 43', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '4-6', name: 'Champion 44', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '4-7', name: 'Champion 45', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '4-8', name: 'Champion 46', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '4-9', name: 'Champion 47', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '4-10', name: 'Champion 48', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '4-11', name: 'Champion 49', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '4-12', name: 'Champion 50', cost: 4, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  
  // 5-cost units (Gold)
  { id: '5-1', name: 'Champion 51', cost: 5, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '5-2', name: 'Champion 52', cost: 5, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '5-3', name: 'Champion 53', cost: 5, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '5-4', name: 'Champion 54', cost: 5, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '5-5', name: 'Champion 55', cost: 5, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
  { id: '5-6', name: 'Champion 56', cost: 5, imageUrl: 'https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?w=100' },
  { id: '5-7', name: 'Champion 57', cost: 5, imageUrl: 'https://images.unsplash.com/photo-1733004441794-268d0e8f0b12?w=100' },
  { id: '5-8', name: 'Champion 58', cost: 5, imageUrl: 'https://images.unsplash.com/photo-1718057948468-7f4e421be52e?w=100' },
];

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
          <UnitIcon key={unit.id} unit={unit} borderColor={borderColor} />
        ))}
      </div>
    </div>
  );
}

export function UnitList() {
  // Group units by cost
  const unitsByCost = {
    1: units.filter(u => u.cost === 1),
    2: units.filter(u => u.cost === 2),
    3: units.filter(u => u.cost === 3),
    4: units.filter(u => u.cost === 4),
    5: units.filter(u => u.cost === 5),
  };

  // Define colors for each tier
  const tierStyles = {
    1: { border: '#808080', bg: '#6b7158' }, // Gray
    2: { border: '#4ade80', bg: '#6b7158' }, // Green
    3: { border: '#60a5fa', bg: '#6b7158' }, // Blue
    4: { border: '#a855f7', bg: '#7d6b65' }, // Purple
    5: { border: '#fbbf24', bg: '#9d8865' }, // Gold
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