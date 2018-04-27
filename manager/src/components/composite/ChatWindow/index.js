import React, { Component } from 'react';

import TopMenu from '../TopMenu';
import UserList from '../UserList';
import Chat from '../Chat';

import './ChatWindow.scss';

class ChatWindow extends Component {
	render() {
		return (
			<div className="component-chat-window-wrapper">
				<TopMenu />
				<UserList />
				<Chat />
			</div>
		);
	}
}

export default ChatWindow;
export { ChatWindow };
