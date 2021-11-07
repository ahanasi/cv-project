import React, { Component } from "react";

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
    const { degreeInfo, id, isEditable, changeDegree } = this.props;

    if (isEditable) {
      return (
        <div className="is-size-5 is-flex">
          <div className="field m-2">
            <label htmlFor="school" className="is-sr-only">
              School
            </label>
            <input
              id="school"
              type="text"
              className="input is-small"
              name="school"
              value={degreeInfo.school}
              placeholder="School"
              onChange={(e) => {
                changeDegree(e, id);
              }}
            ></input>
          </div>
          <div className="field m-2">
            <label htmlFor="degreeName" className="is-sr-only">
              Degree Name
            </label>
            <input
              id="degreeName"
              type="text"
              className="input is-small"
              name="degreeName"
              value={degreeInfo.degreeName}
              placeholder="Degree"
              onChange={(e) => {
                changeDegree(e, id);
              }}
            ></input>
          </div>
          <div className="field m-2">
            <label htmlFor="dateEarned" className="is-sr-only">
              Date Earned
            </label>
            <input
              id="dateEarned"
              type="text"
              className="input is-small"
              name="dateEarned"
              placeholder="Date Earned"
              value={degreeInfo.dateEarned}
              onChange={(e) => {
                changeDegree(e, id);
              }}
            ></input>
          </div>
        </div>
      );
    } else {
      return (
        <p className="is-size-5">
          <strong>{degreeInfo.school}</strong> – {degreeInfo.degreeName}, {degreeInfo.dateEarned}
        </p>
      );
    }
  }
}

export default DegreeItem;
