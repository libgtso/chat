import React from "react";

export default props => {
  this.props = props;
  if (this.props.status) {
    return <div className="component-left-menu-project-unread" />;
  }
  return null;
};
