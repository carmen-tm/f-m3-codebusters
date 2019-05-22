import React from 'react';

class Panel extends React.Component {
	render() {
		const { children } = this.props;
		return <section className="fieldset__title__container">{children}</section>;
	}
}

export default Panel;
