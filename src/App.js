import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Experience from './pages/Experience';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProjectDisplay from './pages/ProjectDisplay';
import Research from './pages/Research';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/projects" element = {<Projects/>}/>
          <Route path = "/project/:id" element = {<ProjectDisplay/>} />
          <Route path = "/experience" element = {<Experience/>}/>
          <Route path = "/research" element = {<Research/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
