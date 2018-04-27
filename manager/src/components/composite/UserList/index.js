import React, { Component } from "react";

import "./UserList.scss";
import ChatWindowSelect from "../../base/ChatWindowSelect";
import DialogStats from "../../base/DialogStats";

class UserList extends Component {
  render() {
    return (
      <div className="component-user-list-wrapper">
        <div className="component-user-list-title">Некий открытый проект</div>
        <DialogStats
          alldialogs={this.alldialogs.disclaimer}
          allcount={this.alldialogs.allcount}
          count={this.stats.count}
          status={this.stats.status}
          disclaimer={this.stats.disclaimer}
        />
        <div className="component-user-list-dialogs">
          {this.again_hate.map(
            ({ name, date, time, text, online, status }, index) => (
              <ChatWindowSelect
                name={name}
                date={date}
                time={time}
                message={text}
                online={online}
                status={status}
                key={index}
              />
            )
          )}
        </div>
      </div>
    );
  }

  alldialogs = {
    disclaimer: "Все диалоги:",
    allcount: 21
  };

  stats = {
    count: 372,
    status: true,
    disclaimer: "Ожидают ответа:"
  };

  again_hate = [
    {
      name: "Вася пупкин",
      date: "Вчера",
      time: " 23:01",
      text:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требует от нас анализа...",
      online: true,
      status: "selected"
    },
    {
      name: "Вася пупкин",
      date: "Вчера",
      time: " 23:01",
      text:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требует от нас анализа...",
      online: true,
      status: null
    },
    {
      name: "Вася пупкин",
      date: "Вчера",
      time: " 23:01",
      text:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требует от нас анализа...",
      status: null
    }
  ];
}

export default UserList;
