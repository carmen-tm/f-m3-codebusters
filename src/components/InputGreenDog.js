import React from 'react';

class InputGreenDog extends React.Component {
	render() {
		const {
			divClassName,
			labelClassName,
			labelFor,
			labelInnerText,
			btnType,
			btnClassName,
			btnSrc,
			btnInnerText,
			divPreviewClassName,
			inputType,
			inputClassName
		} = this.props;

		return (
			<div className={divClassName}>
				<label className={labelClassName} for={labelFor}>
					{labelInnerText}
				</label>
				<button type={btnType} className={btnClassName} src={btnSrc}>
					{btnInnerText}
				</button>
				<div className={divPreviewClassName} />
				<input type={inputType} className={inputClassName} value={''}/>
			</div>
		);
	}
}

export default InputGreenDog;
