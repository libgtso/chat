import React from "react";

export default props => {
  this.props = props;
  if (this.props.checked) {
    return <div className="component-chat-message-check checked" />;
  } else {
    return <div className="component-chat-message-check" />;
  }
};
