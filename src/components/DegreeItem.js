import React, { Component } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DegreeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degreeInfo: {
        school: "",
        degreeName: "",
        dateEarned: "",
      },
      id: "",
      isEditable: true,
    };
  }

  render() {
    const { degreeInfo, id, isEditable } = this.props;

    return (
      <p className="is-size-5">
        <strong>{degreeInfo.school}</strong> – {degreeInfo.degreeName}, {degreeInfo.dateEarned}
      </p>
    );
  }
}

export default DegreeItem;
