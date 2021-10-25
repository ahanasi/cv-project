import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BioEdit(props) {
  const { name, address, email, phone, website, handleInputChange, toggleEdit } = props;

  return (
    <form className="BioEdit" onSubmit={toggleEdit.bind(this)}>
      <div className="is-flex is-justify-content-space-between">
        <div className="field is-horizontal column is-four-fifths">
          <label htmlFor="bioName" className="field-label label is-normal">
            Name
          </label>
          <input id="bioName" name="name" className="input field-body mr-6" type="text" placeholder="Jane Doe" value={name} onChange={handleInputChange.bind(this)} required />
          <label htmlFor="bioAddress" className="label field-label is-normal">
            Address
          </label>
          <input
            id="bioAddress"
            name="address"
            className="input field-body"
            type="text"
            placeholder="4960 Alpaca Way, Santa Ana, CA 92701"
            value={address}
            onChange={handleInputChange.bind(this)}
            required
          />
        </div>
        <button className="button is-success">
          <span className="icon is-small">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span>Submit</span>
        </button>
      </div>
      <div className="is-flex is-justify-content-space-between">
        <div className="field is-horizontal column is-four-fifths">
          <label htmlFor="bioEmail" className="label field-label">
            Email
          </label>
          <input id="bioEmail" name="email" className="input field-body mr-6" type="email" placeholder="alex@example.com" value={email} onChange={handleInputChange.bind(this)} required/>
          <label htmlFor="bioPhone" className="label field-label">
            Phone Number
          </label>
          <input id="bioPhone" name="phone" type="tel" className="input field-body" placeholder="(123) 000-000" value={phone} onChange={handleInputChange.bind(this)} />
        </div>
      </div>
      <div className="field is-horizontal column is-two-fifths">
        <label htmlFor="bioWebsite" className="label field-label is-normal">
          Website
        </label>
        <input id="bioWebsite" name="website" className="input field-body mr-3" type="text" placeholder="test.com" value={website} onChange={handleInputChange.bind(this)} />
      </div>
    </form>
  );
}

export default BioEdit;
