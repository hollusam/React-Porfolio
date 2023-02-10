import React from 'react';
import './style.css';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-md">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-5 ml-auto top-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;