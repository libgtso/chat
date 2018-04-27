import React, { Component } from 'react';

import './Header.scss';

import face from './face.png';

class Header extends Component {
	render() {
		return (
			<div className="component-header-wrapper">
				<div className="component-header-box">
					<div className="component-header-face">
						<img src={face} alt="face" />
					</div>
					<div className="component-header-description">
						<div className="component-header-manager-name">
							<span>дай Винчик</span>
						</div>
						<div className="component-header-status">
							<span className="component-header-dot online" />
							<span className="component-header-status-text">Online</span>
						</div>
					</div>
				</div>

				<div className="component-header-minify-button">×</div>
			</div>
		);
	}
}

export default Header;
export { Header };
