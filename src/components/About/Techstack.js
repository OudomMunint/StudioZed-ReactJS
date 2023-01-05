import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import pubArt from "../../Assets/publicartworkers.png";
import nsw from "../../Assets/nsw.svg";
import local from "../../Assets/local.png";
import nw from "../../Assets/nw.png";
import air from "../../Assets/air.png";
import tina from "../../Assets/tina.png";
import nag from "../../Assets/nag.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* <CgCPlusPlus /> */}
        <img src={pubArt} className="img-fluid" alt="avatar" style={{paddingTop:"25px"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiJavascript1 /> */}
        <img src={nsw} className="img-fluid" alt="avatar"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiNodejs /> */}
        <img src={local} className="img-fluid" alt="avatar" style={{paddingTop:"5px"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiReact /> */}
        <img src={nw} className="img-fluid" alt="avatar" style={{paddingTop:"85px"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiMongodb /> */}
        <img src={air} className="img-fluid" alt="avatar"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiNextdotjs /> */}
        <img src={tina} className="img-fluid" alt="avatar"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiNextdotjs /> */}
        <img src={nag} className="img-fluid" alt="avatar"/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col> */}
    </Row>
  );
}

export default Techstack;
