import React, { Component } from "react";
import ChatChatMessage from "../../base/ChatChatMessage";
import ChatInputBox from "../../base/ChatInputBox";
import ChatControl from "../../base/ChatControl";
import ChatMessageFace from "../../base/ChatMessageFace";
import ChatUserName from "../../base/ChatUserName";
import ChatMessageCount from "../../base/ChatMessageCount";

import "./Chat.scss";

class Chat extends Component {
  render() {
    return (
      <div className="component-chat-wrapper">
        <div className="component-chat-user">
          <div className="component-chat-user-face">
            <ChatMessageFace />
          </div>
          <div className="component-chat-user-info">
            <ChatUserName name={this.shit.name} />
            <ChatMessageCount name={this.count.name} all={this.count.all} />
          </div>
        </div>

        <div className="component-chat-controls">
          {this.sic.map(({ name }) => <ChatControl name={name} />)}
        </div>
        <div className="component-chat-messages-wrapper">
          <div className="component-chat-messages">
            {this.blevota.map(({ date, text, time, contact, status }) => (
              <ChatChatMessage
                date={date}
                time={time}
                message={text}
                contact={contact}
                checked={status}
              />
            ))}
          </div>
          <ChatInputBox />
        </div>
      </div>
    );
  }

  shit = { name: "Леопардо Давай Ввинчивай Сука" };

  count = {
    name: "Сообщений",
    all: 1324
  };

  sic = [
    {
      name: "Переслать"
    },
    {
      name: "В работу"
    },
    {
      name: "На кол"
    }
  ];

  blevota = [
    {
      status: true,
      contact: "manager",
      date: "Сегодня",
      time: " 23:03",
      text:
        "Значимость этих проблем настолько очевидна, что постоянный rкличественный рост и сфера нашей активности требует от нас анализа Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требует от нас анализа..."
    },
    {
      contact: "user",
      date: "Сегодня",
      time: " 23:01",
      text:
        "Значимость этих проблем настолько очевидна, что постоянный rкличественный рост и сфера нашей активности требует от нас анализа Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требует от нас анализа..."
    },
    {
      contact: "user",
      date: "Сегодня",
      time: " 23:01",
      text:
        "Значимость этих проблем настолько очевидна, что постоянный rкличественный рост и сфера нашей активности требует от нас анализа Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требует от нас анализа..."
    },
    {
      status: true,
      contact: "user",
      date: "Сегодня",
      time: " 23:01",
      text:
        "Значимость этих проблем настолько очевидна, что постоянный rкличественный рост и сфера нашей активности требует от нас анализа Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требует от нас анализа..."
    }
  ];
}

export default Chat;
