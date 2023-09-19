import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './routes/HomePage';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import { ThemeContext } from './Context/ThemeContext';
import { useState } from 'react';
import Skills from './Components/Skiills/Skills';

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={dark}>
        <Navbar setDark={setDark} />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/projects' Component={Projects} />
          <Route path='/contact' Component={Contact} />
          <Route path='/skills' Component={Skills} />
          <Route path='/about' Component={About} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
