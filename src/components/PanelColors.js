import React from 'react';

class PanelColors extends React.Component {
	render() {
        const methodColorChange = this.props.methodColorChange;
		return (




			<section id="section-design" className="design panel close">




				<p className="section__title">Colors</p>


				<div className="options__container">
					<div className="option__container">
						<label htmlFor="palette--blue-green" />
						<input
							id="palette--blue-green"
							type="radio"
							checked={parseInt(this.props.checked)=== 1}
							value= {1}
                            name="colors"
                            onChange ={methodColorChange}
						/>
						<div className="palette__container">
							<div className="sample-color blue-green--1" />
							<div className="sample-color blue-green--2" />
							<div className="sample-color blue-green--3" />
						</div>
					</div>
					<div className="option__container">
						<label htmlFor="palette--red-orange" />
						<input
							id="palette--red-orange"
							type="radio"
							value= {2}
                            name="colors"
                            onChange ={methodColorChange}
                            checked={parseInt(this.props.checked)=== 2}
						/>
						<div className="palette__container">
							<div className="sample-color red-orange--1" />
							<div className="sample-color red-orange--2" />
							<div className="sample-color red-orange--3" />
						</div>
					</div>
					<div className="option__container">
						<label htmlFor="palette--blue-gray" />
						<input
							id="palette--blue-gray"
							type="radio"
							value= {3}
                            name="colors"
                            onChange ={methodColorChange}
                            checked={parseInt(this.props.checked)=== 3}
						/>
						<div className="palette__container">
							<div className="sample-color blue-gray--1" />
							<div className="sample-color blue-gray--2" />
							<div className="sample-color blue-gray--3" />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default PanelColors;
