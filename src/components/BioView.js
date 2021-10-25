import React from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BioView(props) {
  const { name, address, email, phone, website, toggleEdit } = props;

  return (
    <div className="BioView">
      <div className="is-flex is-justify-content-space-between">
        <div className="has-text-info is-size-1">{name}</div>
        <button className="button is-ghost has-text-info-dark" onClick={toggleEdit.bind(this)}>
          <span className="icon is-small">
            <FontAwesomeIcon icon={faEdit} />
          </span>
          <span>Edit</span>
        </button>
      </div>
      <div className="is-flex is-justify-content-start is-size-5">
        <div className="mr-2">{address}</div>
        {phone !== "" && (
          <div>
            |
            <a href={"tel:" + { phone }} className="ml-2">
              {phone}
            </a>
          </div>
        )}
      </div>
      <div className="is-flex is-justify-content-start is-size-5">
        <div className="mr-2">
          <a href={"mailto:" + email}>{email}</a>
        </div>
        {website !== "" && (
          <div>
            |
            <a href={website} className="ml-2">
              {website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default BioView;
