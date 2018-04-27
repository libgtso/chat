import React, { Component } from 'react';

import './InputBox.scss';
import attach from './attach.png';

class InputBox extends Component {
	render() {
		return (
			<div className="component-input-box-wrapper">
				<div className="component-input-box-textarea">
					<textarea />
				</div>
				<div className="component-input-box-submit-group">
					<div className="component-input-box-attach">
						<img src={attach} alt="Прикрепить" />
					</div>
					<div className="component-input-box-submit">ОТПРАВИТЬ</div>
				</div>
			</div>
		);
	}
}

export default InputBox;
export { InputBox };
