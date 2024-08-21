import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/about.png";
import Particle from "../Particle";
//import Home2 from "./Home2";
import Type from "./Type";
import {ReactComponent as Design} from "../../Assets/design.svg";
import {ReactComponent as HomeLogo} from "../../Assets/paintbrush.svg";

// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
//   AiFillDribbbleCircle,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section className="HomeHeroSection">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome!{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave" style={{fontSize:"90px"}}>
                🖌️
                <HomeLogo></HomeLogo>
                </span> */}
                <HomeLogo className="wave" role="img" aria-label="wave" style={{width:"80px", height:"80px", marginLeft:"30px"}}/>
              </h1>

              <h1 className="heading-name">
                We are
                <strong className="main-name"> Studio Zed</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", width: "max-content" }}>
                <Type />
                {/* <p style={{color:"white"}}>(If you have a better gradient in mind pls let me know)</p> */}
              </div>
            </Col>

            <Col className="img-fluid" md={5} style={{ paddingBottom: 20 }}>
            <Design/>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Row>
          <Col md={12} className="home-about-social">
      <h1 style={{ color: "white" }}>FIND US ON</h1>
       <p style={{color:"white"}}>(We should look into populating our IG, making a linkedin, making a dribble. for now these will redirect to instagram.)</p>
       <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/stoodiozed/?hl=en"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillDribbbleCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/stoodiozed/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/stoodiozed/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/stoodiozed/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            </Col>
            </Row> */}
      {/* <Home2 /> */}
    </section>
  );
}
export default Home;
