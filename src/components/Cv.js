import React, { Component } from "react";
import Bio from "./Bio";

class Cv extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <section className="has-text-left is-flex is-flex-direction-column">
        <Bio />
      </section>
    );
  }
}

export default Cv;
