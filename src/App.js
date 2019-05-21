import React from 'react';
import MainPage from './components/MainPage.js';
import './stylesheets/App.scss';
import defaultImage from './assets/defaultImage';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
			isAvatarDefault: true,
			// circles:{
			// 	phone: false,
			// 	email: false,
			// 	linkedin: false,
			// 	github: false
			// },
			profile: {
				palette: 1,
				name: 'User name',
				job: 'User job',
				phone: '',
				email: '',
				linkedin: '#',
				github: '#',
				photo: defaultImage,
				miniature: "",
			},
    };
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.updateAvatar = this.updateAvatar.bind(this);

		this.showURL = this.showURL.bind(this);
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
	}

	sendRequest(profile,buttonShare){
		buttonShare.disabled = true;
		console.log(this.state.profile)
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
			method: 'POST',
			body: JSON.stringify(profile),
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
		console.log('1');
		this.sendRequest(this.props.profile,buttonShare);
	}
	
	showURL(result) {
		console.log('mira saray funciono')
    // const responseURL = document.querySelector('.response');
    // const twitterBtnEl = document.querySelector('.btn-twitter');
    // const twitterLink = document.querySelector('.twitter__link');
    // const defaultTweet = "https://twitter.com/intent/tweet?text=My awesome profile card ";
      
    //  if (result.success) {
    //     responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    //     twitterBtnEl.classList.remove('hidden');
    //     twitterLink.href = defaultTweet + result.cardURL;

    // } else {
    //     responseURL.innerHTML = 'ERROR:' + result.error;
    // }
	}
  render(){

  return (
    <div className="App">
			<MainPage 
			data={this.state.profile}
			// circles = {this.state.circles}
			// methodCircles = {this.addColorCircles}
			methodInputText={this.handleInputsOnChange} 
			methodColorChange={this.handleColorChange} 
			checked={this.state.profile.palette}
			color={this.state.profile.palette}
			updateAvatar={this.updateAvatar}
			btnShare={this.handlerButtonShare}
			/>
    </div>
  );}
}
export default App;