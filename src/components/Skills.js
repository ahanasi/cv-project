import React, { Component, KeyboardEventHandler } from "react";
import { ActionMeta, OnChangeValue } from "react-select";
import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

export default class Skills extends Component {
  state = {
    inputValue: "",
    value: [
      { label: "React", value: "React" },
      { label: "Python", value: "Python" },
    ],
  };
  handleChange = (value, actionMeta) => {
    console.group("Value Changed");
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value });
  };
  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  };
  handleKeyDown = (event) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        this.setState({
          inputValue: "",
          value: [...value, createOption(inputValue)],
        });
        event.preventDefault();
    }
  };
  render() {
    const { inputValue, value } = this.state;
    return (
      <div className="">
        <h2 className="has-text-info is-size-4 mb-2">Skills</h2>
        <CreatableSelect
          components={components}
          inputValue={inputValue}
          isClearable={false}
          isMulti
          menuIsOpen={false}
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          placeholder="React, Python..."
          value={value}
        />
      </div>
    );
  }
}
