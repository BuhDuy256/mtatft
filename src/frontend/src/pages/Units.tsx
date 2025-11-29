import { TierSection } from "../components/TierSection";
import MainLayout from "../layouts/MainLayout";

// Mock unit data for each tier
const tierData = [
  {
    tier: 1,
    name: "Tier 1",
    backgroundColor: "#8B7355",
    units: [
      { id: 1, name: "Ashlynn", avgPlace: 1.91, playRate: 4.0 },
      { id: 2, name: "Ezreal", avgPlace: 2.81, playRate: 5.6 },
      { id: 3, name: "Sorren", avgPlace: 1.99, playRate: 4.8 },
      { id: 4, name: "Driar", avgPlace: 1.43, playRate: 6.1 },
      { id: 5, name: "Kalissa", avgPlace: 1.83, playRate: 4.8 },
      { id: 6, name: "Kayle", avgPlace: 0.91, playRate: 5.5 },
      { id: 7, name: "Nomura", avgPlace: 1.72, playRate: 6.2 },
      { id: 8, name: "Lucian", avgPlace: 1.99, playRate: 5.8 },
      { id: 9, name: "Mela", avgPlace: 2.43, playRate: 3.4 },
      { id: 10, name: "Noctun", avgPlace: 0.61, playRate: 4.9 },
      { id: 11, name: "Veli", avgPlace: 0.49, playRate: 7.1 },
      { id: 12, name: "Sivir", avgPlace: 0.91, playRate: 6.4 },
      { id: 13, name: "Syndra", avgPlace: 0.76, playRate: 5.3 },
      { id: 14, name: "Zirc", avgPlace: 1.11, playRate: 4.4 },
    ],
  },
  {
    tier: 2,
    name: "Tier 2",
    backgroundColor: "#B8D4A8",
    units: [
      { id: 15, name: "Akshan", avgPlace: 1.54, playRate: 5.7 },
      { id: 16, name: "Blitzcrank", avgPlace: 0.54, playRate: 6.8 },
      { id: 17, name: "Janna", avgPlace: 1.02, playRate: 5.9 },
      { id: 18, name: "Kassadin", avgPlace: 1.65, playRate: 4.2 },
      { id: 19, name: "Kog Maw", avgPlace: 1.98, playRate: 6.0 },
      { id: 20, name: "Katier", avgPlace: 2.14, playRate: 3.8 },
      { id: 21, name: "Lissandra", avgPlace: 1.76, playRate: 5.4 },
      { id: 22, name: "Nidalee", avgPlace: 2.33, playRate: 4.6 },
      { id: 23, name: "Singed", avgPlace: 1.54, playRate: 5.1 },
      { id: 24, name: "Sejuani", avgPlace: 0.87, playRate: 6.3 },
      { id: 25, name: "Tristana", avgPlace: 1.21, playRate: 7.2 },
      { id: 26, name: "Urgot", avgPlace: 1.43, playRate: 5.5 },
      { id: 27, name: "Zyra", avgPlace: 2.01, playRate: 4.9 },
      { id: 28, name: "Vex", avgPlace: 0.76, playRate: 6.1 },
    ],
  },
  {
    tier: 3,
    name: "Tier 3",
    backgroundColor: "#A8D8E8",
    units: [
      { id: 29, name: "Akali", avgPlace: 1.87, playRate: 5.2 },
      { id: 30, name: "Darius", avgPlace: 2.12, playRate: 4.8 },
      { id: 31, name: "Garen", avgPlace: 1.65, playRate: 6.4 },
      { id: 32, name: "Neeko", avgPlace: 0.98, playRate: 7.1 },
      { id: 33, name: "Karma", avgPlace: 1.43, playRate: 5.9 },
      { id: 34, name: "Corki", avgPlace: 2.34, playRate: 4.3 },
      { id: 35, name: "Ekko", avgPlace: 1.54, playRate: 6.2 },
      { id: 36, name: "Jinx", avgPlace: 0.87, playRate: 7.5 },
      { id: 37, name: "Mordekaiser", avgPlace: 1.76, playRate: 5.6 },
      { id: 38, name: "Nasus", avgPlace: 2.01, playRate: 4.9 },
      { id: 39, name: "Rumble", avgPlace: 1.32, playRate: 6.8 },
      { id: 40, name: "Shen", avgPlace: 1.98, playRate: 5.3 },
      { id: 41, name: "Swain", avgPlace: 2.23, playRate: 4.5 },
      { id: 42, name: "Veigar", avgPlace: 1.54, playRate: 6.0 },
      { id: 43, name: "Vi", avgPlace: 1.21, playRate: 6.7 },
    ],
  },
  {
    tier: 4,
    name: "Tier 4",
    backgroundColor: "#E8B4D4",
    units: [
      { id: 44, name: "Ahri", avgPlace: 1.65, playRate: 6.2 },
      { id: 45, name: "Camille", avgPlace: 2.01, playRate: 5.4 },
      { id: 46, name: "Draven", avgPlace: 1.87, playRate: 5.8 },
      { id: 47, name: "Fiora", avgPlace: 1.43, playRate: 6.5 },
      { id: 48, name: "Irelia", avgPlace: 0.98, playRate: 7.3 },
      { id: 49, name: "Renata", avgPlace: 2.34, playRate: 4.7 },
      { id: 50, name: "Leona", avgPlace: 1.54, playRate: 6.1 },
      { id: 51, name: "Nami", avgPlace: 1.76, playRate: 5.5 },
      { id: 52, name: "Sett", avgPlace: 1.21, playRate: 6.9 },
      { id: 53, name: "Silco", avgPlace: 2.12, playRate: 5.0 },
      { id: 54, name: "Talon", avgPlace: 1.87, playRate: 5.7 },
      { id: 55, name: "Zeri", avgPlace: 0.87, playRate: 7.6 },
      { id: 56, name: "Zoe", avgPlace: 1.98, playRate: 5.3 },
    ],
  },
  {
    tier: 5,
    name: "Tier 5",
    backgroundColor: "#E8C47A",
    units: [
      { id: 57, name: "Caitlyn", avgPlace: 1.32, playRate: 6.8 },
      { id: 58, name: "Heimerdinger", avgPlace: 2.01, playRate: 5.2 },
      { id: 59, name: "Jayce", avgPlace: 1.65, playRate: 6.4 },
      { id: 60, name: "Jinx", avgPlace: 0.98, playRate: 7.5 },
      { id: 61, name: "Lux", avgPlace: 1.87, playRate: 5.9 },
      { id: 62, name: "Malzahar", avgPlace: 1.43, playRate: 6.6 },
      { id: 63, name: "Warwick", avgPlace: 2.12, playRate: 5.1 },
      { id: 64, name: "Viktor", avgPlace: 1.76, playRate: 5.8 },
    ],
  },
];

export default function Units() {
  return (
    <MainLayout>
      <main className="flex-1 w-full max-w-[1000px] mx-auto px-4 py-8">
        <div className="space-y-6">
          {tierData.map((tier) => (
            <TierSection key={tier.tier} tier={tier} />
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
