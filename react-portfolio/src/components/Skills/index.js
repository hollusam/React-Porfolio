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
                            <li className='skills-title'><a href="#"><span className="fab fa-html5"></span></a><p>HTML5</p></li>
                            <li className='skills-title'><a href="#"><span className="fab fa-css3-alt"></span></a><p>CSS</p></li>
                            <li className='skills-title'><a href="#"><span className="fab fa-js"></span></a><p>JAVASCRIPT + ES6</p> </li>
                            <li className='skills-title'><a href="#"><span className="devicon-jquery-plain"></span></a><p>JQUERY</p> </li>
                            <li className='skills-title'><a href="#"><span className="fa fa-cog"></span></a><p>REST APIS</p> </li>
                            <li className='skills-title'><a href="#"><span className="fab fa-react"></span></a><p>REACT</p> </li>
                            <li className='skills-title'><a href="#"><span className="fab fa-git-alt"></span></a><p>GIT</p> </li>
                        </ul>
        </div>
    )
}

export default Skills;