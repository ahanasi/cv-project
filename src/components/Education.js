import React, { Component } from "react";
import { faPlus, faPencilAlt, faCheck, faMinusCircle, faGraduationCap, faSchool, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import DegreeItem from "./DegreeItem";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degrees: [
        {
          degreeInfo: {
            school: "University of Pennsylvania",
            degreeName: "MSE in Bioengineering",
            dateEarned: "December, 2018",
          },
          id: uuidv4(),
          isEditable: false,
        },
      ],
      degreeInput: {
        degreeInfo: {
          school: "",
          degreeName: "",
          dateEarned: "",
        },
        id: uuidv4(),
        isEditable: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEducationForm = this.toggleEducationForm.bind(this);
    this.deleteDegree = this.deleteDegree.bind(this);
    this.editDegree = this.editDegree.bind(this);
    this.changeDegree = this.changeDegree.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      degreeInput: {
        degreeInfo: {
          ...prevState.degreeInput.degreeInfo,
          [name]: value,
        },
        id: this.state.degreeInput.id,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      degrees: [...this.state.degrees, this.state.degreeInput],
      degreeInput: {
        degreeInfo: {
          school: "",
          degreeName: "",
          dateEarned: "",
        },
        id: uuidv4(),
        isEditable: false,
      },
    });
  }

  toggleEducationForm() {
    document.querySelector(".DegreeForm").classList.toggle("is-hidden");
    this.setState({
      degreeInput: {
        degreeInfo: {
          school: "",
          degreeName: "",
          dateEarned: "",
        },
        id: uuidv4(),
        isEditable: false,
      },
    });
  }

  deleteDegree(degreeID) {
    const degreeItems = this.state.degrees.filter((degree) => degree.id !== degreeID);
    this.setState({ degrees: degreeItems });
  }

  editDegree(degreeID) {
    const degreeIndex = this.state.degrees.findIndex((degree) => degree.id === degreeID);

    this.setState((prevState) => ({
      degrees: prevState.degrees.map((degree, i) => {
        const degreeToEdit = Object.assign({}, degree);
        if (i === degreeIndex) {
          degreeToEdit.isEditable = !degreeToEdit.isEditable;
        }
        return degreeToEdit;
      }),
    }));
  }

  changeDegree(e, id) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    const degreeIndex = this.state.degrees.findIndex((degree) => degree.id === id);

    this.setState((prevState) => ({
      degrees: prevState.degrees.map((degree, i) => {
        const degreeToEdit = Object.assign({}, degree);
        if (i === degreeIndex) {
          degreeToEdit.degreeInfo[name] = value;
        }
        return degreeToEdit;
      }),
    }));
  }

  render() {
    const degreeItems = this.state.degrees.map((degree) => {
      let editBtn;
      if (degree.isEditable) {
        editBtn = (
          <button className="button is-ghost has-text-success" aria-label="Edit Degree" onClick={() => this.editDegree(degree.id)}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </button>
        );
      } else {
        editBtn = (
          <button className="button is-ghost has-text-info-dark" aria-label="Edit Degree" onClick={() => this.editDegree(degree.id)}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faPencilAlt} />
            </span>
          </button>
        );
      }
      return (
        <li key={degree.id} className="is-flex is-align-items-baseline is-justify-content-space-between">
          <DegreeItem degreeInfo={degree.degreeInfo} id={degree.id} isEditable={degree.isEditable} changeDegree={this.changeDegree} />
          <div>
            {editBtn}
            <button className="button is-ghost has-text-danger-dark pl-2" aria-label="Delete Degree" onClick={() => this.deleteDegree(degree.id)}>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faMinusCircle} />
              </span>
            </button>
          </div>
        </li>
      );
    });
    return (
      <section className="Education">
        <header className="is-flex is-justify-content-space-between is-align-items-baseline	">
          <h2 className="has-text-info is-size-3">Education</h2>
          <button type="button" className="button is-ghost has-text-info-dark" onClick={this.toggleEducationForm}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>Add Degree</span>
          </button>
        </header>
        <ul className="DegreeList mt-2">{degreeItems}</ul>
        <form className="DegreeForm card is-flex is-flex-direction-column has-background-info-light mt-5 is-hidden" onSubmit={this.handleSubmit}>
          <div className="is-horizontal card-content is-flex is-justify-content-space-evenly">
            <div className="field-label is-normal">
              <label className="label">Degree Info.</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <label htmlFor="school" className="is-sr-only">
                    School
                  </label>
                  <input
                    id="school"
                    name="school"
                    className="input field-body"
                    type="text"
                    placeholder="School"
                    value={this.state.degreeInput.degreeInfo.school}
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faSchool} />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <label htmlFor="degreeName" className="is-sr-only">
                    Degree
                  </label>
                  <input
                    id="degreeName"
                    name="degreeName"
                    className="input field-body"
                    type="text"
                    placeholder="Degree"
                    value={this.state.degreeInput.degreeInfo.degreeName}
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <label htmlFor="dateEarned" className="is-sr-only">
                    Date Earned
                  </label>
                  <input
                    id="dateEarned"
                    name="dateEarned"
                    className="input field-body"
                    type="text"
                    placeholder="Graduation Date"
                    value={this.state.degreeInput.degreeInfo.dateEarned}
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faCalendarDay} />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="button-container is-flex is-justify-content-center">
            <button type="submit" className="button is-primary mb-4 mr-2">
              Submit
            </button>
            <button type="button" className="button is-danger mb-4" onClick={this.toggleEducationForm}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Education;
