import './App.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar';
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <div className='font-kameron'>
  <Navbar/>
  <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
  </Routes>
    </div>
  )
}

export default App
