import React, { Component } from 'react';
import './Chat.css';

import Header from './components/composite/Header';
import InputBox from './components/composite/InputBox';
import MessageBox from './components/composite/MessageBox';

import Minified from './components/composite/Minified';

class Chat extends Component {
	render() {
		return (
			<div>
				<div className="component-chat-wrapper">
					<Header />
					<MessageBox />
					<InputBox />
				</div>
				<Minified />
			</div>
		);
	}
}

export default Chat;
export { Chat };
