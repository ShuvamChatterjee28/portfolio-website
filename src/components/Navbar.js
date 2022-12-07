import React, {useEffect, useState} from 'react';
import '../styles/Navbar.css';
import {Link, useLocation} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

  const [expandedState, setExpandedState] = useState(false);

  const location = useLocation();

  useEffect(() => { setExpandedState(false) }, [location]);

  return (
    <div className='navbar' id = {expandedState ? "open" : "close"}>
        <div className = 'toggleButton'>
            <button onClick = {() => { setExpandedState((prev) => !prev) }}> <ReorderIcon/> </button>
        </div>
        <div className='links'>
            <Link to = "/">Home</Link>
            <Link to = "/experience">Experience</Link>
            <Link to = "/projects">Projects</Link>
            <Link to = "/research">Researches</Link>
        </div>
    </div>
  )
}

export default Navbar