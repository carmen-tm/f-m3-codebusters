import React from 'react';
import MainPage from './components/MainPage.js';
import './stylesheets/App.scss';
import defaultImage from './assets/defaultImage';



class App extends React.Component {
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
				linkedin: '#',
				github: '#',
				avatar: defaultImage,
			},
    };
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
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
 
  updateAvatar(img) {
    const {profile} = this.state;
    this.setState(prevState => {
      const newProfile = {...profile, avatar: img};
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

// 	sendRequest(this.state) {
//     buttonShareEL.disabled = true;

//     fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
//         method: 'POST',
//         body: JSON.stringify(userInfo),
//         headers: {
//             'content-type': 'application/json'
//         },
//     })
//         .then(function (resp) { buttonShareEL.disabled = false; return resp.json(); })
//         .then(function (result) { showURL(result); })
//         .catch(function (error) { console.log(error); });
// }

// showURL(result) {
//     const responseURL = document.querySelector('.response');
//     const twitterBtnEl = document.querySelector('.btn-twitter');
//     const twitterLink = document.querySelector('.twitter__link');
//     const defaultTweet = "https://twitter.com/intent/tweet?text=My awesome profile card ";
      
//      if (result.success) {
//         responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
//         twitterBtnEl.classList.remove('hidden');
//         twitterLink.href = defaultTweet + result.cardURL;

//     } else {
//         responseURL.innerHTML = 'ERROR:' + result.error;
//     }
// }
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
			/>
    </div>
  );}
}
export default App;