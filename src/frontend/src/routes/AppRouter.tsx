import { Routes, Route } from "react-router-dom";
import TeamCompositions from "../pages/TeamCompositions";
import Units from "../pages/Units";
import Items from "../pages/Items";
import Traits from "../pages/Traits";
import Home from "../pages/Home";
import TeamBuilder from "../pages/TeamBuilder";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/team-builder" element={<TeamBuilder />}></Route>
      <Route path="/" element={<TeamCompositions />} />
      <Route path="/units" element={<Units />} />
      <Route path="/items" element={<Items />} />
      <Route path="/traits" element={<Traits />} />
    </Routes>
  );
};

export default AppRouter;
