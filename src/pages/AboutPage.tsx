import { Route, Routes } from "react-router-dom";
import AboutIndex from "../components/aboutpage/AboutIndex";
import OurTeamDetails from "../components/aboutpage/OurTeamDetails";

const AboutPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutIndex />}></Route>
      <Route path=":itemName" element={<OurTeamDetails />}></Route>
    </Routes>
  );
};
export default AboutPage;
