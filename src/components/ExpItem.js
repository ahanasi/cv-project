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
    if (isEditable) {
      return (
        <section className="column is-three-fifths">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Role</label>
            </div>
            <div className="field-body">
              <div className="field">
                <label htmlFor="company" className="is-sr-only">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="input is-small"
                  name="company"
                  value={itemInfo.company}
                  placeholder="Company"
                  onChange={(e) => {
                    changeItem(e, id);
                  }}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="position" className="is-sr-only">
                  Position
                </label>
                <input
                  id="position"
                  type="text"
                  className="input is-small"
                  name="position"
                  value={itemInfo.position}
                  placeholder="Position"
                  onChange={(e) => {
                    changeItem(e, id);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Dates</label>
            </div>
            <div className="field-body">
              <div className="field">
                <label htmlFor="dateFrom" className="is-sr-only">
                  From
                </label>
                <input
                  id="dateFrom"
                  type="text"
                  className="input is-small"
                  name="dateFrom"
                  placeholder="Date Earned"
                  value={itemInfo.dateFrom}
                  onChange={(e) => {
                    changeItem(e, id);
                  }}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="dateTo" className="is-sr-only">
                  To
                </label>
                <input
                  id="dateTo"
                  type="text"
                  className="input is-small"
                  name="dateTo"
                  placeholder="To"
                  value={itemInfo.dateTo}
                  onChange={(e) => {
                    changeItem(e, id);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Description</label>
            </div>
            <div className="field-body">
              <div className="field">
                <label htmlFor="tasks" className="is-sr-only">
                  Description
                </label>
                <textarea
                  id="tasks"
                  className="textarea is-small"
                  name="tasks"
                  value={itemInfo.tasks}
                  onChange={(e) => {
                    changeItem(e, id);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
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
}

export default ExpItem;
