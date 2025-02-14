import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Basic Banking System"
              description="A Basic Banking System Website is a simple web application designed to manage basic banking operations. It typically allows users to perform fundamental tasks like transaction and balance enquiry."
              ghLink="https://github.com/Sujil-kumar/Basic-banking-system-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Grade Calculator"
              description="A Grade CalculatorWebsite is a simple web application designed to help students calculate their grades based on various criteria such as assignments, exams, and other coursework components."
              ghLink="https://github.com/Sujil-kumar/Grade-calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Analog Clock"
              description="An Analog Clock Website is a simple web application that visually displays the current time using an analog clock interface."
              ghLink="https://github.com/Sujil-kumar/clock"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Project on Python"
              description="Created a Python-based Music Player with play, pause, stop, and playlist features. Implemented a Rock, Paper, Scissors game with user vs. computer logic."
              ghLink="https://github.com/Sujil-kumar/python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
