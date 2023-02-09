import React from 'react';
import Col from '../Col';
import Row from '../Row';
import "./style.css";

function ProjectGallery({ title, text, imgUrl, link, live }) {
  return (
    <div className="container project-container">
      {/* <div className="project-name">
                    <h2>Projects</h2>
                </div> */}
      <Row>
        <Col size="md-6" >
          <img src={imgUrl} alt="" />
        </Col>
        <Col size="md-6">
          <h3>{title}</h3>
          <div className='project-text'>
            <p>{text}</p>
          </div>
          <div className='project-links'>
            <a href={live}>Live Site</a>
            <a href={link}>Github</a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectGallery;