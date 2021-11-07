import React, { Component } from "react";

class ExpItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemInfo: {
        company: "",
        position: "",
        tasks: "",
        dateFrom: "",
        dateTo: "",
      },
      id: "",
      isEditable: true,
    };
  }

  render() {
    const { itemInfo, id, isEditable, changeItem } = this.props;
    return (
      <div className="">
        <p className="is-size-5">
          <span className="has-text-weight-bold">{itemInfo.company}</span> | <span className="is-italic has-text-weight-medium">{itemInfo.position}</span>
        </p>
        <p className="has-text-grey">
          {itemInfo.dateFrom} – {itemInfo.dateTo}
        </p>
        <p className="column is-three-quarters tasks">{itemInfo.tasks}</p>
      </div>
    );
  }
}

export default ExpItem;
