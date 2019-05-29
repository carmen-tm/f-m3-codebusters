import React from 'react';

class Panel extends React.Component {
	render() {
		const { children } = this.props;
		return <section >{children}</section>;
	}
}

export default Panel;
