import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={' '}
              title="Digital Wellness"
              description="A social space web app, with reporting section and Admin Dashboard to manage users and reports also integrated chat bot trained for providing details of Doctors and Hospitals. build with react.js, Nodejs, MongoDB and Firebase."
              ghLink="https://github.com/numan71417/digital-wellness/"
              demoLink="https://digital-wellness-client.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={' '}
              title="Digital Wellness"
              description="A social space web app, with reporting section and Admin Dashboard to manage users and reports also integrated chat bot trained for providing details of Doctors and Hospitals. build with react.js, Nodejs, MongoDB and Firebase."
              ghLink=""
              demoLink=""
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
