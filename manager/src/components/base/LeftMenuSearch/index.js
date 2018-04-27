import React, { Component } from "react";
import searchIcon from "../../composite/LeftMenu/search.png";

class LeftMenuSearch extends Component {
  render() {
    return (
      <div className="component-left-menu-search">
        <div className="component-left-menu-search-icon">
          <img src={searchIcon} alt="Поиск" />
        </div>
        <div className="component-left-menu-search-input">
          <input
            type="text"
            placeholder="asdasdads"
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default LeftMenuSearch;
