import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faDocker, faUnity } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Unity",
    "C#",
    "Shaders",
    "Shader Graph",
    "Sprites",
    "Modeling",
    "Audio"
];

const labelsSecond = [
    "C++",
    "Blueprints"
];

const labelsThird = [
    "Git",
    "Github Actions",
    "Addressables",
    "CI/CD"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faUnity} size="3x"/>
                    <h3>Unity Development</h3>
                    <p>
                        I have built a diverse array of applications, simulations, and games from scratch utilizing the Unity Engine framework. 
                        I have a strong proficiency in Unity overall, including C# scripting and implementation of shaders, sprites, models, and audio assets.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGamepad} size="3x"/>
                    <h3>Unreal Development</h3>
                    <p>
                        Interest in the world of game development of a whole by keeping interest in Unreal Development. I have experience with blueprints and C++ scripting 
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>
                        Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support a successful launch.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;