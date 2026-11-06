import React from "react";
import Asteroid from '../assets/images/Asteroid.png';
import Space from '../assets/images/Space.png';
import Haniwa from '../assets/images/Haniwa.png';
import Chirei from '../assets/images/Chirei.png';
import yukarisnow from '../assets/images/yukarisnow.png';
import rend from '../assets/images/rend.png';
import PP from '../assets/images/P&P.png';
import Demon from '../assets/images/Demon.png';
import Magician from '../assets/images/Magician.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://ckenshin.itch.io/the-magician-i-am" target="_blank" rel="noreferrer"><img src={Magician} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/the-magician-i-am" target="_blank" rel="noreferrer"><h2>The Magician I Am</h2></a>
                <p>Visual Novel utilizing Unity, C#, and Danmokou</p>
            </div>
            <div className="project">
                <a href="https://bagoum.itch.io/kaimaroku" target="_blank" rel="noreferrer"><img src={Demon} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://bagoum.itch.io/kaimaroku" target="_blank" rel="noreferrer"><h2>Touhou Kaimaroku</h2></a>
                <p>Collaboration for a game jam. A 2D bullet hell shooter utilizing Unity available on browser</p>
            </div>
            <div className="project">
                <a href="https://ckenshin.itch.io/primal-and-phantasmal" target="_blank" rel="noreferrer"><img src={PP} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/primal-and-phantasmal" target="_blank" rel="noreferrer"><h2>Primal and Phantasmal</h2></a>
                <p>Lead a team to submit for a game jam submission. 2D bullet hell shooter utilizing Unity</p>
            </div>
            <div className="project">
                <a href="https://ckenshin.itch.io/lightning-blade-vs-master-spark" target="_blank" rel="noreferrer"><img src={rend} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/lightning-blade-vs-master-spark" target="_blank" rel="noreferrer"><h2>Lightning Blade vs Master Spark</h2></a>
                <p>2D bullet hell shooter utilizing Unity</p>
            </div>
            <div className="project">
                <a href="https://ckenshin.itch.io/yukaris-wondrous-icy-patterns" target="_blank" rel="noreferrer"><img src={yukarisnow} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/yukaris-wondrous-icy-patterns" target="_blank" rel="noreferrer"><h2>Yukari's Wondrous Icy Patterns</h2></a>
                <p>2D bullet hell shooter utilizing Unity</p>
            </div>
            <div className="project">
                <a href="https://dx5536.itch.io/love-in-chireiden" target="_blank" rel="noreferrer"><img src={Chirei} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dx5536.itch.io/love-in-chireiden" target="_blank" rel="noreferrer"><h2>Love in Chireiden</h2></a>
                <p>Decision Tree visual novel game submitted for a jam competition. Utilizes Unity and Yarn Spinner.</p>
            </div>
            <div className="project">
                <a href="https://dx5536.itch.io/do-haniwa-dream-of-ceramic-sheep" target="_blank" rel="noreferrer"><img src={Haniwa} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dx5536.itch.io/do-haniwa-dream-of-ceramic-sheep" target="_blank" rel="noreferrer"><h2>Do Haniwa Dream of Ceramic Sheep</h2></a>
                <p>Game submitted for a jam in collaboration. Utilizes Unity and C# to create a </p>
            </div>
            <div className="project">
                <a href="https://ckenshin.itch.io/space-flighter" target="_blank" rel="noreferrer"><img src={Space} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/space-flighter" target="_blank" rel="noreferrer"><h2>Space Flighter</h2></a>
                <p>A space flight simulation game. Fly freely through space or take on a CPU controlled plane!</p>
            </div>
            <div className="project">
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><img src={Asteroid} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ckenshin.itch.io/asteroids" target="_blank" rel="noreferrer"><h2>Asteroids</h2></a>
                <p>Designed an asteroid game with C# and Unity. Available for play directly on browser!</p>
            </div>
        </div>
    </div>
    );
}

export default Project;