import { UnitCard } from "./UnitCard";

interface Unit {
  id: string | number;
  name: string;
  avgPlace: number;
  playRate: number;
  imageUrl?: string;
}

interface TierSectionProps {
  tier: {
    tier: number;
    name: string;
    backgroundColor: string;
    units: Unit[];
  };
}

export function TierSection({ tier }: TierSectionProps) {
  return (
    <div
      className="rounded-lg p-6"
      style={{ backgroundColor: tier.backgroundColor }}
    >
      {/* <h2 className="text-white text-xl mb-4">{tier.name}</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {tier.units.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}
