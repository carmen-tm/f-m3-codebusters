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
			inputPlaceholder
		} = this.props;

		return (
			<div className={divClassName}>
				<label className={labelClassName} for={labelFor}>
					{labelInnerText}
				</label>
				<input
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
