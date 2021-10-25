import React, { Component } from "react";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BioView from "./BioView";

class Bio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jane Doe",
      address: "3195 Gambler Ln., Porter, TX 77365",
      email: "text@example.com",
      phone: "(123) 456-789",
      isEditable: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  toggleEdit() {
    this.setState({
      isEditable: !this.state.isEditable,
    });
  }

  render() {
    const { name, address, email, phone, isEditable } = this.state;
    let addressField, emailField, nameField, phoneField, resumeView;

    if (isEditable) {
      nameField = (
        <div className="field is-horizontal column is-half">
          <label htmlFor="bioName" className="field-label label is-normal">
            Name
          </label>
          <input id="bioName" name="name" className="input field-body" type="text" placeholder="Jane Doe" value={this.state.name} onChange={this.handleInputChange} />
        </div>
      );
      addressField = (
        <div className="field is-horizontal column is-half">
          <label htmlFor="bioAddress" className="label field-label">
            Email
          </label>
          <input
            id="bioAddress"
            name="address"
            className="input field-body"
            type="text"
            placeholder="4960 Alpaca Way, Santa Ana, CA 92701"
            value={address}
            onChange={this.handleInputChange}
          />
        </div>
      );
      emailField = (
        <div className="field is-horizontal column is-half">
          <label htmlFor="bioEmail" className="label field-label">
            Email
          </label>
          <input id="bioEmail" name="email" className="input field-body" type="email" placeholder="alex@example.com" value={email} onChange={this.handleInputChange} />
        </div>
      );
      phoneField = (
        <div className="field is-horizontal column is-half">
          <label htmlFor="bioPhone" className="label field-label">
            Enter your phone number:
          </label>
          <input
            id="bioPhone"
            name="phone"
            type="tel"
            className="input field-body"
            pattern="([0-9]{3})[0-9]{3}-[0-9]{4}"
            placeholder="(123) 000-000"
            value={phone}
            onChange={this.handleInputChange}
            required
          />
        </div>
      );
      resumeView = (
        <BioView isEditable={isEditable} name={name} address={address} email={email} phone={phone} handleInputChange={this.handleInputChange} toggleEdit={this.toggleEdit} />
      );
    } else {
      nameField = <div className="has-text-info is-size-1">{name}</div>;
      addressField = <div className="mr-2">{address}</div>;
      emailField = (
        <div className="mr-2">
          <a href={"mailto:" + email}>{email}</a>
        </div>
      );
      phoneField = <div className="ml-2">{phone}</div>;
      resumeView = (
        <div className="bioView">
          <div className="is-flex is-justify-content-space-between">
            {nameField}
            <button className="button is-success" onClick={this.toggleEdit}>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faEdit} />
              </span>
              <span>Edit</span>
            </button>
          </div>
          <div className="is-flex is-justify-content-start is-size-5">
            {addressField} | {phoneField}
          </div>
          <div className="is-flex is-justify-content-start is-size-5">{emailField} |</div>
        </div>
      );
    }

    return resumeView;
  }
}

export default Bio;
