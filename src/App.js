import React from 'react';
import MainPage from './components/MainPage.js';
import './stylesheets/App.scss';
<<<<<<< HEAD
//import { userInfo } from 'os';
=======
import defaultImage from './assets/defaultImage';

>>>>>>> 4e06274622a01b1f3146de3776bc7c33e9d0f86e


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
<<<<<<< HEAD
=======
			isAvatarDefault: true,
>>>>>>> 4e06274622a01b1f3146de3776bc7c33e9d0f86e
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
			palette : {
				number: 1,
			}
    };
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
	}
	
  handleColorChange(event){
		const {value} = event.currentTarget;
		this.setState(prevState => {
			return {
				palette:{
					...prevState.palette,
				 number: value,
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
  render(){

  return (
    <div className="App">
<<<<<<< HEAD
			<MainPage 
			data={this.state.profile} 
			methodInputText={this.handleInputsOnChange} 
			methodColorChange={this.handleColorChange} 
			checked={this.state.palette.number}
			color={this.state.palette.number}
			/>
=======
      <MainPage data={this.state.profile} methodInputText={this.handleInputsOnChange} updateAvatar={this.updateAvatar}/>
>>>>>>> 4e06274622a01b1f3146de3776bc7c33e9d0f86e
    </div>
  );}
}
export default App;