import React, { Component } from "react";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";

class Cv extends Component {

  render() {
    return (
      <section className="has-text-left is-flex is-flex-direction-column">
        <Bio />
        <hr />
        <Education />
        <hr />
        <Experience />
      </section>
    );
  }
}

export default Cv;
