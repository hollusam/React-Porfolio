import React from 'react';
import Col from '../Col';
import Row from '../Row';
import "./style.css";

function ProjectGallery({ title, text, imgUrl, link, live }) {
  return (
    <div className="container project-container" id="projects">
      <Row className="project">
        <Col size="md-6" className="mockup">
          <img src={imgUrl} alt="" />
        </Col>
        <Col size="md-6" className='project-text'>
          <h3>{title}</h3>
          <div>
            <p>{text}</p>
          </div>
          <div className='project-links'>
            <a href={live} target="_blank">Live Site</a>
            <span>|</span>
            <a href={link} target="_blank">Github</a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectGallery;