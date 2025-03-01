import Typewriter from "typewriter-effect";
import React from "react";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Design studio",
          "Designing for good",
          "Empowering students",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;