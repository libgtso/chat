import React, { Component } from "react";

class DialogAuthorName extends Component {
  render() {
    return (
      <div className="component-user-list-dialog-author">{this.props.name}</div>
    );
  }
}

export default DialogAuthorName;
