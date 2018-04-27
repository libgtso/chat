import React, { Component } from 'react';
import './Manager.css';

import LeftMenu from './components/composite/LeftMenu';
import ChatWindow from './components/composite/ChatWindow';

class Manager extends Component {
	render() {
		return (
			<div className="component-manager-wrapper">
				<LeftMenu />
				<ChatWindow />
			</div>
		);
	}
}

export default Manager;
export { Manager };
