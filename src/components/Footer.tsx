import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ckimchris" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ckimchris/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://ckenshin.itch.io/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faItchIo} size="2x"/></a>
      </div>
    </footer>
  );
}

export default Footer;