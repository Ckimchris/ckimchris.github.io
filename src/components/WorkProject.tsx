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
                <a href="https://apps.apple.com/us/app/holos-learn-in-3d/id6747681580" target="_blank" rel="noreferrer"><img src={Holos} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://apps.apple.com/us/app/holos-learn-in-3d/id6747681580" target="_blank" rel="noreferrer"><h2>Holos: Learn in 3D</h2></a>
                <p>Developed, designed, and built the 3D mixed reality learning tool and experience Learn in 3D for the Apple Vision Pro</p>
            </div>
            <div className="project">
                <a href="https://apps.apple.com/us/app/tripp-vision/id6472496232" target="_blank" rel="noreferrer"><img src={Tripp} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://apps.apple.com/us/app/tripp-vision/id6472496232" target="_blank" rel="noreferrer"><h2>Tripp Vision</h2></a>
                <p>Optimized assets, landscapes, and environments for the TRIPP Vision release onto the Apple Vision Pro</p>
            </div>
            <div className="project">
                <a href="https://www.relievrx.com/about" target="_blank" rel="noreferrer"><img src={TreeOfLife} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.relievrx.com/about" target="_blank" rel="noreferrer"><h2>RelieVRx Breath</h2></a>
                <p>Developed the VR experience for the RelieVRx platform, Tree of Life. Utilizing cutting edge microphone technology, use your breath to achieve diaphragmatic breathing to affect the world around you.</p>
            </div>
            <div className="project">
                <a href="https://www.relievrx.com/about" target="_blank" rel="noreferrer"><img src={ButterflyGaze} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.relievrx.com/about" target="_blank" rel="noreferrer"><h2>RelieVRx Gaze</h2></a>
                <p>Developed the mindful VR experience for the RelieVRx platform, Gaze. Track objects with your gaze and achieve mindful distraction.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;