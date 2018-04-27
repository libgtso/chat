import React, { Component } from "react";

class LeftMenuLink extends Component {
  render() {
    return (
      <div className="component-left-menu-project-link">
        <a href={this.props.link}>{this.props.link}</a>
      </div>
    );
  }
}

export default LeftMenuLink;
