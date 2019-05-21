import React from 'react';
import MainPage from '../components/MainPage.js';
import '../stylesheets/CardGenerator.scss';
import defaultImage from '../assets/defaultImage';



class CardGenerator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
			isAvatarDefault: true,
			profile: {
				palette: 1,
				name: 'User name',
				job: 'User job',
				phone: '',
				email: '',
				linkedin: '',
				github: '',
				photo: defaultImage,
				miniature: ''
			},
			twitter: false,
    };
		this.handleColorChange = this.handleColorChange.bind(this);
		this.updateAvatar = this.updateAvatar.bind(this);
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.sendRequest = this.sendRequest.bind(this);
		this.handlerButtonShare = this.handlerButtonShare.bind(this);

	}
	
	handleColorChange(event){
		const {value} = event.currentTarget;
		this.setState(prevState => {
			return {
				profile:{
					...prevState.profile,
				 palette: value,
				}
			}
		});
	}
 
  updateAvatar(image) {
    const {profile} = this.state;
    this.setState(prevState => {
      const newProfile = {...profile, photo: image};
      return {
        profile: newProfile,
        isAvatarDefault: false
      }
    });
  }
	
  handleInputsOnChange(event) {
		const key = event.currentTarget.name;
		const value = event.currentTarget.value;

		//Need to set the state with callback as we want to keep the PrevState all the time (the other inputs info)
		this.setState(prevState => {
			return {
				profile: {
					...prevState.profile,
					[key]: value
				}
			};
		});
	}

	sendRequest(buttonShare){
		buttonShare.disabled = true;
		console.log(this.state.profile)
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
			method: 'POST',
			body: JSON.stringify(this.state.profile),
			headers: {
				'content-type': 'application/json'
			},
    })
		.then(function (resp) { buttonShare.disabled = false; return resp.json(); })
		.then(function (result) { console.log(result); })
		.catch(function (error) { console.log(error); });
	}

	handlerButtonShare(event){
		const buttonShare = event.currentTarget;
		console.log('hi')
		this.sendRequest(buttonShare);
	}
  
  render(){

  return (
    <div className="App">
			<MainPage 
			data={this.state.profile} 
			methodInputText={this.handleInputsOnChange} 
			methodColorChange={this.handleColorChange} 
			checked={this.state.profile.palette}
			color={this.state.profile.palette}
			updateAvatar={this.updateAvatar}
			twitter={this.state.twitter}
			btnShare={this.handlerButtonShare}
			/>
    </div>
  );}
}
export default CardGenerator;