import React from 'react';
import MainPage from '../components/MainPage.js';
import '../stylesheets/CardGenerator.scss';
import defaultImage from '../assets/defaultImage';

class CardGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAvatarDefault: true,
			defaultProfile: {
				defaultName: 'User name',
				defaultJob: 'User job'
			},
			profile: JSON.parse(localStorage.getItem('filledForm')) || {
				name: '',
				job: '',
				palette: 1,
				phone: '',
				email: '',
				linkedin: '',
				github: '',
				photo: defaultImage,
				miniature: ''
			},
			url: ''
		};
		this.handleColorChange = this.handleColorChange.bind(this);
		this.updateAvatar = this.updateAvatar.bind(this);
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.sendRequest = this.sendRequest.bind(this);
		this.handlerButtonShare = this.handlerButtonShare.bind(this);
		this.storeinLocalStorage = this.storeinLocalStorage.bind(this);
		this.btnClick = this.btnClick.bind(this);
	}

	storeinLocalStorage() {
		localStorage.setItem('filledForm', JSON.stringify(this.state.profile));
	}

	componentDidUpdate() {
		this.storeinLocalStorage();
	}

	handleColorChange(event) {
		const { value } = event.currentTarget;
		this.setState(prevState => {
			return {
				profile: {
					...prevState.profile,
					palette: value
				}
			};
		});
	}

	updateAvatar(image) {
		const { profile } = this.state;
		this.setState(prevState => {
			const newProfile = { ...profile, photo: image };
			return {
				profile: newProfile,
				isAvatarDefault: false
			};
		});
	}

	handleInputsOnChange(event) {
		const key = event.currentTarget.name;
		const value = event.currentTarget.value;
		this.setState(prevState => {
			return {
				profile: {
					...prevState.profile,
					[key]: value
				}
			};
		});
	}

	btnClick(e) {
		localStorage.removeItem('filledForm');
		this.setState({
			profile: {
				name: '',
				job: '',
				palette: 1,
				phone: '',
				email: '',
				linkedin: '',
				github: '',
				photo: defaultImage,
				miniature: ''
			}
		});
	}

	sendRequest(buttonShare) {
		buttonShare.disabled = true;
		fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
			method: 'POST',
			body: JSON.stringify(this.state.profile),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(function(resp) {
				buttonShare.disabled = false;
				return resp.json();
			})
			.then(result => {
				this.setState({
					url: result.cardURL,
					success: result.success,
					messageError: result.error
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	handlerButtonShare(event) {
		const buttonShare = event.currentTarget;
		this.sendRequest(buttonShare);
	}

	render() {
		return (
			<div className="App">
				<MainPage
					defaultProfile={this.state.defaultProfile}
					data={this.state.profile}
					methodInputText={this.handleInputsOnChange}
					methodColorChange={this.handleColorChange}
					checked={this.state.profile.palette}
					color={this.state.profile.palette}
					updateAvatar={this.updateAvatar}
					messageError={this.state.messageError}
					success={this.state.success}
					btnShare={this.handlerButtonShare}
					urlCard={this.state.url}
					profileObject={this.state.profile}
					btnClick={this.btnClick}
				/>
			</div>
		);
	}
}
export default CardGenerator;
