import React, { Component } from 'react';

import './MessageBox.scss';

class MessageBox extends Component {
	render() {
		return (
			<div className="component-message-box-wrapper">
				<div className="component-message-box-list">
					<div className="component-message-box-message user">
						<div className="component-message-box-message-text">Эй, привет!</div>
						<div className="component-message-box-message-time">12.02.2017, 16:45</div>
					</div>
					<div className="component-message-box-message manager">
						<div className="component-message-box-message-text">Привет, привет!</div>
						<div className="component-message-box-message-time">Сегодня, 16:46</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MessageBox;
export { MessageBox };
