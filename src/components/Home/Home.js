import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import {ReactComponent as Design} from "../../Assets/design.svg";
import {ReactComponent as HomeLogo} from "../../Assets/paintbrush.svg";

function Home() {
  return (
    <section className="HomeHeroSection">
      <Container fluid className="home-section" id="home">
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
              </div>
            </Col>

            <Col className="img-fluid" md={5} style={{ paddingBottom: 20 }}>
            <Design/>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Home;