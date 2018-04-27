import React from "react";

export default props => {
  this.props = props;
  if (this.props.online) {
    return <span className="component-user-list-dialog-status online" />;
  } else {
    return null;
  }
};
