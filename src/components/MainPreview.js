import React from 'react';

class MainPreview extends React.Component {
	render() {

		return (
			<section className="main-preview__container">
				<button className="reset__btn">
					<i className="far fa-trash-alt reset__icon" />
					Reset
				</button>

				<div className="card-user__container card__container">
					<div className="card-user card__container borderLeftGreen">
						<h2 className="card-user__name">{this.props.data.name}</h2>
						<h3 className="card-user__job">{this.props.data.job}</h3>
					</div>
				</div>

				<div className="card__picture js__profile-image" />

				<div className="card-sm__container card__container">
					<ul className="card__social-media-list">
						<li
							id="phone-li"
							className="card__item-list-no-border card-user__phone phone"
						>
							<a id="phone-link" className="card__link-phone" href={this.props.data.phone}>
								<i className="fas fa-mobile-alt" title="Mobile icon" />
							</a>
						</li>
						<li
							id="email-li"
							className="card__item-list-no-border card-user__email email"
						>
							<a className="card__link-email" href={this.props.data.email}>
								<i className="far fa-envelope" title="Email icon" />
							</a>
						</li>
						<li id="linkedin-li" className="card__item-list-no-border linkedin">
							<a className="card__link-linkedin" href={this.props.data.linkedin} target="_blank">
								<i className="fab fa-linkedin-in" title="Linkedin icon" />
							</a>
						</li>
						<li id="github-li" className="card__item-list-no-border github">
							<a
								className="card__link-github"
								id="gitHub-link"
								href={this.props.data.github}
								target="_blank"
							>
								<i className="fab fa-github-alt" title="Github icon" />
							</a>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}

export default MainPreview;
