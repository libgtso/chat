import React, { Component } from "react";
import ChatMessageDateTime from "../ChatMessageDateTime";

class ChatMessageText extends Component {
  render() {
    return (
      <div className="component-user-list-dialog-text">
        {this.props.message}
        <div className="component-chat-message-time">
          <ChatMessageDateTime date={this.props.date} time={this.props.time} />
        </div>
      </div>
    );
  }
}

export default ChatMessageText;
