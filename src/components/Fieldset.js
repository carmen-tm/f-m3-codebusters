import React from 'react';
import Legend from './Legend';
import Panel from './Panel';

class Fieldset extends React.Component {
    render() {
        return (
            <fieldset className="fieldset-item">
                <Legend legend={this.props.title} classIcon={this.props.classIcon}/>
                <Panel />
            </fieldset>
        )
    }
}

export default Fieldset;