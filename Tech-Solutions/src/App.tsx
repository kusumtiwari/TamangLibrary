import React from 'react';
import Navbar from './components/common/Navbar';
import RoutesComponents from './components/RoutesComponents';

const App: React.FC = () => {
  return (
    <>
     <Navbar />
     <RoutesComponents />
    </>
  );
};

export default App;
