import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Style/Home.css";

function Home() {
  return (
<div className="home">
      <div className="about">
        <h2> Hey, I am Melika Damirchi!</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/melikadamirchi" target={'_blank'}><LinkedInIcon /></a>
          <a href="#" target={'_blank'}><EmailIcon /></a>
          <a href="#" target={'_blank'}><GitHubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, JavaScript,
               BootStrap, MaterialUI, npm, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>My Near Future Learning</h2>
            <span>
            React Native, Flutter, Android, IOS 
            </span>
          </li>
          <li className="item">
            <h2>English</h2>
            <span>Upper Intermediate => Advance</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Home;