import { ItemsFilter } from "../components/ItemsFilter";
import { ItemsTable } from "../components/ItemsTable";
import MainLayout from "../layouts/MainLayout";

// Mock items data
const itemsData = [
  {
    id: 1,
    name: "Gargoyle Ston...",
    icon: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=40&h=40&fit=crop",
    playRate: "4.22/8",
    place: "4.39",
    top4: "52.0%",
    win: "12.5%",
    topUsers: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    name: "Guinsoo's Rage...",
    icon: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=40&h=40&fit=crop",
    playRate: "4.06/8",
    place: "4.34",
    top4: "48.4%",
    win: "14.4%",
    topUsers: [6, 7, 8, 9, 10],
  },
  {
    id: 3,
    name: "Infinity Edge",
    icon: "https://images.unsplash.com/photo-1516486392112-8f2801b9e5a0?w=40&h=40&fit=crop",
    playRate: "3.92/8",
    place: "4.38",
    top4: "51.9%",
    win: "13.6%",
    topUsers: [11, 12, 13, 14, 15],
  },
  {
    id: 4,
    name: "Warmog's Arm...",
    icon: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=40&h=40&fit=crop",
    playRate: "3.53/8",
    place: "4.26",
    top4: "54.5%",
    win: "14.0%",
    topUsers: [16, 17, 18, 19, 20],
  },
  {
    id: 5,
    name: "Giant Slayer",
    icon: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=40&h=40&fit=crop",
    playRate: "3.33/8",
    place: "4.15",
    top4: "56.5%",
    win: "15.0%",
    topUsers: [21, 22, 23, 24, 25],
  },
  {
    id: 6,
    name: "Jeweled Gaunt...",
    icon: "https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=40&h=40&fit=crop",
    playRate: "3.14/8",
    place: "4.25",
    top4: "54.5%",
    win: "13.6%",
    topUsers: [26, 27, 28, 29, 30],
  },
  {
    id: 7,
    name: "Spirit Visage",
    icon: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=40&h=40&fit=crop",
    playRate: "2.92/8",
    place: "4.24",
    top4: "54.8%",
    win: "14.5%",
    topUsers: [31, 32, 33, 34, 35],
  },
  {
    id: 8,
    name: "Spear of Shojin",
    icon: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=40&h=40&fit=crop",
    playRate: "2.74/8",
    place: "4.22",
    top4: "55.3%",
    win: "13.8%",
    topUsers: [36, 37, 38, 39, 40],
  },
  {
    id: 9,
    name: "Thief's Gloves",
    icon: "https://images.unsplash.com/photo-1586992664447-59fcb1f6b86c?w=40&h=40&fit=crop",
    playRate: "2.44/8",
    place: "4.09",
    top4: "57.5%",
    win: "16.0%",
    topUsers: [41, 42, 43, 44, 45],
  },
  {
    id: 10,
    name: "Protector's Vow",
    icon: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?w=40&h=40&fit=crop",
    playRate: "2.42/8",
    place: "4.10",
    top4: "57.1%",
    win: "17.2%",
    topUsers: [46, 47, 48, 49, 50],
  },
  {
    id: 11,
    name: "Sunfire Cape",
    icon: "https://images.unsplash.com/photo-1557672199-6d6d7c0d3f3a?w=40&h=40&fit=crop",
    playRate: "2.35/8",
    place: "4.26",
    top4: "54.4%",
    win: "13.6%",
    topUsers: [51, 52, 53, 54, 55],
  },
];

export default function Items() {
  return (
    <MainLayout>
      <div className="flex-1 w-full max-w-[1024px] mx-auto px-4 py-8">
        <div className="rounded-lg overflow-hidden">
          <ItemsFilter />
          <ItemsTable items={itemsData} />
        </div>
      </div>
    </MainLayout>
  );
}
