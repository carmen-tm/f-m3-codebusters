import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
		//Here we set the initial values (default texts rendered on the preview card)
		this.state = {
			userInfo: {
				name: 'User',
				job: 'User job',
				phone: '',
				email: '',
				linkedin: '#',
				github: '#',
				photo: '',
				miniature: ''
			}
		};
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
	}

	//Methods:
	handleInputsOnChange(event) {
		const key = event.currentTarget.name;
		this.setState({
			[key]: event.target.value
		});
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
				<label className={labelClassName} for={labelFor}>
					{labelInnerText}
				</label>

				<input
					onChange={this.handleInputsOnChange}
					className={inputClassName}
					type={inputType}
					id={inputId}
					name={inputName}
					placeholder={inputPlaceholder}
					required
				/>
			</div>
		);
	}
}

export default Input;
