import React from 'react';
import '../styles/Home.css';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Typical from 'react-typical';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ffffff',
      contrastText: "#3e497a"
    }
  }
});

function Home() {
  const value = 200;
  const ProgressProvider = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = React.useState(valueStart);
    React.useEffect(() => {
      setValue(valueEnd);
    }, [valueEnd]);
  
    return children(value);
  };
  const navigateCV = () => {
    window.open('https://drive.google.com/file/d/1z7X_VzkSXB-pREs41zlEcFcjG3ABVh6G/view?usp=sharing');
  }
  const navigateLeetcode = () => {
    window.open('https://leetcode.com/Deb_Prakash_Chatterjee/');
  }
  const navigateGFG = () => {
    window.open('https://auth.geeksforgeeks.org/user/debprakashc/practice');
  }
  const navigateHr = () => {
    window.open('https://www.hackerrank.com/shuvamconcepts28');
  }

  return (
    <div className='home'>
      <div className = "about">
        <h2>Hello, This is Deb!</h2>
        <div>
          <p><Typical
          steps={['A Software Developer with a passion for learning and creating.', 6000, 'An Open Source Enthusiast with a passion for contributing to open source.', 6000, 'A Researcher with a passion for science and technology.', 6000]}
          loop={Infinity}
          wrapper="p"/></p>
          <ThemeProvider theme={theme}>
            <Button variant="contained" startIcon={<DownloadIcon />} onClick = {navigateCV}>Download CV</Button>
          </ThemeProvider>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Android
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB, NoSQL, AWS, Oracle
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Java, JavaScript, Python, C, C++, TypeScript, Groovy, shell</span>
          </li>
        </ol>
      </div>
      <div>
        <Grid container
              direction="column"
              alignItems="center"
              justify="center"
              >
          <Card sx={{ maxWidth: 345 }}>
            <div style={{ width: 200, height: 200 }} className = 'card'>
              <ProgressProvider valueStart={0} valueEnd={250}>
                {(value) => <CircularProgressbar value={value} text={`${value}+`}/>}
              </ProgressProvider>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DSA Problems Count
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Solved more than 250+ problems in the LeetCode, GeeksForGeeks and other websites like Hackerrank.
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick = {navigateLeetcode} size="small">LeetCode</Button>
              <Button onClick = {navigateGFG} size="small">GeeksForGeeks</Button>
              <Button onClick = {navigateHr} size="small">Hackerrank</Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    </div>
  )
}

export default Home