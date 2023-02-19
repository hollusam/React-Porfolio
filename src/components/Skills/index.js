import React from 'react';
import "./style.css";
import { DiJqueryLogo } from "react-icons/di";


function Skills() {
    return (
        <div className='skills'>
            <h2>
                <span>Skills</span>
            </h2>
            <ul className="skills-container">
                            <li className='skills-title'><span className="fab fa-html5"></span><p>HTML5</p></li>
                            <li className='skills-title'><span className="fab fa-css3-alt"></span><p>CSS</p></li>
                            <li className='skills-title'><span className="fab fa-js"></span><p>JAVASCRIPT + ES6</p> </li>
                            <li className='skills-title'><span className="devicon-jquery-plain"></span><p>JQUERY</p> </li>
                            <li className='skills-title'><span className="fa fa-cog"></span><p>REST APIS</p> </li>
                            <li className='skills-title'><span className="fab fa-react"></span><p>REACT</p> </li>
                            <li className='skills-title'><span className="fab fa-git-alt"></span><p>GIT</p> </li>
                        </ul>
        </div>
    )
}

export default Skills;