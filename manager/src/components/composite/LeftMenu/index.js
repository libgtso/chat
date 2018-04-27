import React, { Component } from "react";

import LeftMenuMessage from "../../base/LeftMenuMessage";
import LeftMenuAddProject from "../../base/LeftMenuAddProject";
import LeftMenuSearch from "../../base/LeftMenuSearch";

import "./LeftMenu.scss";

class LeftMenu extends Component {
  render() {
    return (
      <div className="component-left-menu-wrapper">
        <LeftMenuSearch onChange={this.onSearch} />

        <LeftMenuAddProject onClick={this.onAdd} />

        <div className="component-left-menu-projects">
          {this.hate_this.map(({ title, link, unread }, index) => (
            <LeftMenuMessage
              title={title}
              link={link}
              status={unread}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
  onSearch = () => {
    console.log("Чото ищем");
  };
  onAdd = () => {
    console.log("Добавили проект");
  };
  hate_this = [
    {
      title: "Some название чата",
      link: "http://ololo.ru",
      unread: true
    },
    {
      title: "Some название чата",
      link: "http://ololo.ru"
    },
    {
      title: "Some название чата",
      link: "http://ololo.ru"
    },
    {
      title: "Some название чата",
      link: "http://ololo.ru",
      unread: true
    },
    {
      title: "Some название чата",
      link: "http://ololo.ru"
    }
  ];
}

export default LeftMenu;
export { LeftMenu };
