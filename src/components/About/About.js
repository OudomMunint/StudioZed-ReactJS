import React from "react";
import Particle from "../Particle";
import Clients from "./Clients";
import Home2 from "../Home/Home2"
import { Container } from "react-bootstrap";

// import { Row, Col } from "react-bootstrap";
// import Github from "./Github";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";
// import myImg from "../../Assets/avatar.svg";
// import Student from "../../Assets/home-main.svg"
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
//   AiFillDribbbleCircle,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <section>
    <Container fluid className="about-section">
      <Particle />
      <Container>
      <Home2/>
        {/* <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row> */}
        <h1 className="project-heading">
          Who we <strong className="purple">work with </strong>
        </h1>
        <p>(This we will change to the logos of those we worked with)</p>

        <Clients />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
    </section>
  );
}

export default About;