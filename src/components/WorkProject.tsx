import React from "react";
import Asteroid from '../assets/images/Asteroid.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="work-projects">
        <h1>Work Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><img src={Asteroid} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><h2>Asteroids</h2></a>
                <p>Designed, developed, and launched a asteroid game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><img src={Asteroid} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><h2>Asteroids</h2></a>
                <p>Designed, developed, and launched a asteroid game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;