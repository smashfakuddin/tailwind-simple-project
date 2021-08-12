import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hero from './components/Hero';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Content />
    </Router>
  );
}

export default App;
