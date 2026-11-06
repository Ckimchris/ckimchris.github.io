import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ItchIcon from '@mui/icons-material/VideogameAsset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';


import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        {/* <div className="image-wrapper">
           <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" /> 
        </div>*/}
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ckimchris" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ckimchris/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://ckenshin.itch.io/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faItchIo} size="3x"/></a>
          </div>
          <h1>Chris Kim</h1>
          <p>Unity Engineer / Game Developer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/ckimchris" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ckimchris/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://ckenshin.itch.io/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faItchIo} size="3x"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;