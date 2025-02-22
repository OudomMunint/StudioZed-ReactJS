import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function ScrollTrigger() {
  
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1368 });
  const isDesktop = useMediaQuery({ minWidth: 1081 });
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    let currentIntersectedElement = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reset previous element
          // if (currentIntersectedElement && currentIntersectedElement !== entry.target) {
          //   currentIntersectedElement.style.opacity = 0.1;
          // }
          entry.target.style.opacity = 1;
          currentIntersectedElement = entry.target;
        } else {
          entry.target.style.opacity = 0.1;
          if (currentIntersectedElement === entry.target) {
            currentIntersectedElement = null;
          }
        }
      });
    }, {
      // desktop and laptops options
      // threshold: 1,
      // rootMargin: "-150px",
      // Tablets options
      // threshold: 0.7,
      // rootMargin: "-50px",
      threshold: isTablet ? 0.5 : 1,
      rootMargin: isTablet ? "-200px" : "-150px",
    });

    if (isDevelopment) { console.log(observer.thresholds, observer.rootMargin) }
    console.log(observer.thresholds, observer.rootMargin);
    console.log(window.innerWidth, window.innerHeight);


    document.querySelectorAll('.triggerSpan').forEach((element) => {
      element.style.opacity = 0.1;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isTablet, isDesktop, isDevelopment]);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div id="aboutMe" className="body">
          <div className="triggerDiv" tg-name="_" tg-ref="container" tg-from="1" tg-to="8" tg-step="1">
            <section tg-name="_" tg-map="1,2,3,4,5,6,7,8,9,10: 1">
              <span className="triggerSpan" tg-name="opacity" tg-filter="2!" tg-follow="container">
              A University Of Newcastle Student Led Design Studio.
              </span>
              <br />
              <span className="triggerSpan" tg-name="opacity" tg-filter="3!" tg-follow="container">
              We work together with communities, governments, universities and select start-up businesses
              </span> <br />
              <span className="triggerSpan" tg-name="opacity" tg-filter="4!" tg-follow="container">
              We work on large scale projects from illustration and graphic design through to campaigns and creative consultancy.
              </span>
              <br />
              <span className="triggerSpan" tg-name="opacity" tg-filter="5!" tg-follow="container">
              Feel free to get in touch for an obligation free consultation. And everything from Aye! to Zed!
              </span>
            </section>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ScrollTrigger;