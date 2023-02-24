import React from "react";
import "./style.css";

function About() {
    return (
        <div className=" about-me mt-5" id="about">
            <div className="container">
                <div className="about-name">
                    <h2>About Me</h2>
                </div>
                <div className="about-me-container">
                    <div className="about-pic">
                        <img src="./images/profileIMG.png" alt="Samuel Oluyomi"></img>
                    </div>
                    <div className="about-text">
                        <p>I'm a UK based frontend developer, web designer & freelancer focused on crafting clean & user-friendly experiences.

                            I'm always up for learning new things and constantly exploring new areas of work. I am also able to leverage my existing skills and expertise to solve challenging problems</p>
                        <p>
                            <span>Technology leads, society follows.</span>
                            The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.
                        </p>
                        <p>
                            I'm excited to make the leap and continue refining my skills with the right company. Drop me a line and/or your favourite restaurant in Sheffield in the contact form
                            <a href="#contact">below</a> or check me out at:
                        </p>
                        <ul className="socials">
                            <li><a href="https://github.com/hollusam" target="_blank" rel="noreferrer"><span className="fab fa-github"></span></a> </li>
                            <li><a href="https://www.linkedin.com/in/oluyomi-samuel" target="_blank" rel="noreferrer"><span className="fab fa-linkedin"></span></a> </li>
                            <li><a href="https://twitter.com/hollusam"><span className="fab fa-twitter" target="_blank" rel="noreferrer"></span></a> </li>
                            <li><a href="https://instagram.com/hollusam" target="_blank" rel="noreferrer"><span className="fab fa-instagram"></span></a> </li>
                            <li><a href="https://drive.google.com/file/d/1rwZ3xPkCVl19KNo9Xxr-7qZOinZqHTq6/view?usp=sharing" className="resume" target="_blank" rel="noreferrer"><span>Resume</span></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;