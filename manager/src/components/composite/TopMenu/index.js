import React, { Component } from 'react';

import './TopMenu.scss';
import face from './face.png';
import logout from './logout.png';

class TopMenu extends Component {
	render() {
		return (
			<div className="component-top-menu-wrapper">
				<div className="component-top-menu-hider">⭰</div>
				<div className="component-top-menu-logo">Logo</div>
				<div className="component-top-menu-manager-info">
					<div className="component-top-menu-manager-info-face">
						<img src={face} alt="Профиль" />
					</div>
					<div className="component-top-menu-manager-info-name">
						<a href="#">Леонардо да Винчи</a>
					</div>
					<div className="component-top-menu-manager-info-logout">
						<img src={logout} alt="Выйти" />
					</div>
				</div>
				<div className="component-top-menu-controls">
					<a href="#">Настройки</a>
					<a href="#">Написать разработчику</a>
				</div>
			</div>
		);
	}
}

export default TopMenu;
export { TopMenu };
