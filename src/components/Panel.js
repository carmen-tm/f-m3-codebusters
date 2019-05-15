import React from 'react';

class Panel extends React.Component {
	render() {
		const { children } = this.props;
		return <section class="fieldset__title__container">{children}</section>;
	}
}

export default Panel;
