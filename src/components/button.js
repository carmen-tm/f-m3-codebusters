import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <button type="button" onClick={this.props.BtnClick} className={this.props.btnClass}>{this.props.textBtn}</button>
        )
    }
}

export default Button;