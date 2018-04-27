import React from "react";

export default props => {
  this.props = props;
  return (
    <div className="component-chat-user-info-message-count">
      {this.props.name}: {this.props.all}
    </div>
  );
};
