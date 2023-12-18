import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

const RoutesFile: React.FC = () => {
    return(
        <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
      </Routes>
    )
}
export default RoutesFile;