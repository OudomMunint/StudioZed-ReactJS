import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Student from "../../Assets/home-main.svg"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillDribbbleCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          
            <h1 style={{ fontSize: "2.2em", width: "500px", textAlign: "left"  }}>
              A University Of Newcastle <span className="purple"> Student Led </span> Design Studio.
            </h1>
            <p className="home-about-body" style={{width: "600px", textAlign: "left", fontSize: "2.2em"  }}>
              <br />
              <br />We work together with
              <i>
                <b className="purple">  communities, governments, universities and select start-up businesses </b>
              </i>
              <br />
              <br />
              We work on large scale projects from &nbsp;
              <i>
                <b className="purple">llustration and graphic design </b> through to{" "}
                <b className="purple">
                campaigns and creative consultancy.
                </b>
              </i>
              <br />
              <br />
              Feel free to get in touch for a <b className="purple">obligation free consultation.</b> And everything from
              <i>
                <b className="purple">
                  {" "}
                  Aye!
                </b>
              </i>
              &nbsp; to
              <i>
                <b className="purple"> Zed!</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Student} className="img-fluid" alt="avatar" style={{ minHeight: "450px" }}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND US ON</h1> */}
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            {/* <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=""
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillDribbbleCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
