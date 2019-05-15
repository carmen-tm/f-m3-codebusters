import React from 'react';
import Legend from './Legend';
import Panel from './Panel';

class Fieldset extends React.Component {
	render() {
		return (
			<fieldset className="fieldset-item">
				<Legend
					title={this.props.title}
					classIcon={this.props.classIcon}
					btnId={this.props.btnId}
					arrowId={this.props.arrowId}
					arrow={this.props.arrow}
				/>
				<Panel children={this.props.children} />
			</fieldset>
		);
	}
}

export default Fieldset;
