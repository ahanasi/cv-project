import React, { Component } from "react";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BioView(props) {
  const { isEditable, name, address, email, phone, handleInputChange, toggleEdit } = props;

  if (isEditable) {
    return (
      <div className="bioView">
        <div className="field is-horizontal column is-half">
          <label htmlFor="bioName" className="field-label label is-normal">
            Name
          </label>
          <input id="bioName" name="name" className="input field-body" type="text" placeholder="Jane Doe" value={name} onChange={handleInputChange.bind(this)} />
        </div>
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
            onChange={handleInputChange.bind(this)}
          />
        </div>
        <div className="field is-horizontal column is-half">
          <label htmlFor="bioEmail" className="label field-label">
            Email
          </label>
          <input id="bioEmail" name="email" className="input field-body" type="email" placeholder="alex@example.com" value={email} onChange={handleInputChange.bind(this)} />
        </div>
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
            onChange={handleInputChange.bind(this)}
            required
          />
        </div>
        <button className="button is-success" onClick={toggleEdit.bind(this)}>
          <span className="icon is-small">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span>Submit</span>
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default BioView;
