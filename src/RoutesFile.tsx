import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NoticesPage from "./pages/NoticesPage";
import ErrorPage from "./common/ErrorPage";
import EventPage from "./pages/EventPage";
import ProjectPage from "./pages/ProjectPage";
import PublicationPage from "./pages/PublicationPage";
import ContactPage from "./pages/ContactPage";
const RoutesFile: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
      <Route path="/about/*" element={<AboutPage />}></Route>
      <Route path="/notices" element={<NoticesPage />}></Route>
      <Route path="/projects/*" element={<ProjectPage />}></Route>
      <Route path="/publications" element={<PublicationPage />}></Route>
      <Route path="/events/*" element={<EventPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
};
export default RoutesFile;
