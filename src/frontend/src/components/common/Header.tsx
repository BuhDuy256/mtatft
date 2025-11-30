import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StatsNavigation } from "../StatsNavigation";
import { MainNavigation } from "../MainNavigation";

export default function Header() {
  const [isStatsOpen, setIsStatsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const isStatsRoute =
    location.pathname === "/" ||
    location.pathname.startsWith("/units") ||
    location.pathname.startsWith("/items") ||
    location.pathname.startsWith("/traits");

  useEffect(() => {
    if (!isStatsRoute) {
      setIsStatsOpen(false);
    }
  }, [isStatsRoute]);

  const handleStatsClick = () => {
    if (!isStatsRoute) {
      navigate("/");
      setIsStatsOpen(true);
    } else {
      setIsStatsOpen(!isStatsOpen);
    }
  };

  return (
    <div className="w-full">
      <MainNavigation
        onStatsClick={handleStatsClick}
        isStatsOpen={isStatsOpen}
      />
      {isStatsRoute && isStatsOpen && <StatsNavigation />}
    </div>
  );
}
