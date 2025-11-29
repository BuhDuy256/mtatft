import { Routes, Route } from "react-router-dom";
import TeamCompositions from "../pages/TeamCompositions";
import Units from "../pages/Units";
import Items from "../pages/Items";
import Traits from "../pages/Traits";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamCompositions />} />
      <Route path="/units" element={<Units />} />
      <Route path="/items" element={<Items />} />
      <Route path="/traits" element={<Traits />} />
    </Routes>
  );
};

export default AppRouter;
