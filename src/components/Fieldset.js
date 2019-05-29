import React from 'react';
import Legend from './Legend';
import Panel from './Panel';

class Fieldset extends React.Component {
	render() {
		const { title, classIcon, btnId, arrowId, arrow, children} = this.props;
		return (
			<fieldset className="fieldset-item">
				<Legend
					title={title}
					classIcon={classIcon}
					btnId={btnId}
					arrowId={arrowId}
					arrow={arrow}
					onClickCollapsible={this.props.onClickCollapsible}
					
				/>
				<Panel>
				{children}
				</Panel>
			</fieldset>
		);
	}
}

export default Fieldset;
