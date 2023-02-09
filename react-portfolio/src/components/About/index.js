import React from "react";
import "./style.css";

function About() {
    return (
        <div className=" about-me mt-5">
            <div className="container">
                <div className="about-name">
                    <h2>About Me</h2>
                </div>
                <div className="about-me-container">
                    <div className="about-pic">
                        <img src="./images/profileIMG.png"></img>
                    </div>
                    <div className="about-text">
                        <p>Hello World! I'm Samuel Oluyomi, a Front-End Web Developer based out of Sheffield.  From choreography on a stage to lines of code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.</p>
                        <p>
                            <span>Technology leads, society follows.</span>
                            The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.
                        </p>
                        <p>
                        I'm excited to make the leap and continue refining my skills with the right company. Drop me a line and/or your favourite restaurant in Toronto in the contact form 
                        <a href="#contact">below</a> or check me out at:
                        </p>
                        <ul className="socials">
                            <li><a href="#"><span className="fab fa-github"></span></a> </li>
                            <li><a href="#"><span className="fab fa-linkedin"></span></a> </li>
                            <li><a href="#"><span className="fab fa-twitter"></span></a> </li>
                            <li><a href="#"><span className="fab fa-instagram"></span></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;