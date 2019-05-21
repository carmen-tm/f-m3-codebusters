import React from 'react';
import MainPage from './components/MainPage.js';
import './stylesheets/App.scss';
import defaultImage from './assets/defaultImage';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAvatarDefault: true,
			// circles:{
			// 	phone: false,
			// 	email: false,
			// 	linkedin: false,
			// 	github: false
			// },
			profile: {
				name: 'User name',
				job: 'User job',
				phone: '',
				email: '',
				emailIsFilled: '',
				linkedin: '',
				github: '',
				photo: defaultImage,
				miniature: ''
			},
			palette: {
				number: 1
			}
		};

		//Bind all class methods
		this.fillValueWithState = this.fillValueWithState.bind(this);
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.updateAvatar = this.updateAvatar.bind(this);
		// this.addColorCircles = this.addColorCircles.bind(this);
	}

	//Methods:
	handleColorChange(event) {
		const { value } = event.currentTarget;
		this.setState(prevState => {
			return {
				palette: {
					...prevState.palette,
					number: value
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

	//Method to make all input texts Controllable Components
	fillValueWithState(event) {
		const key = event.currentTarget.name;
		console.log(key);
		const controlledValue = this.state.profile[key];
		console.log(controlledValue);
		return controlledValue;
	}

	handleInputsOnChange(event) {
		const key = event.currentTarget.name;
		const value = event.currentTarget.value;

		//Need to set the state with callback as we want to keep the PrevState all the time (the other inputs info)
		this.setState(prevState => {
			return {
				// circles: {
				// 	...prevState.circles,
				// 	[key]:true,
				// },
				profile: {
					...prevState.profile,
					[key]: value
				}
			};
		});
		// return key;
	}
	// addColorCircles([key]){
	// 	this.setState
	// 	let circleClass = '';
	// 	return ([key]) ? circleClass='card__item-list' : circleClass='card__item-list-no-border'
	// };

	render() {
		return (
			<div className="App">
				<MainPage
					data={this.state.profile}
					// circles = {this.state.circles}
					// methodCircles = {this.addColorCircles}
					methodInputText={this.handleInputsOnChange}
					methodContrValue={this.fillValueWithState}
					methodColorChange={this.handleColorChange}
					checked={this.state.palette.number}
					color={this.state.palette.number}
					updateAvatar={this.updateAvatar}
				/>
			</div>
		);
	}
}
export default App;
