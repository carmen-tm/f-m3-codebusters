import React from 'react';

class GetAvatar extends React.Component {
	constructor(props) {
		super(props);

		this.fr = new FileReader();
		this.myFileField = React.createRef();

		this.handleFilePicker = this.handleFilePicker.bind(this);
		this.uploadImage = this.uploadImage.bind(this);
		this.getImage = this.getImage.bind(this);
	}
	handleFilePicker() {
		this.myFileField.current.click();
	}

	uploadImage(e) {
		const myFile = e.currentTarget.files[0];
		this.fr.addEventListener('load', this.getImage);
		this.fr.readAsDataURL(myFile);
	}

	getImage() {
		const image = this.fr.result;
		this.props.updateAvatar(image);
	}

	getPreview(isDefault, image) {
		return !isDefault ? { backgroundImage: `url(${image})` } : {};
	}
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
			inputClassName,
			isAvatarDefault,
			photo
		} = this.props;

		return (
			<div className={divClassName}>
				<label className={labelClassName} htmlFor={labelFor}>
					{labelInnerText}
				</label>

				<button
					type={btnType}
					className={btnClassName}
					src={btnSrc}
					onClick={this.handleFilePicker}
				>
					{btnInnerText}
				</button>

				<div
					className={divPreviewClassName}
					style={this.getPreview(isAvatarDefault, photo)}
				/>

				<input
					type={inputType}
					className={inputClassName}
					value={''}
					ref={this.myFileField}
					onChange={this.uploadImage}
				/>
			</div>
		);
	}
}

export default GetAvatar;
