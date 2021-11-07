import React, { Component } from "react";
import { faPlus, faMinusCircle, faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
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
            tasks: `▪ Built RESTful APIs that served data to our Javascript front-end based on dynamically chosen user inputs that handled over 500,000 concurrent users\n▪ Built internal tool using NodeJS and Pupeteer.js to automate QA and monitoring of customer-facing web app which improved click through rate by 3%`,
            dateFrom: "May, 2018",
            dateTo: "August, 2018",
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

  render() {
    const workItems = this.state.items.map((item) => {
      let editBtn;
      if (item.isEditable) {
        editBtn = (
          <button className="button is-ghost has-text-success" aria-label="Edit Work Experience" onClick={() => this.editItem(item.id)}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </button>
        );
      } else {
        editBtn = (
          <button className="button is-ghost has-text-info-dark" aria-label="Edit Work Experience" onClick={() => this.editItem(item.id)}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faPencilAlt} />
            </span>
          </button>
        );
      }
      return (
        <li key={item.id} className="is-flex is-align-items-baseline is-justify-content-space-between">
          <ExpItem itemInfo={item.itemInfo} id={item.id} isEditable={item.isEditable} changeItem={this.changeItem} />
          <div>
            {editBtn}
            <button className="button is-ghost has-text-danger-dark pl-2" aria-label="Delete Work Experience" onClick={() => this.deleteItem(item.id)}>
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
          <h2 className="has-text-info is-size-3">Work Experience</h2>
          <button type="button" className="button is-ghost has-text-info-dark" onClick={this.toggleExpForm}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>Add Work Experience</span>
          </button>
        </header>
        <ul className="ItemList mt-2">{workItems}</ul>
      </section>
    );
  }
}

export default Experience;
