import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Student from "../../Assets/home-main.svg"
import Tilt from "react-parallax-tilt";
import carl from "../../Assets/carl.svg"
import simone from "../../Assets/simone.svg"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          
            <h1 class="home2H1" style={{ fontSize: "2.2em", width: "500px", textAlign: "left"  }}>
              A University Of Newcastle <span className="purple"> Student Led </span> Design Studio.
            </h1>
            <p className="home-about-body" style={{width: "500px", textAlign: "left", fontSize: "2.2em"  }}>
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
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
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
            </ul>
          </Col>
        </Row> */}
      </Container>
      {/* about end */}

      {/* Team start */}
      {/* carl section */}
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          
          <h1 className="project-heading" style={{textAlign: "right"}}>
          Meet<strong className="purple"> Out Team! </strong>
        </h1>
            <p className="home-about-body" style={{width: "500px", textAlign: "left", fontSize: "2.2em"}}>
              <br />
              <br />Meet <b><a target="_blank" href="https://www.linkedin.com/in/carl-morgan-7066863b/" style={{textDecoration:"none", color:"white"}} className="purple">Carl, </a></b>
              <i>
              Associate Lecturer at University of Newcastle & Co-Founder of Zookraft and Studio Zed.
              </i>
              <br />
              {/* <br /> */}
              He is also a very talented &nbsp;
              <i>
                <b className="purple">llustrator</b> and{" "}
                <b className="purple">Designer.</b> With many years of Industry experience.
              </i>
              <br />
              <br />
              Reach out to carl on
              <a target="_blank " href="https://www.instagram.com/zookraft/?hl=en">
                <b className="white" style={{fontSize:"30px"}}>
                  {" "}
                  <AiFillInstagram />
                </b>
              </a>
              &nbsp;or&nbsp;
              <a target="_blank " href="https://www.instagram.com/zookraft/?hl=en">
                <b className="white" style={{fontSize:"30px"}}><AiFillLinkedin/></b>
                </a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={carl} className="img-fluid" alt="avatar" style={{ minHeight: "450px"}}/>
              <a target="_blank" href="https://www.linkedin.com/in/carl-morgan-7066863b/"><figcaption style={{paddingRight:"40px", color:"white", textDecoration:"none"}}>@Carl Morgan</figcaption></a>
            </Tilt>
          </Col>
        </Row>
      </Container>
{/* carl section End*/}

{/* Simone section */}
      <Container>
        <Row>
          <Col md={8} className="home-about-description2">
            <p className="home-about-body" style={{width: "500px", textAlign: "left", fontSize: "2.2em"}}>
              <br />
              <br />Meet <b><a target="_blank" href="https://www.linkedin.com/in/simoneo/" style={{textDecoration:"none", color:"white"}} className="purple">Simone, </a></b>
              Deputy Head of Research Training, School of Humanities, Creative Industries, Social Sciences at University of Newcastle and founder at Studio Zed.
              {/* <br />
              {/* <br /> */}
              &nbsp;She is also an experienced&nbsp;
              <i>
                <b className="purple">UI/UX Designer, Art Director</b> and{" "}
                <b className="purple">Creative Lead.</b>
              </i>
              <br />
              <br />
              Reach out to Simone on
              {/* <a target="_blank " href="https://www.instagram.com/zookraft/?hl=en">
                <b className="purple">
                  {" "}
                  IG
                </b>
              </a> */}
              &nbsp;
              <a target="_blank " href="https://www.linkedin.com/in/simoneo/">
                <b className="white" style={{fontSize:"30px"}}><AiFillInstagram /></b>
                </a>
            </p>
          </Col>
          <Col md={4} className="myAvtar2">
            <Tilt>
              <img src={simone} className="img-fluid" alt="avatar" style={{ minHeight: "450px"}}/>
              <a target="_blank" href="https://www.linkedin.com/in/simoneo/"><figcaption style={{color:"white", textDecoration:"none"}}>@Simone O'Callaghan</figcaption></a>
            </Tilt>
          </Col>
        </Row>
      </Container>
      {/* Simone section End*/}
    </Container>
  );
}
export default Home2;