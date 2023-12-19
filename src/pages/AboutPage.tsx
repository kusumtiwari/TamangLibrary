import AboutIndex from "../components/Aboutpage/AboutIndex";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import OurTeamDetails from "../components/Aboutpage/OurTeamDetails";

const AboutPage : React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<AboutIndex />}></Route>
            <Route path=":itemName" element={<OurTeamDetails/>}></Route>
        </Routes>
    )
}
export default AboutPage;