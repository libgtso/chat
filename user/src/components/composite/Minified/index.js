import React, { Component } from 'react';

import './Minified.scss';

class Minified extends Component {
	render() {
		return (
			<div className="component-chat-minified-wrapper">
				<div className="component-chat-minified-status" />
				<div className="component-chat-minified-manager-name">
					<span>дай Винчик</span>
				</div>
				<div className="component-chat-minified-unread">
					<div className="component-chat-minified-unread-icon">!</div>
					<div className="component-chat-minified-unread-count">43</div>
				</div>
				<div className="component-chat-minified-control">
					<span>↗</span>
					<span>×</span>
				</div>
			</div>
		);
	}
}

export default Minified;
export { Minified };
