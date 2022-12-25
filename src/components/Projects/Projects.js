import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
/* import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png"; */
import publicartworkers from "../../Assets/Projects/pubArt.png";
import LocalConnect from "../../Assets/Projects/localConnections.png";
import wanersbay from "../../Assets/Projects/WarnersBayKids.png";
import newcastleArt from "../../Assets/Projects/newcastleArt.png";
import water from "../../Assets/Projects/water.png";
import JH from "../../Assets/Projects/JH.png";
import tina from "../../Assets/Projects/tina.png";
import noWorries from "../../Assets/Projects/noWorry.png"
import air from "../../Assets/Projects/air.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of our <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that we've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={publicartworkers}
              isBlog={false}
              title="Public Art Workers website and branding"
              description="A website, Logo and branding for a newly formed company called Public art workers."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={JH}
              isBlog={false}
              title="John Hunter Health anniversary book"
              description="This project is about [Insert name] it is for [ inset ] by [inset] this project involved [ insert]"
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={LocalConnect}
              isBlog={false}
              title="Local Connections restuarant"
              description="This project is about [Insert name] it is for [ inset ] by [inset] this project involved [ insert]"
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={newcastleArt}
              isBlog={false}
              title="Newcastle art gallery"
              description="This project is about [Insert name] it is for [ inset ] by [inset] this project involved [ insert]"
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={wanersbay}
              isBlog={false}
              title="Warners Bay kids book"
              description="This project is about [Insert name] it is for [ inset ] by [inset] this project involved [ insert]"
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={water}
              isBlog={false}
              title="Water conservation kids book"
              description="This project is about [Insert name] it is for [ inset ] by [inset] this project involved [ insert]"
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={tina}
              isBlog={false}
              title="This Is Not Art Program"
              description="This project is about [Insert name] it is for [ inset ] by [inset] this project involved [ insert]"
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={noWorries}
              isBlog={false}
              title="No worries rebranding and website"
              description="This project is about [Insert name] it is for [ inset ] by [inset] this project involved [ insert]"
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={air}
              isBlog={false}
              title="Art in Recovery rebrading and commemorative book"
              description="This project is about [Insert name] it is for [ inset ] by [inset] this project involved [ insert]"
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
