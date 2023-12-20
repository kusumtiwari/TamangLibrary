import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NoticesPage from "./pages/NoticesPage";
import ErrorPage from "./common/ErrorPage";

const RoutesFile: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
      <Route path="/about/*" element={<AboutPage />}></Route>
      <Route path="/notices" element={<NoticesPage />}></Route>
    </Routes>
  );
};
export default RoutesFile;
