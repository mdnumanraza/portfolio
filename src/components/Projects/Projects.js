import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import digital from '../../Assets/Projects/digital.jpeg'
import stackoverflow from '../../Assets/Projects/stackoverflow.png'
import tictactoe from '../../Assets/Projects/tictactoe.png'
import todo from '../../Assets/Projects/todo.png'


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
              imgPath={digital}
              title="Digital Wellness"
              description="A social space web app, with reporting section and Admin Dashboard to manage users and reports also integrated chat bot trained for providing details of Doctors and Hospitals. build with react.js, Nodejs, MongoDB and Firebase."
              ghLink="https://github.com/numan71417/digital-wellness/"
              demoLink="https://digital-wellness-client.vercel.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackoverflow}
              title="Stack Overflow "
              description="Not any Stack Overflow clone, It also has social media features and also hateful content detection system. Here any user can ask Questions and can add image, video and code realted to the questions , build with react.js, Nodejs, MongoDB and Firebase."
              ghLink="https://github.com/Numan71417/stack-overflow-clone"
              demoLink="https://numan-stackoverflow.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              title="Tic-Tac-Toe"
              description="This is no simple Tic-Tac-Toe game, it has special features like : 
              Dark and Light mode, 
               Background music and sound effects while playing, 
              Play/pause button to turn off/on Background music, 
              Confetti show when player wins.
              build with react.js."
              ghLink="https://github.com/Numan71417/tic-tac-toe-react"
              demoLink="https://tic-tac-toe-react-gamma.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="Todo App "
              description="A simple TODO app, with extra functionalities like adding images, emojies selection bar and tags. All the data is saved in the Database. Build with react.js, Nodejs, MongoDB and Firebase."
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
