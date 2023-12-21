import { Route, Routes } from "react-router-dom";
import ProjectIndex from "../components/projectpage/ProjectIndex";
import ProjectDetailsPage from "../components/projectpage/ProjectDetailsPage";

const AboutPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectIndex/>}></Route>
      <Route path=":itemName" element={<ProjectDetailsPage/>}></Route>
    </Routes>
  );
};
export default AboutPage;
