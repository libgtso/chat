import React, { Component } from "react";

class ChatMessageDateTime extends Component {
  render() {
    return (
      <div className="component-user-list-dialog-datetime">
        {this.props.date},
        {this.props.time}
      </div>
    );
  }
}

export default ChatMessageDateTime;
