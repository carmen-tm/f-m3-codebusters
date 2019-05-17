import React from 'react';
import Fieldset from './Fieldset';
import PanelColors from './PanelColors';
import PanelFill from './PanelFill';
import PanelShare from './PanelShare';

class MainForm extends React.Component {
	render() {
		return (
			<form action="" method="post">
				<Fieldset
					title="Design"
					classIcon="far fa-object-ungroup"
					btnId="ButtonDesign"
					arrowId="arrow-design"
					arrow="up"
				>
					<PanelColors />
				</Fieldset>

				<Fieldset
          title="Fill"
          classIcon="far fa-keyboard"
          btnId="ButtonFill"
          arrowId="arrow-fillTheGap"
					arrow="down"  
					    
        >
          <PanelFill methodInputText={this.props.methodInputText} />
        </Fieldset>  

				<Fieldset
					title="Share"
					classIcon="fas fa-share-alt"
					btnId="ButtonShare"
					arrowId="arrow-share"
					arrow="down"
				>
					<PanelShare />
				</Fieldset>
			</form>
		);
	}
}

export default MainForm;
