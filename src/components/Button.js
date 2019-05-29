import React from 'react';

class Button extends React.Component {
	render() {
		const { btnClick, btnClass, textBtn } = this.props;
		return (
			<button type="button" onClick={btnClick} className={btnClass}>
				{textBtn}
			</button>
		);
	}
}

export default Button;
