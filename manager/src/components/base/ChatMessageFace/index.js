import React, { Component } from "react";
import face from "../../composite/UserList/face.png";

class ChatMessageFace extends Component {
  render() {
    return (
      <div className="component-user-list-dialog-face">
        <img src={face} alt="face" />
      </div>
    );
  }
}

export default ChatMessageFace;
