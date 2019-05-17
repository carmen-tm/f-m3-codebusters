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
				name: 'User name',
				job: 'User job',
				phone: '',
				email: '',
				linkedin: '#',
				github: '#',
				avatar: defaultImage,
				miniature: ''
			},
    };
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.updateAvatar = this.updateAvatar.bind(this);
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
				userInfo: {
					...prevState.userInfo,
					[key]: value
				}
			};
		});
	}
  render(){

  return (
    <div className="App">
      <MainPage data={this.state.profile} methodInputText={this.handleInputsOnChange} updateAvatar={this.updateAvatar}/>
    </div>
  );}
}
export default App;