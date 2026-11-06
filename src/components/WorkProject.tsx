import React from "react";
import ButterflyGaze from '../assets/images/ButterflyGaze.gif';
import TreeOfLife from '../assets/images/TreeOfLife.gif';
import Tripp from '../assets/images/Tripp.webp';
import Holos from '../assets/images/Holos.webp';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="work-projects">
        <h1>Work Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><img src={Holos} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><h2>Asteroids</h2></a>
                <p>Designed, developed, and launched a asteroid game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><img src={Tripp} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><h2>Asteroids</h2></a>
                <p>Designed, developed, and launched a asteroid game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><img src={TreeOfLife} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><h2>Asteroids</h2></a>
                <p>Designed, developed, and launched a asteroid game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><img src={ButterflyGaze} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><h2>Asteroids</h2></a>
                <p>Designed, developed, and launched a asteroid game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;