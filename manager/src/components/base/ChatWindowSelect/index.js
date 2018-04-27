import React, { Component } from "react";
import ChatMessageFace from "../ChatMessageFace";
import DialogAuthorName from "../DialogAuthorName";
import ChatMessageDateTime from "../ChatMessageDateTime";
import ChatMessageText from "../ChatMessageText";
import ChatWindowStatus from "../ChatWindowStatus";

class ChatWindowSelect extends Component {
  render() {
    const DialogClassAdd =
      "component-user-list-dialog " +
      (this.props.status ? "selected" : "not-selected");
    return (
      <div className={DialogClassAdd}>
        <ChatWindowStatus online={this.props.online} />
        <ChatMessageFace />
        <div className="component-user-list-dialog-message">
          <DialogAuthorName name={this.props.name} />
          <ChatMessageDateTime date={this.props.date} time={this.props.time} />
          <ChatMessageText message={this.props.message} />
        </div>
      </div>
    );
  }
}

export default ChatWindowSelect;
