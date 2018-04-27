import React, { Component } from "react";
import LeftMenuLink from "../LeftMenuLink";
import LeftMenuStatus from "../LeftMenuStatus";

class LeftMenuMessage extends Component {
  render() {
    return (
      <div className="component-left-menu-project">
        <LeftMenuStatus status={this.props.status} />
        <div className="component-left-menu-project-label">
          <span>{this.props.title}</span>
        </div>
        <LeftMenuLink link={this.props.link} />
      </div>
    );
  }
}

export default LeftMenuMessage;
