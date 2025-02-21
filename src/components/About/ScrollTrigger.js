import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";

function ScrollTrigger() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <div id="aboutMe" className="body">
          <div className="triggerDiv" tg-name="_" tg-ref="container" tg-from="1" tg-to="8" tg-step="1">
            <section tg-name="_" tg-map="1,2,3,4,5,6,7,8,9,10: 1">
              <span className="triggerSpan" tg-name="opacity" tg-filter="2!" tg-follow="container"> 
                I am an experienced software engineer based in Newcastle, New South Wales Australia, open to work remotely.
              </span>
              <br />
              <span className="triggerSpan" tg-name="opacity" tg-filter="3!" tg-follow="container">
                An IT graduate from the University of Newcastle,
                i have a passion for web and app development.
              </span>
              <span className="triggerSpan" tg-name="opacity" tg-filter="4!" tg-follow="container">
                I'm currently working at <a className="pds" href="https://www.pdsglobal.com/" target="_blank" style={{color: "white"}}>Productivity Developement Solutions</a> as a software engineer.
              </span>
              <br />
              <span className="triggerSpan" tg-name="opacity" tg-filter="5!" tg-follow="container">
                I love to design dashboards, UI effects, animations as well as making
                dynamic, creative and intuitive user experiences & Interface.
              </span>
              <span className="triggerSpan" tg-name="opacity" tg-filter="6!" tg-follow="container">
                I love computer graphics, I build and optimize graphically insane game
                environments and implement the latest technologies Like DLSS, FSR and
                much more.
              </span>
              <span className="triggerSpan" tg-name="opacity" tg-filter="7!" tg-follow="container">
                I am also interested in PC hardware, Micro-Architectures and the latest
                technologies in computing.
              </span>
            </section>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ScrollTrigger;