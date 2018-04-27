import React from "react";
import LeftMenuStatus from "../../base/LeftMenuStatus";

export default props => {
  this.props = props;
  return (
    <div className="component-user-list-dialogs-stats">
      <div className="component-user-list-dialogs-stats-all selected">
        <span>{this.props.disclaimer}</span>
        <span className="component-user-list-dialogs-stats-count">
          {this.props.allcount}
        </span>
      </div>
      <div className="component-user-list-dialogs-stats-unread">
        <span>{this.props.disclaimer}</span>
        <span className="component-user-list-dialogs-stats-count">
          <LeftMenuStatus status={this.props.status} />
          {this.props.count}
        </span>
      </div>
    </div>
  );
};
