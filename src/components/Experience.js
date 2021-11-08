import React, { Component } from "react";
import { faPlus, faMinusCircle, faPencilAlt, faCheck, faBuilding, faSitemap, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import ExpItem from "./ExpItem";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          itemInfo: {
            company: "Google",
            position: "Junior Software Engineer",
            tasks: `▪ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n▪ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            dateFrom: "Feb, 2019",
            dateTo: "Present",
          },
          id: uuidv4(),
          isEditable: false,
        },
        {
          itemInfo: {
            company: "Twitter",
            position: "Software Engineering Intern",
            tasks: `▪ Semper viverra nam libero justo laoreet sit amet cursus. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Erat velit scelerisque in dictum non consectetur a erat.\n▪  Morbi enim nunc faucibus a pellentesque sit amet porttitor. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae.`,
            dateFrom: "May, 2017",
            dateTo: "August, 2017",
          },
          id: uuidv4(),
          isEditable: false,
        },
      ],
      itemInput: {
        itemInfo: {
          company: "",
          position: "",
          tasks: "",
          dateFrom: "",
          dateTo: "",
        },
        id: uuidv4(),
        isEditable: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleExpForm = this.toggleExpForm.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
  }

  deleteItem(itemID) {
    const items = this.state.items.filter((item) => item.id !== itemID);
    this.setState({ items: items });
  }

  editItem(itemID) {
    const itemIndex = this.state.items.findIndex((item) => item.id === itemID);

    this.setState((prevState) => ({
      items: prevState.items.map((item, i) => {
        const itemToEdit = Object.assign({}, item);
        if (i === itemIndex) {
          itemToEdit.isEditable = !itemToEdit.isEditable;
        }
        return itemToEdit;
      }),
    }));
  }

  changeItem(e, id) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    const itemIndex = this.state.items.findIndex((item) => item.id === id);

    this.setState((prevState) => ({
      items: prevState.items.map((item, i) => {
        const itemToEdit = Object.assign({}, item);
        if (i === itemIndex) {
          itemToEdit.itemInfo[name] = value;
        }
        return itemToEdit;
      }),
    }));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      itemInput: {
        itemInfo: {
          ...prevState.itemInput.itemInfo,
          [name]: value,
        },
        id: this.state.itemInput.id,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      items: [...this.state.items, this.state.itemInput],
      itemInput: {
        itemInfo: {
          company: "",
          position: "",
          tasks: "",
          dateFrom: "",
          dateTo: "",
        },
        id: uuidv4(),
        isEditable: false,
      },
    });
  }

  toggleExpForm() {
    document.querySelector(".ItemForm").classList.toggle("is-hidden");
    this.setState({
      itemInput: {
        itemInfo: {
          company: "",
          position: "",
          tasks: "",
          dateFrom: "",
          dateTo: "",
        },
        id: uuidv4(),
        isEditable: false,
      },
    });
  }

  render() {
    const workItems = this.state.items.map((item) => {
      let editBtn;
      if (item.isEditable) {
        editBtn = (
          <button className="button is-ghost has-text-success no-print" aria-label="Edit Work Experience" onClick={() => this.editItem(item.id)}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </button>
        );
      } else {
        editBtn = (
          <button className="button is-ghost has-text-info-dark no-print" aria-label="Edit Work Experience" onClick={() => this.editItem(item.id)}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faPencilAlt} />
            </span>
          </button>
        );
      }
      return (
        <li key={item.id} className="is-flex is-align-items-baseline is-justify-content-space-between">
          <ExpItem itemInfo={item.itemInfo} id={item.id} isEditable={item.isEditable} changeItem={this.changeItem} />
          <div className="button-container">
            {editBtn}
            <button className="button is-ghost has-text-danger-dark pl-2 no-print" aria-label="Delete Work Experience" onClick={() => this.deleteItem(item.id)}>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faMinusCircle} />
              </span>
            </button>
          </div>
        </li>
      );
    });
    return (
      <section className="work-experience">
        <header className="is-flex is-justify-content-space-between is-align-items-baseline	">
          <h2 className="has-text-info is-size-4">Work Experience</h2>
          <button type="button" className="button is-ghost has-text-info-dark no-print" onClick={this.toggleExpForm}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>Add Work Experience</span>
          </button>
        </header>
        <ul className="ItemList mt-2">{workItems}</ul>
        <form className="ItemForm card-content is-flex is-flex-direction-column has-background-info-light mt-5 is-hidden no-print" onSubmit={this.handleSubmit}>
          <div className="field is-horizontal is-flex is-justify-content-space-evenly no-print">
            <div className="field-label is-normal">
              <label className="label">Role</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <label htmlFor="company" className="is-sr-only">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="input"
                    type="text"
                    placeholder="Company"
                    value={this.state.itemInput.itemInfo.company}
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <label htmlFor="position" className="is-sr-only">
                    Position
                  </label>
                  <input
                    id="position"
                    name="position"
                    className="input"
                    type="text"
                    placeholder="Position"
                    value={this.state.itemInput.itemInfo.position}
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faSitemap} />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal is-flex is-justify-content-space-evenly">
            <div className="field-label is-normal">
              <label className="label">Dates</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <label htmlFor="dateFrom" className="is-sr-only">
                    From
                  </label>
                  <input
                    id="dateFrom"
                    name="dateFrom"
                    className="input"
                    type="text"
                    placeholder="From"
                    value={this.state.itemInput.itemInfo.dateFrom}
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faCalendarDay} />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <label htmlFor="dateTo" className="is-sr-only">
                    To
                  </label>
                  <input
                    id="dateTo"
                    name="dateTo"
                    className="input"
                    type="text"
                    placeholder="To"
                    value={this.state.itemInput.itemInfo.dateTo}
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
          <div className="field is-horizontal is-flex is-justify-content-space-evenly">
            <div className="field-label is-normal">
              <label className="label">Description</label>
            </div>
            <div className="field-body">
              <div className="field">
                <label htmlFor="tasks" className="is-sr-only">
                  Description
                </label>
                <textarea
                  id="tasks"
                  name="tasks"
                  className="textarea"
                  placeholder="Built RESTful APIs..."
                  value={this.state.itemInput.itemInfo.tasks}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="button is-primary mt-4 mr-2">
              Submit
            </button>
            <button type="button" className="button is-danger mt-4" onClick={this.toggleExpForm}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Experience;
