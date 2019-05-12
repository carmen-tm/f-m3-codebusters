import React from 'react';

class Input extends React.Component{
    render(){
        return(
            <div className={this.props.divClassName}>
                <label className={this.props.labelClassName} for={this.props.labelFor}>{this.props.labelInnerText}</label>

                <input className={this.props.inputClassName} type={this.props.inputType} id={this.props.inputId} name={this.props.inputName} placeholder={this.props.inputPlaceholder} required> </input>
            </div>
        )
    }
}

export default Input;