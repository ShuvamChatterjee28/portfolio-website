import React from 'react';
import '../styles/Footer.css';
import GitHub from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const navigateGithub = () => {
    window.open('https://github.com/ShuvamChatterjee28');
  }
  const navigateLinkedIn = () => {
    window.open('https://www.linkedin.com/in/deb-prakash-chatterjee-3a3698170/');
  }
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <GitHub onClick={navigateGithub}/>
            <LinkedInIcon onClick={navigateLinkedIn}/>
            <EmailIcon onClick={(e) => {
                window.location.href = 'mailto:shuvamconcepts28@gmail.com';
                e.preventDefault();
            }}/>
        </div>
        <p> &copy; 2022-2023 by Deb Prakash Chatterjee</p>
    </div>
  )
}

export default Footer