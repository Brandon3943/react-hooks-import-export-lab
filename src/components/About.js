import React from "react";

function About({img}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={img} alt="I made this" />
    </div>
  );
}

export default About;