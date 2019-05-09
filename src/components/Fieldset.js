import React from 'react';
import Legend from './Legend';
import Panel from './Legend';

class Fieldset extends React.Component {
    render() {
        return (
            <fieldset className="fieldset-item">
                <Legend />
                <Panel />
            </fieldset>
        )
    }
}

export default Fieldset;