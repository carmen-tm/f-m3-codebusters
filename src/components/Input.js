import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
		//Here we set the initial values (default texts rendered on the preview card)
		this.state = {
			userInfo: {
				name: 'User name',
				job: 'User job',
				phone: '',
				email: '',
				linkedin: '#',
				github: '#',
				photo: '',
				miniature: ''
			},
			//Fake value, to see if the setState keeps the Object at all levels right
			test: true
		};

		//Bind all class methods
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);

		this.fillValueWithState = this.fillValueWithState.bind(this);
	}

	//Methods:
	handleInputsOnChange(event) {
		const key = event.currentTarget.name;
		const value = event.currentTarget.value;

		//Need to set the state with callback as we want to keep the PrevState all the time (the other inputs info)
		this.setState(prevState => {
			return {
				...prevState,
				userInfo: {
					...prevState.userInfo,
					[key]: value
				}
			};
		});
	}

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
			inputPlaceholder
		} = this.props;

		return (
			<div className={divClassName}>
				<label className={labelClassName} htmlFor={labelFor}>
					{labelInnerText}
				</label>

				<input
					onChange={this.handleInputsOnChange}
					className={inputClassName}
					type={inputType}
					id={inputId}
					name={inputName}
					placeholder={inputPlaceholder}
					// value={this.fillValueWithState()}
					required
				/>
			</div>
		);
	}
}

export default Input;
