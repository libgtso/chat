import React, { Component } from "react";
import attach from "../../composite/Chat/attach.png";

class ChatInputBox extends Component {
  render() {
    return (
      <div className="component-chat-inputbox">
        <div className="component-chat-inputbox-textarea">
          <textarea />
        </div>
        <div className="component-chat-inputbox-submit-group">
          <div className="component-chat-inputbox-attach">
            <img src={attach} alt="Прикрепить" />
          </div>
          <div className="component-chat-inputbox-submit">ОТПРАВИТЬ</div>
        </div>
      </div>
    );
  }
}

export default ChatInputBox;
