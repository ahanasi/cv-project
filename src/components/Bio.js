import React, { Component } from "react";

class Bio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jane Doe",
      email: "text@example.com",
      phone: "(123) 456-789",
      isEditable: false,
    };
  }

  render() {
    const { name, email, phone, isEditable } = this.state;
    let emailField, nameField, phoneField;

    if (isEditable) {
      nameField = (
        <div className="column is-half">
          <label htmlFor="bioName" className="label is-sr-only">
            Name
          </label>
          <input id="bioName" className="input" type="text" placeholder="Jane Doe" />
        </div>
      );
      emailField = (
        <div className="column is-half">
          <label htmlFor="bioEmail" className="label is-sr-only">
            Email
          </label>
          <input id="bioEmail" className="input" type="email" placeholder="alex@example.com" />
        </div>
      );
      phoneField = (
        <div className="column is-half">
          <label htmlFor="bioPhone" className="label is-sr-only">
            Enter your phone number:
          </label>
          <input id="bioPhone" type="tel" className="input" pattern="([0-9]{3})[0-9]{3}-[0-9]{4}" placeholder="(123) 000-000" required />
        </div>
      );
    } else {
      nameField = <div className="m-1 has-text-left">{name}</div>;
      emailField = <div className="m-1 has-text-left">{email}</div>;
      phoneField = <div className="m-1 has-text-left">{phone}</div>;
    }

    return (
      <section className="columns is-flex-direction-column">
        {nameField}
        {emailField}
        {phoneField}
      </section>
    );
  }
}

export default Bio;
