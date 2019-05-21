import React from 'react';

class Input extends React.Component {
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
					value={this.props.methodContrValue}
					required
				/>
			</div>
		);
	}
}

export default Input;
