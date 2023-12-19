import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NoticesPage from "./pages/NoticesPage";

const RoutesFile: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/notices" element={<NoticesPage />}></Route>
    </Routes>
  );
};
export default RoutesFile;
