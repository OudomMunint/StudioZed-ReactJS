import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Studio Zed | Powered by ReactJs, NodeJs & Netlify</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/OudomMunint/StudioZed-ReactJS"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter - Coming Soon"
                onClick={(e) => e.preventDefault()}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="LinkedIn - Coming Soon"
                onClick={(e) => e.preventDefault()}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram - Coming Soon"
                onClick={(e) => e.preventDefault()}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;