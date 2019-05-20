import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
		//Here we set the initial values (default texts rendered on the preview card)


		//Bind all class methods
	
		this.fillValueWithState = this.fillValueWithState.bind(this);
	}

	//Methods:
	

	fillValueWithState(event) {
		// const key = event.currentTarget.name;
		// const controlledValue = this.state.userInfo[key];
		// console.log(controlledValue);
		// return controlledValue;
	}

	render() {
		const {
			divClassName,
			labelClassName,
			labelFor,
			labelInnerText,
			inputClassName,
			inputType,
			inputId,
			inputName,
			inputPlaceholders
		} = this.props;

		return (
			<div className={divClassName}>
				<label className={labelClassName} htmlFor={labelFor}>
					{labelInnerText}
				</label>

				<input
					onChange={this.props.methodInputText}
					className={inputClassName}
					type={inputType}
					id={inputId}
					name={inputName}
					placeholder={inputPlaceholders}
					// value={this.fillValueWithState()}
					required
				/>
			</div>
		);
	}
}

export default Input;
