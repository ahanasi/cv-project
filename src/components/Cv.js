import React, { Component } from "react";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Cv extends Component {
  render() {
    return (
      <section className="has-text-left is-flex is-flex-direction-column">
        <Bio />
        <hr />
        <Experience />
        <hr />
        <Education />
        <hr />
        <Skills />
      </section>
    );
  }
}

export default Cv;
