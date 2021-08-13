import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import { useEffect, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      };
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Hero />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
