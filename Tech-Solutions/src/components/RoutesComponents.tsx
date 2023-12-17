import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const RoutesComponents : React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}>
            </Route>
        </Routes>
    )
}
export default RoutesComponents;