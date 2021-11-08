import React, { Component } from "react";
import Switch from "react-switch";

export default class ViewToggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    const resume = document.querySelector(".main");
    const btns = resume.getElementsByTagName("button");
    const selectControl = resume.querySelector(".css-1s2u09g-control");
    for (let i = 0; i < btns.length; i++) {
      if (checked) {
        btns[i].style.display = "none";
      } else {
        btns[i].style.display = "inline-flex";
      }
    }

    if (checked) {
      resume.querySelectorAll(".css-xb97g8").forEach((element) => element.classList.add("is-hidden"));
      resume.querySelectorAll(".css-12jo7m5").forEach((element) => element.classList.add("p-1"));
      selectControl.style.borderStyle = "none";
    } else {
      resume.querySelectorAll(".css-xb97g8").forEach((element) => element.classList.remove("is-hidden"));
      resume.querySelectorAll(".css-12jo7m5").forEach((element) => element.classList.remove("p-1"));
      selectControl.style.borderStyle = "solid";
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="viewToggle" className="is-sr-only">
          Switch to Print View
        </label>
        <Switch
          id="viewToggle"
          onChange={this.handleChange}
          checked={this.state.checked}
          height={30}
          width={70}
          uncheckedIcon={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontSize: 14, color: "white", fontWeight: "bold", paddingRight: 2 }}>
              Edit
            </div>
          }
          checkedIcon={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontSize: 14, color: "white", fontWeight: "bold", paddingLeft: 2 }}>
              View
            </div>
          }
        />
      </div>
    );
  }
}
