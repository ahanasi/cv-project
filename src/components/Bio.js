import React, { Component } from "react";
import BioView from "./BioView";
import BioEdit from "./BioEdit";

class Bio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jane Doe",
      address: "3195 Gambler Ln., Porter, TX 77365",
      email: "text@example.com",
      phone: "(123) 456-789",
      website: "https://github.com/jdoetest123",
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
    const { name, address, email, phone, website, isEditable } = this.state;
    let resumeView;

    if (isEditable) {
      resumeView = (
        <BioEdit
          isEditable={isEditable}
          name={name}
          address={address}
          email={email}
          phone={phone}
          website={website}
          handleInputChange={this.handleInputChange}
          toggleEdit={this.toggleEdit}
        />
      );
    } else {
      resumeView = (
        <BioView
          isEditable={isEditable}
          name={name}
          address={address}
          email={email}
          phone={phone}
          website={website}
          handleInputChange={this.handleInputChange}
          toggleEdit={this.toggleEdit}
        />
      );
    }

    return resumeView;
  }
}

export default Bio;
