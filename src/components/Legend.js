import React from 'react';

class Legend extends React.Component {
	constructor(props) {
		super(props);
		this.createIconClass = this.createIconClass.bind(this);
		this.createArrowClass = this.createArrowClass.bind(this);
	}

	createIconClass() {
		let classIcon = 'icon icon--fieldset ';
		classIcon += this.props.classIcon;
		return classIcon;
	}

	createArrowClass() {
		let arrowClass = 'arrow fas fa-chevron-';
		arrowClass += this.props.arrow;
		return arrowClass;
	}
	render() {
		const { title, btnId, arrwoId } = this.props;
		return (
			<section className="fieldset__title__container">
				<div className="icon-legend__container">
					<i className={this.createIconClass()} />
					<legend className="fieldset__title">{title}</legend>
				</div>
				<button type="button" className="btn--collapsable" id={btnId}>
					<i id={arrwoId} className={this.createArrowClass()} />
				</button>
			</section>
		);
	}
}

export default Legend;
