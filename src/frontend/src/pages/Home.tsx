import { Link } from "react-router-dom";
import { ChevronRight, Database, LayoutGrid, TrendingUp } from "lucide-react";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col min-h-[calc(100vh-120px)] w-full max-w-[1200px] mx-auto px-4 py-16 justify-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8 mb-20 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-['Montserrat',sans-serif] tracking-tight">
              <span className="text-white">
                MtaTFT
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Your ultimate companion for Teamfight Tactics. Build superior compositions, analyze meta trends, and dominate your ranked games.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              to="/team-builder"
              className="px-5 py-3 bg-[#858585] hover:bg-[#707070] !text-white rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Build Team <ChevronRight size={20} />
            </Link>
            <Link 
              to="/"
              className="px-5 py-3 bg-[#858585] hover:bg-[#707070] !text-white rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              View Meta Stats
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        {/* <div className="grid md:grid-cols-3 gap-6 w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <FeatureCard 
            icon={<LayoutGrid className="text-blue-400" size={32} />}
            title="Team Builder"
            description="Drag and drop champions, items, and traits to craft the perfect winning theory. Export and share your creations."
            link="/team-builder"
          />
          <FeatureCard 
            icon={<TrendingUp className="text-purple-400" size={32} />}
            title="Meta Statistics"
            description="Real-time data on top performing compositions. Track play rates, win rates, and placement stats."
            link="/"
          />
          <FeatureCard 
            icon={<Database className="text-pink-400" size={32} />}
            title="Game Database"
            description="Comprehensive library of all champions, their traits, costs, and recommended items."
            link="/units"
          />
        </div> */}
      </div>
    </MainLayout>
  );
}

// function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
//   return (
//     <Link to={link} className="group h-full">
//       <div className="h-full bg-[#2a2d3a] border border-[#555555] hover:border-slate-400 rounded-xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col items-start text-left">
//         <div className="mb-6 p-4 bg-[#1e232e] rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
//           {icon}
//         </div>
//         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
//         <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
//       </div>
//     </Link>
//   );
// }
