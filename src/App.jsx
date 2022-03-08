import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Interface from './Components/Interface';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
      <Route exact path="/" element={<Interface/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
