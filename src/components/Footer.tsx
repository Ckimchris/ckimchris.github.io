import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ItchIcon from '@mui/icons-material/House';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ckimchris" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ckimchris/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://ckenshin.itch.io/" target="_blank" rel="noreferrer"><ItchIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;