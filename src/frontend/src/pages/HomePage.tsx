import { FilterSection } from "../components/FilterSection";
import { TeamCompCard } from "../components/TeamCompCard";
import MainLayout from "../layouts/MainLayout";

// Mock data for team compositions
const teamComps = [
  {
    id: 1,
    name: "Prodigy Malzahar & Rumble",
    tier: "S",
    coreChampions: [
      {
        id: 1,
        name: "Rumble",
        stars: 3,
        items: [1, 2, 3],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 2,
        name: "Malzahar",
        stars: 2,
        items: [4, 5],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 3,
        name: "Vex",
        stars: 2,
        items: [],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 4,
        name: "Nasus",
        stars: 2,
        items: [6],
        borderColor: "rgba(222,14,189,0.88)",
      },
    ],
    flexChampions: [
      {
        id: 5,
        name: "Neeko",
        stars: 2,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 6,
        name: "Mordekaiser",
        stars: 2,
        items: [],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 7,
        name: "Karma",
        stars: 2,
        items: [],
        borderColor: "rgba(222,14,189,0.88)",
      },
      {
        id: 8,
        name: "Lux",
        stars: 1,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
    ],
    stats: {
      playRate: "5.5",
      avgPlace: "3.95",
      top4: "56.1",
      winRate: "27.0",
    },
  },
  {
    id: 2,
    name: "Blaster Zeri + Leona & Illaoi",
    tier: "S",
    coreChampions: [
      {
        id: 9,
        name: "Zeri",
        stars: 3,
        items: [1, 2, 3],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 10,
        name: "Leona",
        stars: 2,
        items: [4],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 11,
        name: "Illaoi",
        stars: 2,
        items: [5, 6],
        borderColor: "rgba(222,14,189,0.88)",
      },
      {
        id: 12,
        name: "Mordekaiser",
        stars: 2,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
    ],
    flexChampions: [
      {
        id: 13,
        name: "Tristana",
        stars: 2,
        items: [],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 14,
        name: "Rumble",
        stars: 2,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 15,
        name: "Nasus",
        stars: 2,
        items: [],
        borderColor: "rgba(222,14,189,0.88)",
      },
      {
        id: 16,
        name: "Soraka",
        stars: 1,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
    ],
    stats: {
      playRate: "6.2",
      avgPlace: "3.92",
      top4: "57.0",
      winRate: "29.5",
    },
  },
  {
    id: 3,
    name: "Fast Fighter Samira & Sett",
    tier: "A",
    coreChampions: [
      {
        id: 17,
        name: "Samira",
        stars: 3,
        items: [1, 2, 3],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 18,
        name: "Sett",
        stars: 2,
        items: [4, 5],
        borderColor: "rgba(222,14,189,0.88)",
      },
      {
        id: 19,
        name: "Vi",
        stars: 2,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 20,
        name: "Warwick",
        stars: 2,
        items: [6],
        borderColor: "rgba(84,195,255,0.88)",
      },
    ],
    flexChampions: [
      {
        id: 21,
        name: "Tristana",
        stars: 2,
        items: [],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 22,
        name: "Vex",
        stars: 2,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 23,
        name: "Darius",
        stars: 2,
        items: [],
        borderColor: "rgba(222,14,189,0.88)",
      },
      {
        id: 24,
        name: "Blitzcrank",
        stars: 1,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
    ],
    stats: {
      playRate: "4.8",
      avgPlace: "4.07",
      top4: "53.8",
      winRate: "24.2",
    },
  },
  {
    id: 4,
    name: "Judgement Twisted Fate & Swain",
    tier: "A",
    coreChampions: [
      {
        id: 25,
        name: "Twisted Fate",
        stars: 3,
        items: [1, 2, 3],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 26,
        name: "Swain",
        stars: 2,
        items: [4, 5],
        borderColor: "rgba(222,14,189,0.88)",
      },
      {
        id: 27,
        name: "Cassiopeia",
        stars: 2,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 28,
        name: "Silco",
        stars: 2,
        items: [6],
        borderColor: "rgba(84,195,255,0.88)",
      },
    ],
    flexChampions: [
      {
        id: 29,
        name: "Morgana",
        stars: 2,
        items: [],
        borderColor: "rgba(222,14,189,0.88)",
      },
      {
        id: 30,
        name: "Vladimir",
        stars: 2,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 31,
        name: "Zyra",
        stars: 2,
        items: [],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 32,
        name: "Nunu",
        stars: 1,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
    ],
    stats: {
      playRate: "3.9",
      avgPlace: "4.13",
      top4: "51.2",
      winRate: "22.8",
    },
  },
  {
    id: 5,
    name: "Blaster Academia Katarina & Silco",
    tier: "A",
    coreChampions: [
      {
        id: 33,
        name: "Katarina",
        stars: 3,
        items: [1, 2, 3],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 34,
        name: "Silco",
        stars: 2,
        items: [4],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 35,
        name: "Tristana",
        stars: 2,
        items: [5, 6],
        borderColor: "rgba(222,14,189,0.88)",
      },
      {
        id: 36,
        name: "Leona",
        stars: 2,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
    ],
    flexChampions: [
      {
        id: 37,
        name: "Rumble",
        stars: 2,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
      {
        id: 38,
        name: "Vex",
        stars: 2,
        items: [],
        borderColor: "rgba(255,196,48,0.88)",
      },
      {
        id: 39,
        name: "Darius",
        stars: 2,
        items: [],
        borderColor: "rgba(222,14,189,0.88)",
      },
      {
        id: 40,
        name: "Lux",
        stars: 1,
        items: [],
        borderColor: "rgba(84,195,255,0.88)",
      },
    ],
    stats: {
      playRate: "5.7",
      avgPlace: "4.06",
      top4: "52.9",
      winRate: "25.1",
    },
  },
];

export default function App() {
  return (
    <MainLayout>
      <main className="main-content flex-1 w-full max-w-[1200px] mx-auto px-4 py-8">
        <FilterSection />

        <div className="mt-6 flex flex-col items-center gap-4">
          {teamComps.map((comp) => (
            <TeamCompCard key={comp.id} comp={comp} />
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
