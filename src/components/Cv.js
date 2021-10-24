import React, { Component } from "react";
import Bio from "./Bio";

class Cv extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="container box m-5">
        <header className="mb-6">
          <h1 className="title">Resume Builder</h1>
        </header>
        <Bio />
      </div>
    );
  }
}

export default Cv;
