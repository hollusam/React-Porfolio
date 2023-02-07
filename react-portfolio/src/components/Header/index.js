import React from 'react';
import "./style.css";

function Header() {
    return (
        <div className="jumbotron welcome">
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
        </div>
    );
}


export default Header;