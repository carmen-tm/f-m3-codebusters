import React from 'react';

function changeClassColorTitle(value){
	let classCard = 'card-user card__container ';
	if(parseInt(value) === 1){
		classCard += 'green-palette borderLeftGreen';
		return classCard
 } else if(parseInt(value)  === 2){
	 classCard += 'red-palette borderLeftRed';
	 return classCard
 } else if(parseInt(value)  === 3){
	 classCard += 'gray-palette borderLeftGray';
	 return classCard}
}

function changeClassColorList(value){
	let classIcons = 'card-sm__container card__container ';
	if(parseInt(value) === 1){
		classIcons += 'green-palette';
		return classIcons
 } else if(parseInt(value)  === 2){
	 classIcons += 'red-palette';
	 return classIcons
 } else if(parseInt(value)  === 3){
	 classIcons += 'gray-palette';
	 return classIcons}
}


class MainPreview extends React.Component {
	displayDefaultName(){
		const {defaultName}=this.props.defaultProfile;
		const {name}=this.props.data;
		if (!name){
			return defaultName
		}else{
			return name
		}
	}
	displayDefaultJob(){
		const {defaultJob}=this.props.defaultProfile;
		const {job}=this.props.data;
		if (!job){
			return defaultJob
		}else{
			return job
		}
	}
	render() {
		const {phone,email,linkedin,github, photo} = this.props.data;
		const {color} =this.props;

		return (
			<section className="main-preview__container">
				<button className="reset__btn">
					<i className="far fa-trash-alt reset__icon" />
					Reset
				</button>

				<div className="card-user__container card__container">
					<div className={changeClassColorTitle(color)}>
						<h2 className="card-user__name">{this.displayDefaultName()}</h2>
						<h3 className="card-user__job">{this.displayDefaultJob()}</h3>
					</div>
				</div>

				<div className="card__picture js__profile-image" style={{backgroundImage:`url(${photo})`}}/>

				<div className={changeClassColorList(color)}>
					<ul className="card__social-media-list">
						<li
							id="phone-li"
							className= "card__item-list card-user__phone phone"
						>
							<a id="phone-link" className="card__link-phone" href={phone}>
								<i className="fas fa-mobile-alt" title="Mobile icon" />
							</a>
						</li>
						<li
							id="email-li"
							className="card__item-list card-user__email email"
						>
							<a className="card__link-email" href={email}>
								<i className="far fa-envelope" title="Email icon" />
							</a>
						</li>
						<li id="linkedin-li" className="card__item-list linkedin">
							<a 
								className="card__link-linkedin" 
								href={`https://www.linkedin.com/in/${linkedin}`}
								target="_blank" 
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin-in" title="Linkedin icon" />
							</a>
						</li>
						<li id="github-li" className="card__item-list github">
							<a
								className="card__link-github"
								id="gitHub-link"
								href={`https://github.com/${github}`}
								target="_blank"
								rel="noopener noreferrer"
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
