import React from "react";
import { Col, Row } from "react-bootstrap";
import pubArt from "../../Assets/publicartworkers.png";
import nsw from "../../Assets/nsw.svg";
import local from "../../Assets/local.png";
import nw from "../../Assets/nw.png";
import air from "../../Assets/air.png";
import tina from "../../Assets/tina.png";
import nag from "../../Assets/nag.png";
// import { useEffect } from "react";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
// } from "react-icons/di";
// import {
//   SiPytorch,
//   SiFirebase,
//   SiNextdotjs,
// } from "react-icons/si";

function Clients() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pubArt} className="img-fluid" alt="avatar" style={{paddingTop:"25px"}}/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={nsw} className="img-fluid" alt="avatar"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={local} className="img-fluid" alt="avatar" style={{paddingTop:"5px"}}/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={nw} className="img-fluid" alt="avatar" style={{paddingTop:"85px"}}/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={air} className="img-fluid" alt="avatar"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={tina} className="img-fluid" alt="avatar"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={nag} className="img-fluid" alt="avatar"/>
      </Col>
    </Row>
  );
}

export default Clients;