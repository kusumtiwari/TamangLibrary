import { Route, Routes } from "react-router-dom";
import ProjectIndex from "../components/projectpage/ProjectIndex";
import CompletedProjectDetailsPage from "../components/projectpage/CompletedProjectDetailsPage";
import OnGoingProjectDetails from "../components/projectpage/OnGoingProjectDetails";
import UpcomingProjectDetailsPage from "../components/projectpage/UpcomingProjectDetailsPage";
const AboutPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectIndex />}></Route>
      <Route
        path="/completed-projects/:itemName"
        element={<CompletedProjectDetailsPage />}
      ></Route>
      <Route
        path="/ongoing-projects/:itemName"
        element={<OnGoingProjectDetails />}
      ></Route>
      <Route
        path="/upcoming-projects/:itemName"
        element={<UpcomingProjectDetailsPage />}
      ></Route>
    </Routes>
  );
};
export default AboutPage;
