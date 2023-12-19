import './App.css';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import RoutesFile from './RoutesFile';
import { UserProvider } from './context/Context';
function App() {
  return (
  <div className='font-kameron'>
    <UserProvider>
  <Navbar/>
  <RoutesFile/>
  <Footer/>
  </UserProvider>
    </div>
  )
}

export default App
