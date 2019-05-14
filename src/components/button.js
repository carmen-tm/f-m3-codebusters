import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <button type="button">{this.props.textButton}</button>
        )
    }
}

export default Button;