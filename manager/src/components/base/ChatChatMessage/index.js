import React, { Component } from "react";
import face from "../../composite/Chat/face.png";
import ChatMessageFace from "../ChatMessageFace";
import ChatMessageText from "../ChatMessageText";
import MessageReadStatus from "../MessageReadStatus";

class ChatChatMessage extends Component {
  render() {
    const User_Manager = "component-chat-message " + this.props.contact;
    return (
      <div className={User_Manager}>
        <div className="component-chat-info">
          <MessageReadStatus checked={this.props.checked} />
          <div className="component-chat-message-face">
            <ChatMessageFace />
          </div>
        </div>

        <div className="component-chat-message-container">
          <div className="component-chat-message-text">
            <ChatMessageText
              message={this.props.message}
              time={this.props.time}
              date={this.props.date}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatChatMessage;
