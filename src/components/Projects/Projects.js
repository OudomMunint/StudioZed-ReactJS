import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
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
      <Container>
        <h1 className="project-heading">
          Some of our <strong className="purple">Work </strong>
        </h1>
        <p>
          Here are a few projects that we've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={publicartworkers}
              isBlog={false}
              title="Public Art Workers website and branding"
              description="A website, Logo and branding for a newly formed company called Public art workers."
              demoLink="https://www.publicartworkers.com/"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={JH}
              isBlog={false}
              title="John Hunter Health anniversary book"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={LocalConnect}
              isBlog={false}
              title="Local Connections restuarant"         
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={newcastleArt}
              isBlog={false}
              title="Newcastle art gallery"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={wanersbay}
              isBlog={false}
              title="Warners Bay kids book"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={water}
              isBlog={false}
              title="Water conservation kids book"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={tina}
              isBlog={false}
              title="This Is Not Art Program"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={noWorries}
              isBlog={false}
              title="No worries rebranding and website"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={air}
              isBlog={false}
              title="Art in Recovery rebrading and commemorative book"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
