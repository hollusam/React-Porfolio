import React from 'react';
import "./style.css";

function Header() {
    return (
        <div className="welcome mt-5" id='home'>
            <div className = "wrapper">
            <h1 className = "display-4">
                <span>Samuel Oluyomi</span>
                <br />
                <span>Front-End</span>
                <br />
                <span>Web Developer</span>
                <br />
            </h1> 
            </div>
            <a href='#about'>
            <span aria-hidden="true" className="material-icons arrow">expand_more</span>
            </a>   
        </div>
    );
}


export default Header;