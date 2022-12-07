import React from 'react'
import { useParams } from 'react-router-dom'
import Projects from '../helper/ProjectList';
import GitHub from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {

  const { id } = useParams();
  const project = Projects[id];
  const navigateGithub = () => {
    window.open('https://github.com/ShuvamChatterjee28/'+project.gitid);
  }

  return (
    <div className='project'>
        <h1> {project.name} </h1>
        <img src = {project.image} style={{ width: 600, height: 300 }}/>
        <p>
            <em>Skills:</em> {project.skills}
        </p>
        <GitHub style={{cursor: 'pointer'}} onClick={navigateGithub}/>
    </div>
  )
}

export default ProjectDisplay