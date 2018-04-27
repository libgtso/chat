import React, { Component } from "react";

class LeftMenuAddProject extends Component {
  render() {
    return (
      <div
        className="component-left-menu-add-project"
        onClick={this.props.onClick}
      >
        <div className="component-left-menu-add-project-icon">
          <span>+</span>
        </div>
        <div className="component-left-menu-add-project-label">
          <span>Добавить проект</span>
        </div>
      </div>
    );
  }
}

export default LeftMenuAddProject;
